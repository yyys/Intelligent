import Vue from 'vue';
import Router from 'vue-router';

//能源
import energy from '@/components/Energy/energy0';         //能源组件
import allViews from '@/components/Energy/energy01/allViews';  //全景查看子组件
import energyAnalysis from '@/components/Energy/energy02/energyAnalysis';  //用能分析子组件
import metersRead from '@/components/Energy/energy03/metersRead';  //三表远抄子组件
import energyPreset from '@/components/Energy/energy04/energyPreset';  //用能预设子组件
import energyReport from '@/components/Energy/energy05/energyReport';  //用能报表子组件

//操作日志
import operationLog from '@/components/operationLog/operationLog';
import autoOperation from '@/components/operationLog/components/autoOperation';
import manualOperation from '@/components/operationLog/components/manualOperation';

//代维系统管理端
import generationMIndex0 from '@/components/AgentManage/index0';
import generationMIndex from '@/components/AgentManage/index';
import generationMSchedule from '@/components/AgentManage/schedule';
import generationMWorkList from '@/components/AgentManage/workList';
import generationMRouting from '@/components/AgentManage/routing';
import generationMReport from '@/components/AgentManage/report';
import generationApply from '@/components/AgentManage/otherDepartment/engineDep/approvalList'
import generationMOther from '@/components/AgentManage/otherDepartment/manage/otherDeManage';
import generationMOtherWork from '@/components/AgentManage/otherDepartment/manage/workOrder';
import generationMOtherApprove from '@/components/AgentManage/otherDepartment/manage/approvalList';

//代维系统普通端
import normalIndex from '@/components/AgentManage/normalUser/index';
import normalSchedule from '@/components/AgentManage/normalUser/schedule';
import normalWorkList from '@/components/AgentManage/normalUser/workList';
import normalRouting from '@/components/AgentManage/normalUser/routing';
import normalReport from '@/components/AgentManage/normalUser/report';
import normalOtherDep from '../components/AgentManage/otherDepartment/normal/otherDeNormal';
import normalOtherWork from '../components/AgentManage/otherDepartment/normal/workOrder';

//告警
import alarm from '@/components/Alarm/fireAlarm';


//消防报警
import fireAlarm from '@/components/fireAlarm/fireAlarm';
import fireMonitor from '@/components/fireAlarm/fireMonitor';
import fireHistory from '@/components/fireAlarm/fireHistory';

//权限系统
import permission from '@/components/Permission/Permission';
import roleSetting from '@/components/Permission/roleSetting';
import userSetting from '@/components/Permission/userSetting';
import loginLog from '@/components/Permission/loginLog';

//首页
import Home from '@/components/Home/Home';

//门禁
import DoorControl from '@/components/DoorControl/DoorControl';
import tabs from '@/components/DoorControl/components/tabs';
import tabsSys from '@/components/DoorControl/components/tabsSys';

//视频监控
import VideoSurveillance from '@/components/VideoSurveillance/VideoSurveillance';

//登录页
import LoginModel from '@/components/Login/login';

//酒店管理
import HotelStatus from '@/components/HotelStatus/HotelStatus';
import HotelRoomStatus from '@/components/HotelStatus/components/HotelRoomStatus';
import roomLists from '@/components/HotelStatus/components/roomLists';
import roomCharts from '@/components/HotelStatus/components/roomCharts';
//空调
import airConditioner from '@/components/airConditioner/airConditioner'
import telecontrol from '@/components/airConditioner/components/telecontrol'
import sysMonitor from '@/components/airConditioner/components/sysMonitor'
import timerMode from '@/components/airConditioner/components/timerMode'

//变配电
import power from '@/components/power/power'
import envirCond from '@/components/power/components/envirCond'
import monitorCond from '@/components/power/components/monitorCond'

//给排水
import WaterSupplyAndDrainage from '@/components/WaterSupplyAndDrainage/WaterSupplyAndDrainage'
import floor3D from '@/components/WaterSupplyAndDrainage/components/floor3D'
import waterPump from '@/components/WaterSupplyAndDrainage/components/waterPump'
import highWaterTank from '@/components/WaterSupplyAndDrainage/components/highWaterTank'
import cistern from '@/components/WaterSupplyAndDrainage/components/cistern'
import submersibleSewagePump from '@/components/WaterSupplyAndDrainage/components/submersibleSewagePump'
import sewagePond from '@/components/WaterSupplyAndDrainage/components/sewagePond'

//2.0能源
import energy000 from '@/components/energy000/energy0'         //能源组件
import energyFullLook from '@/components/energy000/energy'  //全景查看子组件
import RunMsg from '@/components/energy000/runMsg'          //运行情况子组件
import Alarm from '@/components/energy000/alarm'

//电梯
import elevator from '@/components/elevator/index';
import runTimeMonitor from '@/components/elevator/components/runTimeMonitor';
import wbHistory from '@/components/elevator/components/wbHistory';
import breakdownManagement from '@/components/elevator/components/breakdownManagement';
import dataHistory from '@/components/elevator/components/dataHistory';
//停车场
import parkingLot from '@/components/parkingLot/parkingLot'
import parkDetail from '@/components/parkingLot/components/parkDetail'
import carOrigin from '@/components/parkingLot/components/carOrigin'
//空气质量
import airQuality from '@/components/airQuality/airQuality'
import airQualityMonitor from '@/components/airQuality/components/airQualityMonitor'
import airQualityStatistics from '@/components/airQuality/components/airQualityStatistics'
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "login",
      component:LoginModel
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/permission',
      component: permission,
      children:[
        { path: '/permission/user', component: userSetting },
        { path: '/permission/role', component: roleSetting },
        { path: '/permission/loginLog', component: loginLog }
      ],
      redirect: to => {
        let info = JSON.parse(sessionStorage.getItem('routerInfo'))
        console.log(info)
        if(info.userInfoTotal.permissions_manage.role_string[0]=='0'){
          return '/permission/role'
        }else if(info.userInfoTotal.permissions_manage.role_string[0]=='0' && info.userInfoTotal.permissions_manage.role_string[1]=='0'){
          return '/permission/loginLog'
        }else{
          return '/permission/user'
        }
      }
    },
    {
      path: '/energy',
      component: energy,
      children:[
        { path: '/energy/allViews', component: allViews },
        { path: '/energy/analysis', component: energyAnalysis },
        { path: '/energy/metersRead', component: metersRead },
        { path: '/energy/preset', component: energyPreset },
        { path: '/energy/report', component: energyReport },
      ],
      redirect: to => {
        let info = JSON.parse(sessionStorage.getItem('routerInfo'))
        if(info.sysList[2].role_string[0]!=0){
          return '/energy/allViews'
        }else if(info.sysList[2].role_string[0]==0&&info.sysList[2].role_string[1]!=0){
          return '/energy/analysis'
        }else if(info.sysList[2].role_string[0]==0&&info.sysList[2].role_string[1]==0&&(info.sysList[2].role_string[2]!=0|| info.sysList[2].role_string[5]!=0||info.sysList[2].role_string[6]!=0||info.sysList[2].role_string[10]!=0)){
          return '/energy/metersRead'
        }else if(info.sysList[2].role_string[0]==0&&info.sysList[2].role_string[1]==0&&info.sysList[2].role_string[2]==0&& info.sysList[2].role_string[5]==0&&info.sysList[2].role_string[6]==0&&info.sysList[2].role_string[10]==0&&info.sysList[2].role_string[4]!=0){
          return '/energy/preset'
        }else{
          return '/energy/report'
        }
      }
    },
    {
      path: '/AgentManage',
      component: generationMIndex0,
      children:[
        {
          path: '/AgentManage',
          name:'generationMBase',
          component:generationMIndex
        },
        {
          path: '/AgentManage/schedule',
          component:generationMSchedule,
          children:[
            { path: '/AgentManage/schedule/first'},
            { path: '/AgentManage/schedule/second'},
            { path: '/AgentManage/schedule/thrid'},
          ]
        },
        {
          path: '/AgentManage/workList',
          component:generationMWorkList
        },
        {
          path: '/AgentManage/routing',
          component:generationMRouting,
          children:[
            { path: '/AgentManage/routing/first'},
            { path: '/AgentManage/routing/second'}
          ]
        },
        {
          path: '/AgentManage/report',
          component:generationMReport
        },{
          path:'/AgentManage/otherDepartment/engineDep/approvalList',
          component:generationApply
        }
      ]
    },{//代维普通端
      path: '/AgentManage/normalUser',
      component: normalIndex
    },{
      path:'/AgentManage/normalUser/schedule',
      component:normalSchedule,
      children:[
            { path: '/AgentManage/normalUser/schedule/first'},
            { path: '/AgentManage/normalUser/schedule/second'},
            { path: '/AgentManage/normalUser/schedule/thrid'}
        ]
    },{
      path:'/AgentManage/normalUser/workList',
      component:normalWorkList
    },{
      path:'/AgentManage/normalUser/routing',
      component:normalRouting
    },{
      path:'/AgentManage/normalUser/report',
      component:normalReport
    },{
      path: '/alarm',
      component: alarm,
    },
    {
      path: '/fireAlarm',
      component: fireAlarm,
      children:[
        {
          path: '/fireAlarm/fireMonitor',
          component:fireMonitor
        },
        {
          path: '/fireAlarm/fireHistory',
          component: fireHistory
        }
      ],
      redirect: to => {
        let info = JSON.parse(sessionStorage.getItem('routerInfo'))
        if(info.sysList[16].role_string[0]!=0){
          return '/fireAlarm/fireMonitor'
        }else{
          return '/fireAlarm/fireHistory'
        }
      }
    },
    {
      path: '/DoorControl',
      component: DoorControl,
      children:[
        { path: '/DoorControl/components/tabs',component: tabs},
        { path: '/DoorControl/components/tabsSys',component: tabsSys},
      ],
      redirect: to => {
        let info = JSON.parse(sessionStorage.getItem('routerInfo'))
        if(info.sysList[14].role_string[0]!=0){
          return '/DoorControl/components/tabsSys'
        }else{
          return '/DoorControl/components/tabs'
        }
      }
    },
    {
      path: '/VideoSurveillance',
      component: VideoSurveillance,
    },
    {
      path: '/HotelStatus',
      component:HotelStatus,
      children:[
        { path: '/HotelStatus/components/HotelRoomStatus',component: HotelRoomStatus},
        { path: '/HotelStatus/components/roomLists',component: roomLists},
        { path: '/HotelStatus/components/roomCharts',component: roomCharts},
      ],
      redirect: to => {
        let info = JSON.parse(sessionStorage.getItem('routerInfo'))
        if(info.sysList[17].role_string[0]!=0){
          return '/HotelStatus/components/HotelRoomStatus'
        }else if(info.sysList[17].role_string[0]==0&&(info.sysList[17].role_string[1]!=0||info.sysList[17].role_string[2]!=0||info.sysList[17].role_string[3]!=0||info.sysList[17].role_string[4]!=0)){
          return '/HotelStatus/components/roomLists'
        }else{
          return '/HotelStatus/components/roomCharts'
        }
      }
    },
    {
      path: '/airConditioner',
      component: airConditioner,
      children:[
        {
          path: '/airConditioner/components/telecontrol',
          component:telecontrol
        },
        {
          path: '/airConditioner/components/sysMonitor',
          component: sysMonitor
        },
        {
          path: '/airConditioner/components/timerMode',
          component: timerMode
        }
      ],
      redirect: to => {
        let info = JSON.parse(sessionStorage.getItem('routerInfo'))
        if(info.sysList[1].role_string[0]!=0 || info.sysList[1].role_string[3]!=0 || info.sysList[1].role_string[4]!=0){
          return '/airConditioner/components/telecontrol'
        }else if(info.sysList[1].role_string[0]==0 && info.sysList[1].role_string[3]==0 && info.sysList[1].role_string[4]==0&&(info.sysList[1].role_string[5]!=0||info.sysList[1].role_string[6]!=0||info.sysList[1].role_string[7]!=0)){
          return '/airConditioner/components/sysMonitor'
        }else{
          return '/airConditioner/components/timerMode'
        }
      }
    },
    {
      path: '/operationLog',
      component: operationLog,
      children: [
        {path: '/operationLog/components/autoOperation', component: autoOperation},
        {path: '/operationLog/components/manualOperation', component: manualOperation},
      ],
      redirect: to => {
        let info = JSON.parse(sessionStorage.getItem('routerInfo'))
        console.log(info)
        if(info.userInfoTotal.handle_dairy.role_string[0]!=0){
          return '/operationLog/components/manualoperation'
        }else{
          return '/operationLog/components/autoOperation'
        }
      }
    },
    {
      path: '/AgentManage/otherDep',
      component: generationMOther,
      children:[
        { path: '/AgentManage/otherDep/workOrder', component: generationMOtherWork },
        { path: '/AgentManage/otherDep/approvalList', component: generationMOtherApprove }
      ],
      redirect: to => {
        return '/AgentManage/otherDep/workOrder'
      }
    },
    {
      path: '/AgentManage/normal/otherDep',
      component: normalOtherDep,
      children:[
        { path: '/AgentManage/normal/otherDep/workOrder', component: normalOtherWork },
      ],
      redirect: to => {
        return '/AgentManage/normal/otherDep/workOrder'
      }
    },
    //变配电
    {
      path: '/power',
      component: power,
      children:[
        {
          path: '/power/components/envirCond',
          component:envirCond
        },
        {
          path: '/power/components/monitorCond',
          component: monitorCond
        },
      ],
      redirect: to => {
        let info = JSON.parse(sessionStorage.getItem('routerInfo'))
        if(info.sysList[3].role_string[0]!=0 || info.sysList[3].role_string[2]!=0 || info.sysList[1].role_string[3]!=0){
          return '/power/components/envirCond'
        }else if(info.sysList[3].role_string[0]==0 && info.sysList[3].role_string[2]==0 && info.sysList[1].role_string[3]==0){
          return '/power/components/monitorCond'
        }
      }
    },
    //给排水
    {
      path: '/WaterSupplyAndDrainage',
      component: WaterSupplyAndDrainage,
      children:[
        {
          path: '/WaterSupplyAndDrainage/components/floor3D',
          component:floor3D
        },
        {
          path: '/WaterSupplyAndDrainage/components/waterPump',
          component: waterPump
        },
        {
          path: '/WaterSupplyAndDrainage/components/highWaterTank',
          component:highWaterTank
        },
        {
          path: '/WaterSupplyAndDrainage/components/cistern',
          component: cistern
        },
        {
          path: '/WaterSupplyAndDrainage/components/submersibleSewagePump',
          component:submersibleSewagePump
        },
        {
          path: '/WaterSupplyAndDrainage/components/sewagePond',
          component: sewagePond
        },
      ],
      redirect: to => {
        let info = JSON.parse(sessionStorage.getItem('routerInfo'))
        if(info.sysList[6].role_string[0]!=0){
          return '/WaterSupplyAndDrainage/components/floor3D'
        }else if(info.sysList[6].role_string[0]==0 && info.sysList[6].role_string[1]!=0){
          return '/WaterSupplyAndDrainage/components/waterPump'
        } else if(info.sysList[6].role_string[0]==0 && info.sysList[6].role_string[1]==0 && info.sysList[6].role_string[2]!=0){
          return '/WaterSupplyAndDrainage/components/highWaterTank'
        } else if(info.sysList[6].role_string[0]==0 && info.sysList[6].role_string[1]==0 && info.sysList[6].role_string[2]==0 && info.sysList[6].role_string[3]!=0){
          return '/WaterSupplyAndDrainage/components/cistern'
        } else if(info.sysList[6].role_string[0]==0 && info.sysList[6].role_string[1]==0 && info.sysList[6].role_string[2]==0 && info.sysList[6].role_string[3]==0 && info.sysList[6].role_string[4]!=0){
          return '/WaterSupplyAndDrainage/components/submersibleSewagePump'
        } else if(info.sysList[6].role_string[0]==0 && info.sysList[6].role_string[1]==0 && info.sysList[6].role_string[2]==0 && info.sysList[6].role_string[3]==0 && info.sysList[6].role_string[4]==0 && info.sysList[6].role_string[5]!=0){
          return '/WaterSupplyAndDrainage/components/sewagePond'
        }
      }
    },
    //2.0能源
    {
      path: '/energy000',
      component: energy000,
      children:[
        { path: '/energy000/fullLook', component: energyFullLook,
          children:[
            { path: '/energy000/fullLook/first'},
            { path: '/energy000/fullLook/second'},
            { path: '/energy000/fullLook/thrid'},
          ]
        },
        { path: '/energy000/runMsg', component: RunMsg,
          children:[
            { path: '/energy000/runMsg/first'},
            { path: '/energy000/runMsg/second'},
            { path: '/energy000/runMsg/thrid'},
          ]
        },
        { path: '/energy000/alarm', component: Alarm}
      ],
      redirect: to => {
        let info = JSON.parse(sessionStorage.getItem('routerInfo'));
        if (info.sysList[18].role_string[0] != 0 || info.sysList[18].role_string[4] != 0 || info.sysList[18].role_string[5] != 0 || info.sysList[18].role_string[6] != 0) {
          return '/energy000/fullLook'
        } else if (info.sysList[18].role_string[0] == 0 && info.sysList[18].role_string[4] == 0 && info.sysList[18].role_string[5] == 0 && info.sysList[18].role_string[6] == 0 && (info.sysList[18].role_string[1] != 0 || info.sysList[18].role_string[7] != 0 || info.sysList[18].role_string[8] != 0 || info.sysList[18].role_string[9] != 0 || info.sysList[18].role_string[10] != 0 || info.sysList[18].role_string[11] != 0 || info.sysList[18].role_string[12] != 0)) {
          return '/energy000/runMsg'
        } else if (info.sysList[18].role_string[0] == 0 && info.sysList[18].role_string[4] == 0 && info.sysList[18].role_string[5] == 0 && info.sysList[18].role_string[6] == 0 && info.sysList[18].role_string[1] == 0 && info.sysList[18].role_string[7] == 0 && info.sysList[18].role_string[8] == 0 && info.sysList[18].role_string[9] == 0 && info.sysList[18].role_string[10] == 0 && info.sysList[18].role_string[11] == 0 && info.sysList[18].role_string[12] == 0 && (info.sysList[18].role_string[2] != 0)) {
          return '/energy000/alarm'
        } else if (info.sysList[18].role_string[3] != 0) {
          return '/energy000/alarm'
        }
      }
    },
    {
      path: '/elevator',
      component: elevator,
      children:[
        {
          path: 'runTimeMonitor',
          name:'runTimeMonitor',
          component:runTimeMonitor
        },
        {
          path: 'wbHistory',
          name:'wbHistory',
          component: wbHistory
        },
        {
          path: 'breakdownManagement',
          name:'breakdownManagement',
          component: breakdownManagement
        },{
          path: 'dataHistory',
          name:'dataHistory',
          component: dataHistory
        },
      ],
      redirect: to => {
        let info = JSON.parse(sessionStorage.getItem('routerInfo'));
        if (info.sysList[9].role_string[0] != 0) {
          return '/elevator/runTimeMonitor'
        } else if (info.sysList[9].role_string[0] == 0 && info.sysList[9].role_string[1] != 0) {
          return '/elevator/dataHistory'
        } else if (info.sysList[9].role_string[0] == 0 && info.sysList[9].role_string[1] == 0 && info.sysList[9].role_string[2] != 0) {
          return '/elevator/wbHistory'
        } else if (info.sysList[9].role_string[0] == 0 && info.sysList[9].role_string[1] == 0 && info.sysList[9].role_string[2] == 0 && info.sysList[9].role_string[3] != 0) {
          return '/elevator/breakdownManagement'
        }
      }
    },
    //停车场
    {
      path: '/parkingLot',
      component: parkingLot,
      children:[
        {
          path: '/parkingLot/components/parkDetail',
          component:parkDetail
        },
        {
          path: '/parkingLot/components/carOrigin',
          component: carOrigin
        },
      ],
      redirect: to => {
        let info = JSON.parse(sessionStorage.getItem('routerInfo'))
        if(info.sysList[4].role_string[0]!=0 ){
          return '/parkingLot/components/parkDetail'
        }else{
          return '/parkingLot/components/carOrigin'
        }
      }
    },
    //空气质量
    {
      path: '/airQuality',
      component: airQuality,
      children:[
        {
          path: '/airQuality/components/airQualityMonitor',
          component:airQualityMonitor
        },
        {
          path: '/airQuality/components/airQualityStatistics',
          component: airQualityStatistics
        },
      ],
      redirect: to => {
        let info = JSON.parse(sessionStorage.getItem('routerInfo'))
        if(info.sysList[10].role_string[0]!=0 ){
          return '/airQuality/components/airQualityMonitor'
        }else{
          return '/airQuality/components/airQualityStatistics'
        }
      }
    },
  ]
})
