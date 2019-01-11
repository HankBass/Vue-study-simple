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
      .user-avator-dropdown{
        padding-right: 50px;
        text-align: right;
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
            <div class="user-avator-dropdown">
                <Dropdown @on-click="handleClick">
                  <Avatar :src="userAvator"/>
                  <DropdownMenu slot="list">
                    <DropdownItem name="logout">退出登录</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
          </el-col>
        </el-row>
      </el-header>
      <el-header>

        <el-menu
           :default-active="activeIndex" 
           class="el-menu-demo" 
           mode="horizontal" 
           @select="handleSelect"
           router
        >
          <NavMenu :navMenus="menuList"></NavMenu>
        </el-menu>
      </el-header>
      <el-container class="el-body">
        <router-view></router-view>
      </el-container>
    </el-container>

  </div>
</template>
<script>
  import { mapActions } from 'vuex'
  import NavMenu from "@/components/menu/NavMenu.vue";
  export default {
    components: {
      NavMenu: NavMenu
    },
    created() {
      this.initMenu()
    },
    data() {
      return {
        menuList:[],
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    computed: {
      userAvator () {
        return this.$store.state.avatorImgPath;
      },
    },
    methods: {
      ...mapActions([
        'handleLogOut'
      ]),
      initMenu(){
        this.$http.get('initMenu').then(res =>{
          this.menuList = res.body.list;
        }, err =>{

        })
      },
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      logout () {
        this.handleLogOut().then(() => {
          this.$router.push({
            name: 'login'
          })
        })
      },
      handleClick (name) {
        switch (name) {
          case 'logout': this.logout()
            break
        }
      },
 
    }
  }
</script>