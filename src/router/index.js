import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Measurement',
      component: () => import('../views/Measurement.vue'),
    },
  ],
});

export default router;
