
export default {
  // Company Array
  // eJSON Array
  // Two companies data for testing  => [XYZ,ABC]
  configArr :
  [
    // ========================== company xyz ======================================
    {
      'XYZ': {  // company  xyz
        routes: [
          {

            // home page

            "/":{
                  pageSections: [
                    {
                      component: () => import('components/Header'),
                      componentData: {
                        backgroundColor: '#efefef;',
                        title: 'This is xyz header page',
                        name: 'Header'
                      }
                    },
                    
                    {                      
                      component: () => import ('components/Footer'),
                     
                      componentData: {
                        backgroundColor: '#2ef743;',
                        title: 'This is xyz home page',
                        productIDs: [234, 5654, 3243, 9834],
                        name: 'Footer'
                      }
                    },
                    
                  ]
              },

              // about us page

            "/about-us":{
                  pageSections: [   
                    
                    {                      
                      component: () => import ('components/Footer'),
                     
                      componentData: {
                        backgroundColor: '#2ef743;',
                        title: 'This is xyz about us page',
                        productIDs: [234, 5654, 3243, 9834],
                        name: 'Footer'
                      }
                    },
                    
                  ]
              },

              // subscribe page

              "/subscribe":{
                pageSections: [
                  
                  {                    
                    component: () => import ('components/Header'),
                    componentData: {
                      backgroundColor: '#efefef;',
                      title: 'This is xyz subscribe page',
                      name: 'Header'
                    }
                  },                 
                  
                ]
            },

            // sign in page

            "/sign-in":{
                pageSections: [
                  
                  {                    
                    component: () => import ('components/Header'),
                    componentData: {
                      backgroundColor: '#efefef;',
                      title: 'This is xyz sign-in page',
                      name: 'Header'
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
      'ABC': {  // company abc
        routes: [
        {

            // home page

            "/":
                {
                  pageSections: [                    
                    
                    {                      
                      component: () => import ('components/Checkout'),                      
                      componentData: {
                        backgroundColor: '#efefef;',
                        title: 'This is abc home page',
                        name: 'Checkout',
                      }
                    },                   
                ]
              }
         },

         // shoping page

          {
            "/shop":
                {
                  pageSections: [                    
                    
                    {                      
                      component: () => import ('components/Checkout'),                      
                      componentData: {
                        backgroundColor: '#efefef;',
                        title: 'This is abc shop page',
                        name: 'Checkout',
                      }
                    },                   
                ]
              }
         },

         // checkout page

         {
          "/checkout":
              {
                pageSections: [
                  
                  {                      
                    component: () => import ('components/Checkout'),                      
                    componentData: {
                      backgroundColor: '#efefef;',
                      title: 'This is abc checkout page',
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
