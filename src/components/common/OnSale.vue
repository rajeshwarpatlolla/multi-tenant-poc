<template>
  <div class="on-sale" :style="{'background-color' : this.componentData.backgroundColor}">
    <h4>{{componentData.title}}</h4>
  </div>
</template>

<script>
export default {
  name: 'OnSale',
  data () {
    return {};
  },
  props:['componentData'],
}
</script>

<style>
</style>
