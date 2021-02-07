import axios from '@/utils/axios'
import { RequestEnum } from '@/enums/httpEnums'
import { API } from '@/enums/API'

// 接口的可选属性，：为必须的属性，？：为可以不需要的属性。这里下面的data传参，都用可选属性，就保证了只需要一次接口，但是每次不用都把所有参数都传进去
interface userInfo {
  name?: string
  password?: string
  email?: string
  phone?: string
}

/**
 * 注册请求
 *
 * @param {name:string,password:string,email:string,phone:string,} data
 */
export function userRegister(data: userInfo) {
  return axios({
    url: API.USERREGISTER,
    method: RequestEnum.POST,
    data
  })
}
/**
 * 登录请求
 *
 * @param {phone:string,password:string} data
 */
export function userLogin(data: userInfo) {
  return axios({
    url: API.USERLOGIN,
    method: RequestEnum.POST,
    data
  })
}
/**
 * 修改密码
 *
 * @param {phone:string,oldPassword:string,newPassword:string} data
 */
export function updatePassword(data: userInfo) {
  return axios({
    url: API.USERUPDATE,
    method: RequestEnum.POST,
    data
  })
}
/**
 * 退出登录
 *
 */
export function userLogout() {
  return axios(API.USERLOGOUT) // 没有参数可以简写成这样
}
/**
 * 删除用户
 *
 */
export function userDelete() {
  return axios(API.USERDELETE)
}
