import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: resolve => require(['../pages/Login.vue'],resolve)
    },
    {
      path: '/Home',
      component: resolve => require(['../components/Home.vue'],resolve),
      children:[
        {
          path: '/Info',
          component: resolve => require(['../pages/InfoPage.vue'],resolve)
        },
        {
          path: '/Consumer',
          component: resolve => require(['../pages/ConsumerPage.vue'],resolve)
        },
        {
          path: '/Admin',
          component: resolve => require(['../pages/GuanliPage.vue'],resolve)
        },
        {
          path: '/Garbage',
          component: resolve => require(['../pages/GarbagePage.vue'],resolve)
        },

      ]
    },

  ]
})