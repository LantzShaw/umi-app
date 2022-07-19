export default [
  {
    path: '/orgz/member/login',
    component: '@/pages/SignIn',
  },
  {
    path: '/dashboard',
    component: '@/layouts/BasicLayout',
    routes: [
      {
        path: '/dashboard',
        component: '@/pages/Dashboard',
        wrappers: ['@/wrappers/auth'],
      },
      {
        path: '/product',
        component: '@/pages/Product',
        wrappers: ['@/wrappers/auth'],
      },
    ],
  },
];
