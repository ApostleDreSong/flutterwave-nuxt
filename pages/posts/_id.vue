<template>
  <div>
    <div v-if="post" id="post">
      <h1>{{ post.title.rendered }}</h1>
      <div v-html="splitString(post.content.rendered)[0]"></div>
      <img
        :src="post.jetpack_featured_media_url"
        alt="media"
        width="100%"
      />
      <div v-html="splitString(post.content.rendered)[1]"></div>
    </div>
    <div id="more-articles">
      <h4>More Articles</h4>
      <div class="posts-wrapper">
        <div
          v-for="{
            id,
            jetpack_featured_media_url,
            title,
            excerpt,
            date,
            content,
            categories
          } in filteredPosts"
          :key="id"
        >
          <div class="read-more">
            <Card
              :date="date"
              :title="title?.rendered"
              :jetpack_featured_media_url="jetpack_featured_media_url"
              :id="id"
              :excerpt="excerpt?.rendered"
              :content="content?.rendered"
              :categories="categories"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapActions } from 'vuex'
import { ActionTypes, Post } from '~/store/modules/posts'

export default Vue.extend({
  name: 'DetailsPage',
  layout: 'MainLayout',
  data: () => ({
    id: '',
    moreArticles: []
  }),
  computed: {
    ...mapState('postsStore', { post: 'post', posts: 'posts' }),
    filteredPosts(): Post[] {
      let filtered: Post[] = []
      for (let index = 0; index < this.posts.length; index++) {
        const element = this.posts[index]
        if (filtered.length === 3) {
          break
        }
        if (element.id !== this.id) {
          filtered.push(element)
        }
      }
      return filtered
    }
  },
  methods: {
    ...mapActions({
      fetchPost: `postsStore/${ActionTypes.FETCH_POST}`,
      fetchPosts: `postsStore/${ActionTypes.FETCH_POSTS}`
    }),
    splitString(str: string) {
      return [
        str.slice(0, str.length / 2),
        str.slice(str.length / 2 + 1, str.length)
      ]
    }
  },
  async created() {
    const id = this.$route.params?.id || ''
    this.id = id
    this.fetchPost({ id })
  }
})
</script>

<style lang="scss" scoped>
#post {
  padding: 91px 118px;
}
@media only screen and (min-width: 360px) {
  #post {
    padding: 91px 28px;
  }
}
@media only screen and (min-width: 700px) {
  #post {
    padding: 91px 48px;
  }
}
</style>
