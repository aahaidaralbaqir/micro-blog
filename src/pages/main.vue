<template>
  <section>
    {{ store.state.currentHashTag }}
    <ui-card 
      v-for="(post,index) in filteredPost" 
      :key="index"
    >
      <template v-slot:title>
        {{ post.title }}
      </template>
      <template v-slot:content>
        {{ post.content }}
      </template>
      <template v-slot:description>
         <ui-control 
          :post="post"  
        />
      </template>
    </ui-card>
  </section>
</template>

<script>
import { store } from "../stores/store";
import Card from "../components/card.vue";
import Control from "../components/control.vue";
import { ref,computed,watchEffect } from "vue";
export default {
  components: {
    "ui-card": Card,
    "ui-control": Control
  },
  setup() {
    const filteredPost = computed(() => {
      if(typeof store.state.currentHashTag == 'string') {
        return store.state.posts.filter(each_post => each_post.hastags.includes(store.state.currentHashtag))
      }
      return store.state.posts
    });
    watchEffect(() => {
      console.log(typeof store.state.currentHashtag)
    })
    return {
      filteredPost,
      store
    }
  } 
}
</script>

<style>

</style>