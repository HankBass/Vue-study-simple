# vue-study-simple

## Install
```
npm install
```
## Run
### Development
```
npm run dev
```
### Production(Build)
```
npm run build
```
## 文件结构
```shell
.
├── build  项目构建配置
├── config  开发相关配置
├── public  打包所需静态资源
└── src
    ├── api  AJAX请求
    └── assets  项目静态资源
        ├── img  图片资源
        └── js   公共的js文件
    ├── components  业务组件
    ├── mock  mock模拟数据
    ├── plugins  引用的插件
    ├── router  路由配置
    ├── store  Vuex配置
    ├── view  页面文件
    └── tests  测试相关
```

## 项目说明

  基于`vue-cli@3.x`搭建，项目配置更加简洁；


* UI框架
  
  项目目前已全局依赖了[`element-ui`](http://element-cn.eleme.io/#/zh-CN/component/installation)和[`iview`](https://www.iviewui.com/docs/guide/install)

* 数据交互

  项目目前已依赖了`axios`和`vue-resource`，使用方法分别是`this.$axios`和`this.$http`

* 路由文件

  路由统一写在`router`文件夹的`index.js`文件内，如有需要，你可以自己创建新的文件用于存放路由


* 其他事项
  
  项目已经引入了`vuex`和`mockjs`，有需要的可以按需使用



