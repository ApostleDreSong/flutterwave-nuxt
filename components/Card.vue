<template>
  <div id="card">
    <img
      :src="jetpack_featured_media_url"
      alt="media"
      width="100%"
      height="218px"
    />
    <p>
      {{ `${categories[0]} . ${getDatePeriod(date)} ago` }}
    </p>
    <h3>{{ title }}</h3>
    <div v-html="excerpt"></div>
    <div class="read-more">
      <p>{{ getReadingTime(content) }}</p>
      <nuxt-link :to="`/posts/${id}`" aria-describedby="read-full-post"
        >Read Full</nuxt-link
      >
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import readingTime from '~/utils/readingTime'
import ReturnDatePeriod from '~/utils/date-fn'

export default Vue.extend({
  props: [
    'date',
    'title',
    'jetpack_featured_media_url',
    'id',
    'excerpt',
    'content',
    'categories'
  ],
  methods: {
    getReadingTime(text: string) {
      return readingTime(text)
    },
    getDatePeriod(date: string | Date) {
      return ReturnDatePeriod(date)
    }
  }
})
</script>

<style lang="scss" scoped>
#card {
  width: 100%;
}
</style>
