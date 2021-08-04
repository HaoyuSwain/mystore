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
      <el-submenu v-for="(item,i)  in menuRoute" :key="item.name" index="i">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">{{ item.meta.title }}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item v-for="(child,k) in item.children" :index="`${i}-${k}`" :key="child.name">
            {{ child.meta.title }}
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>

  </div>

</template>

<script>
import {mapState} from "vuex";

export default {
  name: "index",
  computed: {
    ...mapState('menuRoutes', ['menuRoute'])
  },
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
  },
  created() {
    this.$store.dispatch('menuRoutes/getMenuRoutes')
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
