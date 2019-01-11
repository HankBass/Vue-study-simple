<style>
  /* 水平样式 */
 .el-menu--horizontal>div>.el-submenu {
      float: left;
  }

  /* 一级菜单的样式 */
  .el-menu--horizontal>div>.el-menu-item {
      float: left;
      height: 60px;
      line-height: 60px;
      margin: 0;
      border-bottom: 2px solid transparent;
      color: #909399;
  }
  .el-menu--horizontal>div>.el-menu-item.is-active {
      border-bottom: 2px solid #409eff;
      color: #303133;
  }
  .el-menu-item:focus, .el-menu-item:hover{
    background-color: #fff;
  }
  .el-menu--horizontal>div>.el-submenu .el-submenu__title {
    height: 60px;
    line-height: 60px;
    border-bottom: 2px solid transparent;
    color: #909399;
  }
  .el-menu--horizontal>div>.el-submenu .el-submenu__icon-arrow {
      position: static;
      vertical-align: middle;
      margin-left: 8px;
      margin-top: -3px;
  }
</style>

<template>
    <div class="navMenu">
  
      <template v-for="navMenu in navMenus">
        <el-menu-item v-if="!navMenu.children&&navMenu.entity"
                      :key="navMenu.entity.id" :data="navMenu" :index="navMenu.entity.id" 
                      :route="navMenu.entity.value"
                     >
          <i :class="navMenu.entity.icon"></i>
          <span slot="title">{{navMenu.entity.name}}</span>
        </el-menu-item>
  
        <el-submenu v-if="navMenu.children&&navMenu.entity"
                    :key="navMenu.entity.id" :data="navMenu" 
                    :index="navMenu.entity.id"
                    :route="navMenu.entity.value">
          <template slot="title">
            <i :class="navMenu.entity.icon"></i>
            <span> {{navMenu.entity.name}}</span>
          </template>
          <!-- 递归 -->
          <NavMenu :navMenus="navMenu.children"></NavMenu>
        </el-submenu>
      </template>
  
    </div>
  </template>
  
  <script>
    export default {
      name: 'NavMenu',
      props: ['navMenus'],
      data() {
        return {}
      },
      methods: {}
    }
  </script>

  