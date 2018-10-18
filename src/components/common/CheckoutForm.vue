<template>
  <div class="checkout-form" :style="{'background-color' : this.componentData.backgroundColor}">
    <h4>{{componentData.title}}</h4>
  </div>
</template>

<script>
export default {
  name: 'CheckoutForm',
  data () {
    return {};
  },
  props:['componentData'],
}
</script>

<style>
</style>
