<template>
  <div class="card">
    <div class="title">
      <slot name="title"></slot>
    </div>
    <div class="content">
      <slot name="content"></slot>
    </div>
    <div class="description">
      <slot name="description"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ['starter'],
  methods: {
    
  }
}
</script>

<style scoped>

  .card {
    border: 1px solid silver;
    border-radius: 8px;
    max-width: 200px;
    margin: 0 6px;;
    cursor: pointer;
    box-shadow: 0px 1px 3px darkgrey;
    top: 0.2s;
  }
  
  .title, .content, .description {
    padding: 16px;
    text-transform: capitalize;
    text-align: center;
  }
  .title, .content {
    border-bottom: 1px solid silver;
  }
</style>