<template>
  <div class="header" :style="{'background-color' : this.componentData.backgroundColor}">
    <h4>{{componentData.title}}</h4>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {};
  },
  props:['componentData'],
}
</script>

<style>
.header {
}
</style>
