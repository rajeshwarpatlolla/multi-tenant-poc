<template>
  <div class="AboutUs" :style="{'background-color' : this.componentData.backgroundColor}">
    <h4>{{componentData.title}}</h4>
  </div>
</template>

<script>
export default {
  name: 'AboutUs',
  data () {
    return {};
  },
  props:['componentData'],
}
</script>

<style>
</style>
