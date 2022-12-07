<template>
  <div id="main">
    <Header id="header" />
    <nuxt />
  </div>
</template>

<style lang="scss" scoped>
#main {
  /* margin: 0 auto; */
  width: 100%;
  box-sizing: border-box;
}
#header {
  margin-bottom: 58px;
}
@media only screen and (min-width: 360px) {
  #main {
    padding: 0 40px;
  }
}
@media only screen and (min-width: 700px) {
  #main {
    padding: 0 90px;
  }
}
@media only screen and (min-width: 960px) {
  #main {
    padding: 0 158px;
  }
}
</style>
