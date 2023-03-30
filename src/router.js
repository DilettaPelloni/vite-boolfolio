import { createRouter, createWebHistory} from 'vue-router';

import AppIndex from './pages/AppIndex.vue';
import AppShow from './pages/AppShow.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path:'/',
            name: 'index',
            component: AppIndex
        },
        {
            path:'/show/:slug',
            name: 'show',
            component: AppShow
        }
    ]
});

export {router};