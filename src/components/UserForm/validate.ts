// 密码的自定义验证规则
export const validatePass = async (rule: any, value: unknown) => {
  const phoneReg = /^1[3|4|5|7|8][0-9]{9}$/g
  if (value === '') {
    return Promise.reject(new Error('请输入密码'))
  } else {
    if (!phoneReg.test(value + '')) {
      return Promise.reject(new Error('电话号码不正确'))
    }
    return Promise.resolve()
  }
}

// 邮箱自定义规则
export const validateEmail = async (rule: any, value: unknown) => {
  const emailReg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/g
  if (value === '') {
    return Promise.reject(new Error('请输入邮箱'))
  } else {
    if (!emailReg.test(value + '')) {
      return Promise.reject(new Error('邮箱格式不正确'))
    }
    return Promise.resolve()
  }
}
