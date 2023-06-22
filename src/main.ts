import 'reflect-metadata'
import Vue from 'vue';

import { Toolkit } from '@/toolkit/src/core/plugin';
import { createApp } from '@/config/app';

import App from './App.vue';

Vue.config.productionTip = false;

Vue.use(Toolkit)

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default (context?: unknown) => {
  return createApp(context).then(({ container, store, router }) => {
    return new Vue({
      router,
      container,
      store,
      render: h => h(App)
    })
  })
}

