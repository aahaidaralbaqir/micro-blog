import { reactive } from "vue";

class Store {
  constructor() {
    this.state = reactive({
      posts: [
      {
        id: 1,
        title: "Learning vue js 3",
        content: "Using the composition api",
        likes: 10,
        hastags: [
          "vue",
          "javascript",
          "composition api"
        ]
      },
      {
        id: 2,
        title: "Vue x ",
        content: "vasdasd",
        likes: 10,
        hastags: [
          "vue",
          "vuex",
          "flux"
        ]
      },
      {
        id: 3,
        title: "Vue router with vue-rotuer 3",
        content: "vasdasd",
        likes: 110,
        hastags: [
          "vue",
          "vue-router",
          "routing"
        ]
      }
      ],
      currentHashtag: null,
    })
  }
  
  setCurrentHashtag (tag) {
    this.state.currentHashtag = tag;
  }
}

export const store = new Store()