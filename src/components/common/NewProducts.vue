<template>
  <div class="new-products" :style="{'background-color' : this.componentData.backgroundColor}">
    <h4>{{componentData.title}}</h4>
    <div class="product-section" v-for="(p, index) in producstList" :key="index">
      <div>{{p.name}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewProducts',
  data () {
    return {
      producstList:[],
      products: [
        {
          id:1,
          name:'Product 1'
        },
        {
          id:2,
          name:'Product 2'
        },
        {
          id:3,
          name:'Product 3'
        },
        {
          id:4,
          name:'Product 4'
        },
        {
          id:5,
          name:'Product 5'
        },
      ]
    };
  },
  props:['componentData'],
  mounted() {
    this.producstList = this.products.filter((o) => this.componentData.productIDs.indexOf(o.id) >= 0);
  },
}
</script>

<style>
</style>
