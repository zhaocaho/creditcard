<template>
  <div class="Login">
    <UserForm
      form-background-color="rgba(38, 33, 39, 0.7)"
      :formtype="['phone', 'password']"
      @submit="request"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import UserForm from '@/components/UserForm/UserForm.vue'
// ts接口
import { FormType } from '@/types/interface'
// 请求
import { userLogin } from '@/API/user'

export default defineComponent({
  name: 'Login',
  components: {
    UserForm
  },
  setup() {
    const router = useRouter()
    const store = useStore()

    // 改变loading状态
    const setLoadingStatus = (status: boolean) =>
      store.commit('setLoadingStatus', status)

    // 登录
    const request = async (val: FormType) => {
      setLoadingStatus(true)
      const result = await userLogin(val)
      console.log(result)
      // 关闭loading
      setLoadingStatus(false)
      // 设置登录后显示信息

      if (result.status === 200) {
        if (result.data.status === 200) {
          // 跳出成功弹出框

          const timer = setTimeout(() => {
            // 跳转到下一步
            router.push('/creditcard')
            clearTimeout(timer)
          }, 500)
        } else {
          // 当前用户不存在
          if (result.data.status === 202) {
          }
          // 跳出错误弹出框
        }
      } else {
        console.log('网络错误')
      }
    }

    return {
      request
    }
  }
})
</script>

<style lang="scss" scoped></style>
