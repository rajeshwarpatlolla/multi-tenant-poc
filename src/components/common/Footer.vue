<template>
  <div 
    class="row layout-padding"
    :style="'background-color:' + componentData.backgroundColor"
  >
    footer - {{ componentData.title }}
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
  }
}
</script>
