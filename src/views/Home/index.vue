<template>
  <div class="home-container">
    <el-row class="header">
      <div class="content">
        商品 / 商品列表
      </div>
      <div class="user">
        <ul class="user-info">
          <li>

            用户信息<i class="el-icon-arrow-down"></i>


          </li>
          <li>
            退出
          </li>
        </ul>

      </div>
    </el-row>

  </div>
</template>

<script>
export default {
  name: "index"
}
</script>

<style scoped lang="less">
.home-container {
  height: 100%;
  width: 100%;

  .header {
    position: relative;
    width: 100%;
    height: 45px;
    display: flex;
    justify-content: space-between;
    line-height: 45px;
    font-size: 14px;
    color: #66cdaa;
    border-bottom: 1px #66cdaa solid;

    .content {
      position: absolute;
      left: 20px;
    }

    .user {
      position: absolute;
      right: 0px;
      cursor: pointer;


      .user-info {
        text-align: center;

        li {
          padding: 0 40px;
          border-radius: 5px;
          transition: all .3s;
        }

        li:not(:first-child) {
          display: none;
        }

        &:hover {
          li {
            display: block;

            &:hover {
              background-color: #66cdaa;
              color: #fff;
            }
          }
        }

      }
    }

  }


}

</style>
