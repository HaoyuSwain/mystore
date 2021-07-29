<template>
  <div class="aside-container">

    <el-menu @click="handleSelect" :collapse="isCollapse" mode="vertical" background-color="rgb(75,80,90)"
             class="btn-menu" text-color="#fff"
             active-text-color="#ffd04b"
             :collapse-transition="false"
    >
      <el-row>
        <div class="btn" v-if="isCollapse">
          <el-button type="text" class="clo-btn" size="mini" icon="el-icon-menu" @click="handleChange">
            展开
          </el-button>
        </div>
        <div class="btn" v-else-if="!isCollapse">
          <el-button type="text" class="clo-btn" size="mini" icon="el-icon-menu" @click="handleChange">
            收起
          </el-button>
        </div>
      </el-row>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-s-home"></i>
          <span slot="title">首页</span>
        </template>
        <router-link to="/">
          <el-menu-item index="1-1">
            <i class="el-icon-s-home"></i>
            <span slot="title">统计</span>
          </el-menu-item>
        </router-link>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-s-goods"></i>
          <span slot="title">商品</span>
        </template>
        <router-link to="/shop">
          <el-menu-item index="2-1">
            <i class="el-icon-s-operation"></i>
            <span slot="title">商品列表</span>
          </el-menu-item>
        </router-link>
        <el-menu-item index="2-2">
          <i class="el-icon-document-add"></i>
          <span slot="title">新增商品</span>
        </el-menu-item>
      </el-submenu>
    </el-menu>

  </div>

</template>

<script>
export default {
  name: "index",
  data() {
    return {
      isCollapse: true
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    },
    handleChange() {
      this.isCollapse = !this.isCollapse
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped lang="less">


.btn-menu {
  height: 100%;
}

.btn {
  position: relative;
  height: 40px;
  width: 40px;


  .clo-btn {
    display: block;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-30%, -50%);
    color: rgb(240, 211, 49);

  }
}


</style>
