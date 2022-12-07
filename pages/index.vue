<template>
  <client-only>
    <div v-if="posts && posts.length">
      <div id="first-post">
        <div id="first-post__image">
          <img
            :src="posts[0].jetpack_featured_media_url"
            alt="media"
            width="100%"
            height="100%"
          />
        </div>
        <div id="first-post__excerpt">
          <p v-if="posts[0].date">
            {{
              `${posts[0].categories[0]} . ${getDatePeriod(posts[0].date)} ago`
            }}
          </p>
          <h3>{{ posts[0].title.rendered }}</h3>
          <div v-html="posts[0].excerpt.rendered"></div>
          <div class="read-more">
            <p>{{ getReadingTime(posts[0].content.rendered) }}</p>
            <nuxt-link
              :to="`/posts/${posts[0].id}`"
              aria-describedby="read-full-post"
              >Read Full</nuxt-link
            >
          </div>
        </div>
      </div>
      <div class="posts-wrapper" id="wrapper">
        <div
          v-for="{
            id,
            jetpack_featured_media_url,
            title,
            excerpt,
            date,
            categories,
            content
          } in posts.slice(2)"
          :key="id"
        >
          <Card
            :date="date"
            :title="title.rendered"
            :jetpack_featured_media_url="jetpack_featured_media_url"
            :id="id"
            :excerpt="excerpt.rendered"
            :content="content.rendered"
            :categories="categories"
          />
        </div>
      </div>
      <JoinUs id="join-us-footer" />
    </div>
  </client-only>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapActions } from 'vuex'
import { ActionTypes, PostsState } from '~/store/modules/posts'
import ReturnDatePeriod from '~/utils/date-fn'
import readingTime from '~/utils/readingTime'

export default Vue.extend({
  name: 'IndexPage',
  layout: 'MainLayout',
  computed: {
    ...mapState('postsStore', { posts: 'posts' })
  },
  methods: {
    ...mapActions({ fetchPosts: `postsStore/${ActionTypes.FETCH_POSTS}` }),
    getDatePeriod(date: string) {
      return ReturnDatePeriod(date)
    },
    getReadingTime(text: string) {
      return readingTime(text)
    }
  },
  mounted() {
    this.fetchPosts()
    window.navigator.serviceWorker.onmessage = event => {
      console.log('gragra', event)
      // const message = JSON.parse(event.data)
      //TODO: detect the type of message and refresh the view
    }
  }
})
</script>

<style scoped>
#wrapper {
  margin-bottom: 156px;
}
#first-post {
  margin-bottom: 60px;
}
#first-post__image {
  width: 100%;
}
#first-post__excerpt {
  width: 100%;
}
#join-us-footer {
  margin: 0 auto;
  margin-bottom: 227px;
  text-align: center;
  max-width: 741px;
}
@media only screen and (min-width: 360px) {
  #first-post {
    display: block;
  }
  #first-post__image {
    width: 100%;
    height: 200px;
  }
  #first-post__excerpt {
    width: 100%;
  }
}
@media only screen and (min-width: 700px) {
  #first-post {
    display: flex;
    justify-content: space-between;
  }
  #first-post__image {
    flex-grow: 1;
    margin-right: 36px;
    height: 286px;
  }
  #first-post__excerpt {
    flex-grow: 2;
  }
}
</style>
