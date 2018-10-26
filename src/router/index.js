import Vue from 'vue';
import Router from 'vue-router';

//能源
import energy from '@/components/Energy/energy0';         //能源组件
import allViews from '@/components/Energy/energy01/allViews';  //全景查看子组件
import energyAnalysis from '@/components/Energy/energy02/energyAnalysis';  //用能分析子组件
import metersRead from '@/components/Energy/energy03/metersRead';  //三表远抄子组件
import energyPreset from '@/components/Energy/energy04/energyPreset';  //用能预设子组件
import energyReport from '@/components/Energy/energy05/energyReport';  //用能报表子组件


//代维系统管理端
import generationMIndex0 from '@/components/AgentManage/index0';
import generationMIndex from '@/components/AgentManage/index';
import generationMSchedule from '@/components/AgentManage/schedule';
import generationMWorkList from '@/components/AgentManage/workList';
import generationMRouting from '@/components/AgentManage/routing';
import generationMReport from '@/components/AgentManage/report';

//代维系统普通端
import normalIndex from '@/components/AgentManage/normalUser/index';
import normalSchedule from '@/components/AgentManage/normalUser/schedule';
import normalWorkList from '@/components/AgentManage/normalUser/workList';
import normalRouting from '@/components/AgentManage/normalUser/routing';
import normalReport from '@/components/AgentManage/normalUser/report';

//消防报警
import fireAlarm from '@/components/Alarm/fireAlarm';
import fireMonitor from '@/components/Alarm/components/fireMonitor';
import fireHistory from '@/components/Alarm/components/fireHistory';

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
      redirect:'/permission/user',
      children:[
        { path: '/permission/user', component: userSetting },
        { path: '/permission/role', component: roleSetting },
        { path: '/permission/loginLog', component: loginLog }
      ]
    },
    {
      path: '/energy',
      component: energy,
      redirect:'/energy/allViews',
      children:[
        { path: '/energy/allViews', component: allViews },
        { path: '/energy/analysis', component: energyAnalysis },
        { path: '/energy/metersRead', component: metersRead },
        { path: '/energy/preset', component: energyPreset },
        { path: '/energy/report', component: energyReport },
      ]

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
        },
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
      path: '/fireAlarm',
      component: fireAlarm,
      children:[
        {
          path: 'fireMonitor',
          name:fireMonitor,
          component:fireMonitor
        },
        {
          path: 'fireHistory',
          name:'fireHistory',
          component: fireHistory
        }
      ]
    },
    {
      path: '/DoorControl',
      component: DoorControl,
      redirect: '/DoorControl/components/tabsSys',
      children:[
        { path: '/DoorControl/components/tabs',component: tabs},
        { path: '/DoorControl/components/tabsSys',component: tabsSys},
      ]
    },
    {
      path: '/VideoSurveillance',
      component: VideoSurveillance,
    },
    {
      path: '/HotelStatus',
      component:HotelStatus,
      redirect: '/HotelStatus/components/HotelRoomStatus',
      children:[
        { path: '/HotelStatus/components/HotelRoomStatus',component: HotelRoomStatus},
        { path: '/HotelStatus/components/roomLists',component: roomLists},
        { path: '/HotelStatus/components/roomCharts',component: roomCharts},
      ]
    }

  ]
})
