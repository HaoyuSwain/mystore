<template>
  <div class="home-container">
    <Nav></Nav>
    <h1>test</h1>
    <router-view>
    </router-view>
  </div>
</template>

<script>
import Nav from '@/components/Nav'


export default {
  name: "index",
  components: {
    Nav
  },
  methods: {},

}
</script>

<style scoped lang="less">
.home-container {
  height: 100%;
  width: 100%;


}

</style>
