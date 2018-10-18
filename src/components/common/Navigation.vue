<template>
  <div 
    class="row layout-padding"
    :style="'background-color:' + componentData.backgroundColor"
  >
    <q-btn>
        home
    </q-btn>
    <q-btn>
        shop
    </q-btn>
    {{ nav }}
  </div>
</template>

<script>
export default {
  data () {
    return {
      backgroundColor: 'background-color',
    }
  },
  props:{
    componentData: {},
  },
  computed: {
    nav() {
        return this.$store.state
    },
  }
}
</script>
