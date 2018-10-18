import RenderView from '../pages/RenderView';
import Error404 from '../pages/Error404';

const routes = [{
    name: 'renderview',
    path: '/:route*',
    component: RenderView,
  },
  { 
    name: 'error404',
    path: '/404',
    component: Error404,
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
