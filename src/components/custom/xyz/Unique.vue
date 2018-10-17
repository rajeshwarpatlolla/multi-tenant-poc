<template>
  <div 
    class="footer-style"
    :style="'background-color:' + componentData.backgroundColor"
  >
    UNIQUE- {{componentData.title}}
  </div>
</template>

<script>
export default {
  name: 'unique',
  data () {
    return {
      backgroundColor: 'background-color',
    }
  },
  props:{
    componentData: [Array, Object],
    sectionIndex: Number,
  }
}
</script>

<style scoped>
    .footer-style{
      width: 100%;
      margin: 10px;
      padding:2px;
      border: 10px solid #eee;
      background-color: aqua;
    }
  </style>
