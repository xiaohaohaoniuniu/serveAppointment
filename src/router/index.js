import Vue from 'vue'
import Router from 'vue-router'
import Serve from '@/components/Serve/Serve'
import JoinHelp from '@/components/JoinUs/JoinHelp'
import My from '@/components/My/My'
import WX from '@/components/WX/WX'
import BY from '@/components/BY/BY'
import YC from '@/components/YC/YC'
import MMC from '@/components/MMC/MMC'
import QT from '@/components/QT/QT'
// 错误
import ErrorPage from "@/components/Error/Error"
import TimeAddr from '@/components/TimeAddr/TimeAddr'
import ChooseTime from '@/components/TimeAddr/ChooseTime/ChooseTime'
import AddAddr from '@/components/TimeAddr/AddChooseAddr/AddAddr'
import ChooseAddr from '@/components/TimeAddr/AddChooseAddr/ChooseAddr'
import RepairDetail from '@/components/RepairDetail/RepairDetail'
// 我的预约
import MyAppoint from '@/components/MyAppoint/MyAppoint'
import AppointAll from '@/components/MyAppoint/AppointAll/AppointAll'
import AppointPay from '@/components/MyAppoint/AppointPay/AppointPay'
import AppointIng from '@/components/MyAppoint/AppointIng/AppointIng'
import AppointEvaluate from '@/components/MyAppoint/AppointEvaluate/AppointEvaluate'
// 评价
import Evaluate from '@/components/MyAppoint/AppointEvaluate/Evaluate'
// 支付
import GotoPay from '@/components/MyAppoint/AppointPay/GotoPay'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'index',
      redirect: "/serve"
    },
    {
      path: '/serve',
      name: 'Serve',
      component: Serve,
      redirect: '/wx',
      children: [{
        path: '/wx',
        name: 'wx',
        component: WX
      }, {
        path: '/by',
        name: 'by',
        component: WX
      }, {
        path: '/yc',
        name: 'yc',
        component: YC
      }, {
        path: '/mmc',
        name: 'mmc',
        component: MMC
      }, {
        path: '/qt',
        name: 'qt',
        component: QT
      }]
    },
    {
      path: '/my',
      name: 'My',
      component: My
    },
    {
      path: '/repairDetail',
      name: 'RepairDetail',
      component: RepairDetail
    },
    {
      path: '/timeaddr',
      name: 'TimeAddr',
      component: TimeAddr
    },
    {
      path: '/choosetime',
      name: 'ChooseTime',
      component: ChooseTime
    },
    {
      path: '/addaddr',
      name: 'AddAddr',
      component: AddAddr
    },
    {
      path: '/chooseaddr',
      name: 'ChooseAddr',
      component: ChooseAddr
    },
    // 我的预约系列
    {
      path: '/myappoint',
      name: 'MyAppoint',
      component: MyAppoint,
      redirect: '/appointall',
      children:[
        {
          path: '/appointall',
          name: 'AppointAll',
          component: AppointAll
        },
        {
          path: '/appointpay',
          name: 'AppointPay',
          component: AppointPay
        },
        {
          path: '/appointing',
          name: 'AppointIng',
          component: AppointIng
        },
        {
          path: '/appointevaluate',
          name: 'AppointEvaluate',
          component: AppointEvaluate
        }
      ]
    },
    // 支付
    {
      path: '/gotopay',
      name: 'GotoPay',
      component: GotoPay
    },
    // 评价Evaluate
    {
      path: '/evaluate',
      name: 'Evaluate',
      component: Evaluate
    },
    {
       path: '*',
       component: ErrorPage
    } 
  ],
  // mode: 'history'
})
