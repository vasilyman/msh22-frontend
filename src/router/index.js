import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import(/* webpackChunkName: "index" */ '@/views/index.vue'),
  },
  {
    path: '/combine',
    name: 'combine',
    components: {
      default: () => import(/* webpackChunkName: "combine" */ '@/views/combine.vue'),
      sidebarRight: () => import(/* webpackChunkName: "appRightSidebar" */ '@/components/appRightSidebar.vue'),
    },
  },
  {
    path: '/region',
    name: 'region',
    components: {
      default: () => import(/* webpackChunkName: "region" */ '@/views/region.vue'),
      sidebar: () => import(/* webpackChunkName: "sidebarRegionFilters" */ '@/components/regionFilters.vue'),
    },
  },
  {
    path: '/channels',
    name: 'channels',
    components: {
      default: () => import(/* webpackChunkName: "channels" */ '@/views/channels.vue'),
      sidebar: () => import(/* webpackChunkName: "sidebarChannelFilters" */ '@/components/channelFilters.vue'),
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
