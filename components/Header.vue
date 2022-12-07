<template>
  <div id="header">
    <div @click="goHome">
      <Logo />
    </div>
    <nav>
      <Figma class="nav-items" />
      <Github class="nav-items" />
      <Twitter class="nav-items" />
      <Web class="nav-items" />
    </nav>
  </div>
</template>

<script>
import Logo from './svg/Logo.vue'
import Figma from './svg/Figma.vue'
import Github from './svg/Github.vue'
import Twitter from './svg/Twitter.vue'
import Web from './svg/Web.vue'
import Vue from 'vue'

export default Vue.extend({
  components: { Logo, Figma, Github, Twitter, Web },
  methods: {
    goHome () {
      this.$router.push('/')
    }
  }
})
</script>
<style lang="scss" scoped>
#header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav-items {
  margin-right: 15px;
  &:last-of-type {
    margin-right: 0;
  }
}
</style>
