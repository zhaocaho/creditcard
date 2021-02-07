/**
 * @description: API接口
 */
export enum API {
  /**
   * @description 用户接口
   */
  // 用户注册
  USERREGISTER = '/user/register',
  // 用户登录
  USERLOGIN = '/user/login',
  // 修改密码
  USERUPDATE = '/user/update',
  // 退出登录
  USERLOGOUT = '/user/logout',
  // 删除用户
  USERDELETE = '/user/delete',

  /**
   * @description 信用卡接口
   */
  // 添加信用卡信息
  CREDITCARDADD = '/creditcard/add',
  // 删除信用卡信息
  CREDITCARDDELETE = '/creditcard/delete',
  // 查询当前信用卡信息
  CREDITCARDFIND = '/creditcard/find',
  // 修改当前用户信用卡信息
  CREDITCARDUPDATE = '/creditcard/update',
  // 添加信用卡历史还款信息
  HISTORYADD = '/creditcard/addhistory',
  // 删除历史还款记录
  HISTORYDELETE = '/creditcard/deletehistory'
}
