<template>
  <div class="baner" :class = " isShowBannerParam? 'showBaner' : 'closeBaner' ">
    <div class="head" @click="showBanerClick">
      <span class="logo"></span>
      <span class="txt">泰立智汇</span>
    </div>
    <div class="banerCon" @click="stopPropa" >
      <el-row class="tac b-box">
        <el-col class="b-box">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            background-color="#061733"
            text-color="#fff"
            :router="isUserRouter"
            active-text-color="#ffd04b">
            <el-submenu index="1" v-if="userRouterInfo[14] || userRouterInfo[5]||userRouterInfo[16]||userRouterInfo[1]">
              <template slot="title">
                <i class="el-icon-location noLog wisdomManagement"></i>
                <span class="textPL">智慧管理</span>
              </template>
              <el-menu-item-group>
                <!--<template slot="title">分组一</template>-->
                <el-menu-item v-if="userRouterInfo[14]" index="/DoorControl"><span class="textPL">门禁系统</span></el-menu-item>
                <el-menu-item v-if="userRouterInfo[5]" index="/VideoSurveillance"><span class="textPL">视频监控系统</span></el-menu-item>
                <el-menu-item v-if="userRouterInfo[16]" index="/fireAlarm"><span class="textPL">消防系统</span></el-menu-item>
                <el-menu-item v-if="userRouterInfo[1]" index="/airConditioner"><span class="textPL">中央空调系统</span></el-menu-item>
                <el-menu-item v-if="userRouterInfo[3]" index="/power"><span class="textPL">变配电系统</span></el-menu-item>
                <el-menu-item v-if="userRouterInfo[6]" index="/WaterSupplyAndDrainage"><span class="textPL">给排水系统</span></el-menu-item>
                <el-menu-item v-if="userRouterInfo[9]" index="/elevator"><span class="textPL">电梯监测系统</span></el-menu-item>
                <el-menu-item v-if="userRouterInfo[4]" index="/parkingLot"><span class="textPL">停车场系统</span></el-menu-item>
                <el-menu-item v-if="userRouterInfo[10]" index="/airQuality"><span class="textPL">空气质量监测系统</span></el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2" v-if="userRouterInfo[2]||userRouterInfo[17]||userRouterInfo[18]">
              <template slot="title">
                <i class="el-icon-location noLog OperationManagement"></i>
                <span class="textPL">运营管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item v-if="userRouterInfo[2]" index="/energy"><span class="textPL">能源管理系统</span></el-menu-item>
                <el-menu-item v-if="userRouterInfo[18]" index="/energy000"><span class="textPL">能源管理系统</span></el-menu-item>
                <el-menu-item v-if="userRouterInfo[17]" index="/HotelStatus"><span class="textPL">营收数据分析</span></el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item v-if="this.userRouterInfo[12]" class="noChildModule" :index="agentPath">
              <i class="el-icon-location noLog maintainmanagement"></i>
              <span class="textPL">运维管理</span>
            </el-menu-item>
            <el-menu-item class="noChildModule" index="/alarm">
              <i class="el-icon-location noLog alarmmanage"></i>
              <span class="textPL">告警管理</span>
            </el-menu-item>
            <el-menu-item v-if="isPermissionPath" class="noChildModule" index="/permission">
              <i class="el-icon-location noLog Authoritymanagement"></i>
              <span class="textPL">权限管理</span>
            </el-menu-item>
            <el-menu-item v-if="isoperationLog" class="noChildModule" index="/operationLog">
              <i class="el-icon-location noLog operationLogNav"></i>
              <span class="textPL">操作日志</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>

  export default{
    props:{
      isShowBannerParam: {
        type: Boolean
      }
    },
    data(){
      return{
        isUserRouter:true,
        userRouterInfo:{},
        agentPath:'',
        isPermissionPath:false,
        isoperationLog:false
      }
    },
    components:{

    },
    created(){
      this.userRouterInfo = this.$store.state.sysList
      console.log(this.$store.state)
      //权限管理
      if(this.$store.state.userInfoTotal.permissions_manage.per_id==0){
        this.isPermissionPath = false  //没有管理权限
      }else{
        this.isPermissionPath = true
      }

      //操作日志
      if(this.$store.state.userInfoTotal.handle_dairy.role_string){
        this.isoperationLog = true
      }

      $(document).on('click', () => {
        this.$emit('changeBannerParam', false);
      })
      if(this.userRouterInfo[12]){
        if(this.userRouterInfo[12].role_string[0] == 1){
          //工程部管理权限
          this.agentPath = '/AgentManage'
          return
        }
        if(this.userRouterInfo[12].role_string[2] == 1){
          //其他部门管理权限
          this.agentPath = '/AgentManage/otherDep'
          return
        }
        if(this.userRouterInfo[12].role_string[1] == 1){
          //工程部普通权限
          this.agentPath = '/AgentManage/normalUser'
        }
        if(this.userRouterInfo[12].role_string[3] == 1){
          //其他部门普通权限
          this.agentPath = '/AgentManage/normal/otherDep'
        }
      }

    },
    methods:{
      stopPropa(){
        event.stopPropagation()
      },
      showBanerClick(){
        this.$emit('changeBannerParam', !this.isShowBannerParam);
      }
    }
  }
</script>
<style>
  .el-menu{
    border-right:none!important;
    height:100%;
  }
  .b-box{
    height:100%;
  }
  .el-submenu .el-menu-item{
    padding-left: 53px!important;
  }
  /*.el-submenu__title:hover{
    background:#011f43!important;
  }*/
  .el-submenu__title:hover{
    background:#008aff!important;
  }
  .noChildModule:hover{
    background:#008aff!important;
  }
  .noRight .el-submenu__title .el-submenu__icon-arrow{
    display:none;
  }
  .textPL{
    padding-left:10px;
  }
  .noLog:before{
    content:''!important;
  }
  .wisdomManagement{
    width:22px!important;
    height:13px!important;
    background:url(../../../assets/img/home/wisdomanagement.png) no-repeat center;
    background-size:100% 100%;
  }
  .OperationManagement{
    width:22px!important;
    height:20px!important;
    background:url(../../../assets/img/home/operationmanagement.png) no-repeat center;
    background-size:100% 100%;
  }
  .maintainmanagement{
    width:22px!important;
    height:20px!important;
    background:url(../../../assets/img/home/maintainmanagement.png) no-repeat center;
    background-size:100% 100%;
  }
  .alarmmanage{
    width:22px!important;
    height:20px!important;
    background:url(../../../assets/img/home/alarm.png) no-repeat center;
    background-size:100% 100%;
  }
  .Authoritymanagement{
    width:22px!important;
    height:20px!important;
    background:url(../../../assets/img/home/Authoritymanagement.png) no-repeat center;
    background-size:100% 100%;
  }
  .operationLogNav{
    width:22px!important;
    height:20px!important;
    background:url(../../../assets/img/home/operationLog.png) no-repeat center;
    background-size:100% 100%;
  }
</style>
<style lang="less" rel="stylesheet/less">
  .baner{
    width:250px;
    height: 56.3vw;
    min-height: 728px;
    position:fixed;
    z-index:99999;
    left:-250px;
    top:0;
    background:#061b3a;
    display:flex;
    flex-direction:column;
    .head{
      &:hover{
        cursor:pointer;
      }
      height:55px;
      display:flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      box-shadow:0 0 10px 0 black;
      .logo{
        background:url(../../../assets/img/home/logo.png) no-repeat center center;
        background-size:cover;
        width:25px;
        height:25px;
        margin-right:14px;
      }
      .txt{
        color:#ffffff;
        font-size:18px;
        font-weight:400;
      }
    }
    .banerCon{
      flex:1;
      margin-top:5px;
      overflow:auto;
    }
  }
  .showBaner{
    left:0;
    transition:all 1s;
    box-shadow:0 0 14px 0 #35a3ee;
  }
  .closeBaner{
    left:-250px;
    transition:all 1s;
  }
</style>
