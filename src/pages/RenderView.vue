<template>
  <q-layout>
    <q-page-container>
      <q-page>
          <div class="row full-width justify-center">
            <h3>hi there</h3>
          </div>
          <div class="row full-width justify-center">
              <p>this is /src/pages/RenderView.vue</p>
          </div>
      </q-page>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style>
</style>

<script>
    import c from '../js/logs'

    export default {
        data() {
            return {
            }

        },
        methods: {
        }
    }
</script>
