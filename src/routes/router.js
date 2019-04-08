import Vue from 'vue';
import VueRouter from 'vue-router';
import DefaultLayout from '../layouts/Default.vue';

Vue.use(VueRouter);

const Router = new VueRouter({
    routes: [
        {
            path: '/',
            component: DefaultLayout,
        }
    ]
});


export default Router;
