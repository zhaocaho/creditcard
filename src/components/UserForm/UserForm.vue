<template>
  <section class="userForm" :style="{ backgroundColor: formBackgroundColor }">
    <h1 class="user-form-title">{{ title }}</h1>
    <a-form
      :rules="rules"
      :model="form"
      layout="horizontal"
      ref="formRef"
      :labelCol="{ span: 6 }"
      :wrapperCol="{ span: 18 }"
      :class="['user-form-form']"
    >
      <!-- 每一行 -->
      <a-form-item
        :label="name"
        v-for="(name, i) in formtype"
        :key="i"
        :name="name"
        :hasFeedback="name !== 'password'"
      >
        <a-input
          v-model:value="form[name]"
          allowClear
          :type="name"
          @keydown.enter="submitForm"
        />
      </a-form-item>
    </a-form>
    <div class="user-form-button">
      <a-button type="danger" @click="resetForm">
        <span>重置</span>
      </a-button>
      <a-button type="primary" @click="submitForm">
        <span>提交</span>
      </a-button>
    </div>
  </section>
</template>
<script lang="ts">
import {
  defineComponent,
  PropType,
  reactive,
  readonly,
  toRefs,
  ref,
  onMounted
} from 'vue'
// 引入验证规则
import { validatePass, validateEmail } from './validate'
import { FormType } from '@/types/interface'

export default defineComponent({
  name: 'UserForm',
  props: {
    // 登录或注册等表格
    formtype: {
      type: Array as PropType<string[]>,
      // 对象或数组默认值必须从一个工厂函数获取
      default: function() {
        return ['phone', 'name']
      },
      // 自定义验证
      validator: function(value: string[]) {
        // 这个字符串数组值只能由下列几个值组成
        return value.every(x => {
          return ['phone', 'name', 'email', 'password'].includes(x)
        })
      }
    },
    // 标题
    title: {
      type: String,
      default: '登录'
    },
    // 表格输入组件的背景色
    formBackgroundColor: {
      type: String,
      default: 'rgb(255, 255, 255)'
    }
  },
  setup(props: any, { emit }) {
    // 获取form需要的属性名
    const formkeys = readonly(props.formtype)
    const formObj: object = {}
    formkeys.forEach((x: string) => {
      formObj[x] = ''
    })
    // 表格相关
    const state = reactive({
      // 表格项
      form: formObj as FormType,
      // 规则
      rules: {
        // 用户名
        name: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          {
            min: 2,
            max: 15,
            message: '用户名长度需要大于2小于15',
            trigger: 'blur'
          }
        ],
        // 密码
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 12, message: '密码长度需大于6小于12', trigger: 'blur' }
        ],
        // 邮件
        email: [{ required: true, validator: validateEmail, trigger: 'blur' }],
        // 电话
        phone: [{ required: true, validator: validatePass, trigger: 'blur' }]
      }
    })

    // 用于获取formRef，需要声明类型
    const formRef = ref<any>(null)

    // 这里就相当于写在methods中的方法
    // 重置表格，($refs)
    const resetForm = (): void => {
      formRef.value.resetFields()
    }
    // 提交表格($emit)
    const submitForm = () => {
      formRef.value
        .validate()
        .then(() => {
          // 校验成功
          emit('submit', { ...state.form })
        })
        .catch((error: any) => {
          console.log(error)
        })
    }

    return {
      ...toRefs(state),
      formRef,
      resetForm,
      submitForm
    }
  }
})
</script>
<style lang="scss" scoped>
.userForm {
  padding: 0.3rem 0.2rem 0.1rem 0.1rem;
  .user-form-title {
    text-align: center;
    color: #ffffff;
    font-size: '微软雅黑';
  }
  .user-form-button {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 25%;
  }
}
</style>
