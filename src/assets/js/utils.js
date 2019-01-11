

export const TOKEN_KEY = 'token'

export const setToken = (token) => {
  localStorage.setItem(TOKEN_KEY, token)
}

export const removeToken = (token) => {
  localStorage.removeItem(TOKEN_KEY)
}

export const getToken = () => {
  const token = localStorage.getItem(TOKEN_KEY)
  if (token) return token
  else return false
}

/**
 * @param {String} url
 * @description 从URL中解析参数
 */
export const getParams = url => {
  const keyValueArr = url.split('?')[1].split('&')
  let paramObj = {}
  keyValueArr.forEach(item => {
    const keyValue = item.split('=')
    paramObj[keyValue[0]] = keyValue[1]
  })
  return paramObj
}












