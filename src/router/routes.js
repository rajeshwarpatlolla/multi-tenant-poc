const routes = [
    // { 
    //     path: '/',
    //     component: () => import ('pages/RenderView.vue'),
    //     name: 'home',
    // },
  //   { 
  //       path: '/shop',
  //       component: () => import ('pages/RenderView.vue'),
  //       name: 'shop',
  //   },
  //   { 
  //     path: '/products',
  //     component: () => import ('pages/RenderView.vue'),
  //     name: 'products',
  // },
    
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
