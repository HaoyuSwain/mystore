<template>
  <div class="login-container">
    <el-form :model="loginForm" status-icon :rules="rules" ref="loginForm" label-width="auto" class='loginForm'>
      <el-form-item label="邮箱" prop="email">
        <el-input type="mail" v-model="loginForm.email" autocomplete="off" clearable></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="loginForm.password" autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="" class="sub-btn" @click="submitForm('loginForm')">提交</el-button>
        <el-button @click="resetForm('loginForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import user from "@/api/login";
import {mapState} from 'vuex'

export default {
  name: "index",
  computed: mapState('login', ['user']),
  data() {

    const mailReg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      }
      callback();

    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入邮箱号'));
      } else if (!mailReg.test(value)) {
        callback(new Error('邮箱格式错误'))
      } else {
        callback();
      }
    };
    return {
      loginForm: {
        password: '',
        email: '',
      },
      rules: {
        password: [
          {validator: validatePass, trigger: 'blur'}
        ],
        email: [
          {validator: validatePass2, trigger: 'blur'}
        ],
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          user.postLogin(this.loginForm).then(r => {
            this.$store.dispatch('login/setUserInfo', r)
            this.$router.push({path: '/home'})
          }).catch(err => {
                this.$message.error({
                  message: err,
                  center: true,
                  offset: 200
                })
                this.loginForm.password = ''
              }
          )
          return true
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },
  created() {
    this.$store.dispatch('login/setUserLogout')
  }

}
</script>

<style scoped lang="less">
@import "~@/styles/var.less";

.login-container {
  border: @success 1px solid;
  position: absolute;
  height: 300px;
  width: 600px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;

  .loginForm {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;

    .el-form-item {
      width: 500px;
    }
  }

  .sub-btn {
    background-color: @success;
    color: #fff;
  }
}

</style>
