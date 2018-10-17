
export default {
  // Company Array
  // eJSON Array
  // Two companies data for testing  => [xyz,yzx]
  configArr:
    [
      // ========================== company xyz ======================================
      {
        'xyz': {  // company  xyz
          routes: [
            {
              "home": {
                pageSections: [
                  {
                    component: () => import('components/common/Header'),
                    componentData: {
                      backgroundColor: '#efefef;',
                      title: 'Welcome to my Header',
                      name: 'Header',
                    }
                  },
                  {
                    component: () => import('components/common/Footer'),

                    componentData: {
                      backgroundColor: '#2ef743;',
                      title: 'This is my footer',
                      productIDs: [234, 5654, 3243, 9834],
                      name: 'Footer'
                    }
                  },

                ]
              },
              "shop": {
                pageSections: [
                  {
                    component: () => import('components/common/Header'),
                    componentData: {
                      backgroundColor: '#efefef;',
                      title: 'This is my header',
                      name: 'Header'
                    }
                  },
                  {
                    component: () => import('components/custom/xyz/Unique'),
                    componentData: {
                      backgroundColor: '#e89f73;',
                      title: 'This is a unique one',
                      name: 'Unique'
                    }
                  }
                ]
              }
            }
          ]
        }
      },
      // ========================== company yzx ======================================
      {
        'yzx': {  // company yzx
          routes: [
            {
              "home":
              {
                pageSections: [

                  {
                    component: () => import('components/common/NewProducts'),
                    componentData: {
                      backgroundColor: '#2ef743;',
                      title: 'New Products',
                      productIDs: [234, 5654, 3243, 9834],
                      name: 'Products',

                    }
                  },
                  {
                    component: () => import('components/common/Header'),
                    componentData: {
                      backgroundColor: '#efefef;',
                      title: 'Products page',
                      name: 'Header',
                    }
                  },
                ]
              }
            },
            {
              "shop":
              {
                pageSections: [

                  {
                    component: () => import('components/common/Checkout'),
                    componentData: {
                      backgroundColor: '#bb99cc;',
                      title: 'This is my checkout page',
                      name: 'Checkout',
                    }
                  },
                  {
                    component: () => import('components/common/NewProducts'),
                    componentData: {
                      backgroundColor: '#2ef743;',
                      title: 'New Products',
                      productIDs: [234, 5654, 3243, 9834],
                      name: 'Products',

                    }
                  },

                ]
              }
            }
          ]
        }
      },
      // ========================== company abc ======================================
      {
        'abc': {  // company abc
          routes: [
            {
              "home":
              {
                pageSections: [
                  {
                    component: () => import('components/common/Navigation'),
                    componentData: {
                      backgroundColor: '#ddd;',
                      title: 'nav'
                    }
                  },
                  {
                    component: () => import('components/common/NewProducts'),
                    componentData: {
                      backgroundColor: '#9ef743;',
                      title: 'The New Products',
                      productIDs: [234, 5654, 3243, 9834]
                    }
                  },
                  {
                    component: () => import('components/common/Footer'),
                    componentData: {
                      backgroundColor: '#efefef;',
                      title: 'This is a footer',
                      name: 'Footer',
                    }
                  },
                ]
              }
            },
            {
              "shop":
              {
                pageSections: [

                  {
                    component: () => import('components/common/Checkout'),
                    componentData: {
                      backgroundColor: '#efefef;',
                      title: 'This is my checkout page',
                      name: 'Checkout',
                    }
                  },

                ]
              }
            }
          ]
        }
      },

    ]

}
