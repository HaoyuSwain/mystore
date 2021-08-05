<template>

  <div id="app">
    <el-container>
      <Aside v-if="!isLogin"></Aside>
      <el-main>
        <router-view>
        </router-view>

      </el-main>
    </el-container>
  </div>

</template>

<script>
import Aside from '@/components/Aside'

export default {
  name: "App",
  components: {
    Aside
  },
  computed: {
    isLogin() {
      return this.$route.path === '/login'
    }
  },


}
</script>

<style scoped lang="less">
#app {
  height: 100vh;
  display: flex;
}

.el-container {
  height: 100%;
}

.aside-container {
  height: 100%;
  flex: 0 1 auto;
  padding: 0;
  margin: 0;
}

.el-main {
  height: 100%;
  width: 100%;
  flex: 0 1 auto;
  padding: 0;
  margin: 0;
}


</style>
