import Vue from "vue";
import Router, {
  createRouter,
  createWebHashHistory
} from "vue-router";
import Home from "@/views/Home.vue"

export default createRouter({
  history: createWebHashHistory(),
  routes: [{
      path: '/',
      component: Home
    },
    {
      path: '/todos',
      component: () => import('./views/Todos.vue')
    }
  ]
});