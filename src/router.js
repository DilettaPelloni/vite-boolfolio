import { createRouter, createWebHistory} from 'vue-router';

import AppIndex from './pages/AppIndex.vue';
import AppShow from './pages/AppShow.vue';
import NotFound from './pages/NotFound.vue';

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
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: NotFound
        },
    ]
});

export {router};