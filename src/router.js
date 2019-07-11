import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import i18n from './i18n'


import Home from './pages/Home'
import Auth from './pages/Auth'
import Error from './pages/Error'


const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: `/${i18n.locale}`
    },
    {
      path: '/:lang',
      component: {
        render(c) { return c('router-view')}
      },
      children: [
        {
          path: '/',
          name: 'home',
          component: Home,
        },
        {
          path: 'auth',
          name: 'auth',
          component: Auth
        },
        {
          path: '/*',
          name: 'error',
          component: Error
        }
      ]
    }
  ]
})

router.beforeEach(function (to, from, next) {
  let lang = to.params.lang
  let langs = i18n.availableLocales
  
  // if(langs.includes(lang)) {
  //   next()
  // } else {
  //   next(`/${i18n.locale}/${to.name}`)
  // }
  console.log('to.name', to)
  next()
})

export default router