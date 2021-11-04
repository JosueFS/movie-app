import Vue from 'vue';
import Vuetify from 'vuetify';
import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';

import 'vuetify/dist/vuetify.min.css';

import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(Vuetify);

const requireComponent = require.context(
  './components',
  false,
  /Base[A-Z]\w+\.(vue|js)$/
);

requireComponent.keys().forEach((fileName) => {
  const componentConfig = requireComponent(fileName);

  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1'))
  );

  Vue.component(componentName, componentConfig.default || componentConfig);
});

Vue.config.productionTip = false;

new Vue({
  vuetify: new Vuetify(),
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
