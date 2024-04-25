import 'reflect-metadata'

import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';

import { Toolkit } from '@/toolkit/src/core/plugin';
import { createApp } from '@/config/app';

import { DashboardDSL } from '@/dsl'

import App from './App.vue';
import './scss/index.scss'

import './firebase.config'

Vue.config.productionTip = false;

Vue.use(Toolkit)
Vue.use(DashboardDSL, { prefix: 'D' })
Vue.use(VueRouter)
Vue.use(Vuex)

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types

createApp().then(({ container, store, router }) => {
  new Vue({
    router,
    container,
    store,
    render: h => h(App)
  }).$mount('#app')
})
