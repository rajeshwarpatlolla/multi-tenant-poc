<template>
  <q-layout>
    <q-page-container>
      <q-page>
        <div class="client-title" v-if="pageSections">
          <h4>{{clientData.clientName}}</h4>
          <!-- <router-link to="/"> Home </router-link> -->
          <div v-for="(section, index) in pageSections" :is="section.component" :componentData="section.componentData" :key="index"/>
        </div>
        <div v-else>
          <error404/>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
/**
 * This component registers all the components of a client based on eJSON
 * and also renders the corresponding components based on the current route.
 */
import c from "../js/logs";
import Vue from "vue";
import Error404 from "./Error404";

export default {
  name: "RenderView",
  data() {
    return {
      clientData: null,
      pageSections: null
    };
  },
  components: { Error404 },
  methods: {
    handleRoute() {
      if (this.clientData) {
        // Fetching the path of the given url
        const path = this.$route.params.route ? this.$route.params.route : "";
        // Finding the index of the client json
        const index = this.clientData.routes.findIndex(o => o.route === `/${path}`);
        this.pageSections = index >= 0 ? this.clientData.routes[index].pageSections : null;
      }
    }
  },
  created() {
    const client = this.$route.query.e;
    this.clientData = this.$store.state[client];
    if (this.clientData) {
      this.clientData.routes.forEach(route => {
        route.pageSections.forEach(section => {
          // Creating or Generating vue components which are located at the given componentPath
          Vue.component(section.component, () =>
            import("../components" + section.componentPath)
          );
        });
      });
      this.handleRoute();
    }  
  },
  afterEach() {
    this.handleRoute();
  }
};
</script>

<style>
 h4 {
   margin: 16px 0;
 }
</style>
