<template>
  <div>
    <button>
      {{ post.likes }}
    </button>
    <br>
    <ui-hashtag 
      v-for="(tag,index) in post.hastags" 
      :key="index" 
      :hashtag="tag" 
    />
  </div>
</template>

<script>
import HashTag from "./hashtag.vue";
export default {
  props: {
    post: {
      type: Object
    }
  },
  components: {
    "ui-hashtag": HashTag
  },
  setup(props,ctx) {
  }
}
</script>

<style>

</style>