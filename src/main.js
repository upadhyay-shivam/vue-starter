import Vue from 'vue';
import Quasar, { Notify } from 'quasar';
import App from './App.vue';
import router from './routes/router';

Vue.use(Quasar, {
    config: {},
    plugins: { Notify },
});


new Vue({
    router,
    render: h => h(App),
}).$mount('#app');