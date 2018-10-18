import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function(/* { ssrContext } */) {
  const Store = new Vuex.Store({
    /**
     * eJSON for rendering pages based on client, hard wired in Vuex.
     */
    state: {
      clientA: {
        clientName: 'Client A',
        routes: [
          {
            route: '/',
            pageSections: [
              {
                id: 1,
                component: 'headerComp',
                componentPath: '/common/Header',
                componentData: {
                  backgroundColor: '#DCEDEA',
                  title: 'This is Header component',
                },
              },
              {
                id: 2,
                component: 'NewProducts',
                componentPath: '/common/NewProducts',
                componentData: {
                  backgroundColor: '#FBF3DE',
                  title: 'This is New Products component',
                  productIDs: [1, 2, 4],
                },
              },
              {
                id: 3,
                component: 'BlogPosts',
                componentPath: '/common/BlogPosts',
                componentData: {
                  backgroundColor: '#E9E5E3',
                  title: 'This is Blog Posts component',
                },
              },
              {
                id: 4,
                component: 'AboutUs',
                componentPath: '/common/AboutUs',
                componentData: {
                  backgroundColor: '#FBEBDF',
                  title: 'This is AboutUs component',
                },
              },
              {
                id: 5,
                component: 'footerComp',
                componentPath: '/common/Footer',
                componentData: {
                  backgroundColor: '#DCEBF0',
                  title: 'This is Footer component',
                },
              },
            ],
          },
          {
            route: '/shop',
            pageSections: [
              {
                id: 1,
                component: 'headerComp',
                componentPath: '/common/Header',
                componentData: {
                  backgroundColor: '#DCEDEA',
                  title: 'This is Header component',
                },
              },
              {
                id: 2,
                component: 'NewProducts',
                componentPath: '/common/NewProducts',
                componentData: {
                  backgroundColor: '#FBF3DE',
                  title: 'This is New Products component',
                  productIDs: [1, 2, 4],
                },
              },
              {
                id: 3,
                component: 'OnSale',
                componentPath: '/common/OnSale',
                componentData: {
                  backgroundColor: '#F5DFEA',
                  title: 'This is OnSale component',
                },
              },
              {
                id: 4,
                component: 'footerComp',
                componentPath: '/common/Footer',
                componentData: {
                  backgroundColor: '#DCEBF0',
                  title: 'This is Footer component',
                },
              },
            ],
          },
          {
            route: '/checkout',
            pageSections: [
              {
                id: 1,
                component: 'headerComp',
                componentPath: '/common/Header',
                componentData: {
                  backgroundColor: '#DCEDEA',
                  title: 'This is Header component',
                },
              },
              {
                id: 2,
                component: 'CheckoutForm',
                componentPath: '/common/CheckoutForm',
                componentData: {
                  backgroundColor: '#EAE4F1',
                  title: 'This is CheckoutForm Component',
                },
              },
              {
                id: 3,
                component: 'footerComp',
                componentPath: '/common/Footer',
                componentData: {
                  backgroundColor: '#DCEBF0',
                  title: 'This is Footer component',
                },
              },
            ],
          },
          {
            route: '/shipping',
            pageSections: [
              {
                id: 1,
                component: 'headerComp',
                componentPath: '/common/Header',
                componentData: {
                  backgroundColor: '#DCEDEA',
                  title: 'This is Header component',
                },
              },
              {
                id: 2,
                component: 'clientA-shipping',
                componentPath: '/custom/client-a/Shipping',
                componentData: {
                  backgroundColor: '#EAE4F1',
                  title: 'This is Shipping Component',
                },
              },
              {
                id: 3,
                component: 'footerComp',
                componentPath: '/common/Footer',
                componentData: {
                  backgroundColor: '#DCEBF0',
                  title: 'This is Footer component',
                },
              },
            ],
          },
        ],
      },
      clientB: {
        clientName: 'Client B',
        routes: [
          {
            route: '/',
            pageSections: [
              {
                id: 1,
                component: 'headerComp',
                componentPath: '/common/Header',
                componentData: {
                  backgroundColor: '#DCEDEA',
                  title: 'This is Header component',
                },
              },
              {
                id: 2,
                component: 'NewProducts',
                componentPath: '/common/NewProducts',
                componentData: {
                  backgroundColor: '#FBF3DE',
                  title: 'This is New Products component',
                  productIDs: [1, 2, 3, 4],
                },
              },
              {
                id: 3,
                component: 'footerComp',
                componentPath: '/common/Footer',
                componentData: {
                  backgroundColor: '#DCEBF0',
                  title: 'This is Footer component',
                },
              },
            ],
          },
          {
            route: '/members',
            pageSections: [
              {
                id: 1,
                component: 'headerComp',
                componentPath: '/common/Header',
                componentData: {
                  backgroundColor: '#DCEDEA',
                  title: 'This is Header component',
                },
              },
              {
                id: 2,
                component: 'clientB-Members',
                componentPath: '/custom/client-b/Members',
                componentData: {
                  backgroundColor: '#EAE4F1',
                  title: 'This is Members Component',
                },
              },
              {
                id: 3,
                component: 'footerComp',
                componentPath: '/common/Footer',
                componentData: {
                  backgroundColor: '#DCEBF0',
                  title: 'This is Footer component',
                },
              },
            ],
          },
        ],
      },

      clientC: {
        clientName: 'Client C',
        routes: [
          {
            route: '/',
            pageSections: [
              {
                id: 1,
                component: 'headerComp',
                componentPath: '/common/Header',
                componentData: {
                  backgroundColor: '#DCEDEA',
                  title: 'This is Header component',
                },
              },
              {
                id: 2,
                component: 'NewProducts',
                componentPath: '/common/NewProducts',
                componentData: {
                  backgroundColor: '#FBF3DE',
                  title: 'This is New Products component',
                  productIDs: [1, 2, 4],
                },
              },
              {
                id: 3,
                component: 'footerComp',
                componentPath: '/common/Footer',
                componentData: {
                  backgroundColor: '#DCEBF0',
                  title: 'This is Footer component',
                },
              },
            ],
          },
        ],
      },
    },
  });

  return Store;
}
