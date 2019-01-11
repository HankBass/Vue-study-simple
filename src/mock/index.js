import Mock from 'mockjs'
import { login, logout, getUserInfo } from './login'
import { initMenu } from './menu'


Mock.setup({
  timeout: 1000
})

Mock.mock(/\login/, login)
Mock.mock(/\get_info/, getUserInfo)
Mock.mock(/\logout/, logout)
Mock.mock(/\initMenu/, initMenu)


export default Mock
