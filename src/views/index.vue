<style scoped lang="scss">
  .index {
    .top {
      line-height: 60px;
      background-color: #0066A7;

      .logo {
        text-align: left;

        img {
          vertical-align: middle;
        }
      }
    }

    .el-body {
      height: calc(100vh - 60px);

      .el-aside {
        background-color: #d3dce6;
        text-align: center;
      }

      .el-main {
        background-color: #e9eef3;
        color: #333;
        text-align: center;
      }
    }
  }
</style>
<template>
  <div class="index">
    <el-container>
      <el-header class="top">
        <el-row :gutter="20">
          <el-col :span="12">
            <div class="logo">
              <img :src="require('@/assets/img/logo.gif')" alt="">
            </div>
          </el-col>
          <el-col :span="12">
            <div class="account"></div>
          </el-col>
        </el-row>
      </el-header>
      <el-header>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1">首页</el-menu-item>
          <el-submenu index="2">
            <template slot="title">公务员招考</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项1</el-menu-item>
              <el-menu-item index="2-4-2">选项2</el-menu-item>
              <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="3">任免业务办理</el-menu-item>
          <el-menu-item index="4">其他业务</a></el-menu-item>
          <el-menu-item index="5">综合业务管理</a></el-menu-item>
          <el-menu-item index="6">业务综合查询</a></el-menu-item>
          <el-menu-item index="7">综合查询统计</a></el-menu-item>
          <el-menu-item index="8">人员名册与统计</a></el-menu-item>
          <el-menu-item index="9">社保及房补账号</a></el-menu-item>
          <el-menu-item index="10">相关工资项目补录</a></el-menu-item>
        </el-menu>
      </el-header>
      <el-container class="el-body">
        <el-aside width="200px">Aside</el-aside>
        <el-container>
          <el-main>Main</el-main>
        </el-container>
      </el-container>
    </el-container>

  </div>
</template>
<script>
  export default {
    created() {
    },
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>