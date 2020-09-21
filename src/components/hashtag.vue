<template>
  <span class="hashtag" @click="setHashTag">
    #{{ hashtag }}
  </span>
</template>

<script>
import {store} from "../stores/store";
export default {
  props: {
    hashtag: {
      type: String
    }
  },
  setup(props,ctx) {
    const setHashTag = () => store.setCurrentHashtag(props.hashtag);
    return {
      setHashTag
    }
  },
}
</script>

<style scoped>
  .hashtag { 
    text-decoration: underline;
    display: block;
  }
  .hashtag:hover {
    color:  cornflowerblue;
  }
</style>