<template>
  <div 
    class="row layout-padding"
    :style="'background-color:' + componentData.backgroundColor"
  >
    header - {{componentData.title}}
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
