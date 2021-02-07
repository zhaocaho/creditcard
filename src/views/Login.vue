<template>
  <div class="Login">
    <transition
      enter-active-class="animate__animated animate__fadeIn"
      leave-active-class="animate__animated animate__fadeIn"
    >
      <UserForm
        v-if="loginShow"
        form-background-color="rgba(38, 33, 39, 0.7)"
        :formtype="['phone', 'password']"
        @submit="request"
      />
    </transition>
    <!-- 加载 -->
    <Loading />
    <!-- 完成后弹窗 -->
    <Error v-if="show" :status="status" :title="msg">
      <a-button
        v-if="status === 'error' && isExist === true"
        type="danger"
        @click="show = false"
        >确认</a-button
      >
      <a-button
        v-if="status === 'error' && isExist === false"
        type="primary"
        @click="goRegister"
        >去注册</a-button
      >
    </Error>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, reactive, ref, toRefs } from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'
import UserForm from '@/components/UserForm/UserForm.vue'
import Loading from '@/components/common/Loading.vue'
import Error from '@/components/common/Error.vue'
// ts接口
import { FormType } from '@/types/interface'
// 请求
import { userLogin } from '@/API/user'

export default defineComponent({
  name: 'Login',
  components: {
    UserForm,
    Loading,
    Error
  },
  setup() {
    const router = useRouter()
    const route = useRoute()
    const store = useStore()

    // 改变loading状态
    const setLoadingStatus = (status: boolean) =>
      store.commit('setLoadingStatus', status)

    // 登录结果状态
    const resultObj = reactive({
      msg: '' as string,
      show: false as boolean,
      status: 'success' as string,
      isExist: true as boolean
    })

    // 登录
    const request = async (val: FormType) => {
      setLoadingStatus(true)
      const result = await userLogin(val)
      console.log(result)
      // 关闭loading
      setLoadingStatus(false)
      // 设置登录后信息
      resultObj.msg = result.data.data.msg
      if (result.status === 200) {
        if (result.data.status === 200) {
          // 跳出成功弹出框
          resultObj.status = 'success'
          resultObj.show = true
          const timer = setTimeout(() => {
            // 跳转到下一步
            router.push('/creditcard')
            clearTimeout(timer)
          }, 500)
        } else {
          // 当前用户不存在
          if (result.data.status === 202) {
            resultObj.isExist = false
          }
          // 跳出错误弹出框
          resultObj.status = 'error'
          resultObj.show = true
        }
      } else {
        console.log('网络错误')
      }
    }

    // 控制登录组件的值
    const loginShow = ref(false)
    return {
      request,
      ...toRefs(resultObj),
      goRegister: () => router.push('/home/register'),
      loginShow
    }
  }
})
</script>
<style lang="scss" scoped>
.Login {
  // 样式中引用@地址，需要加上~
  background: url('~@/assets/images/moneyBg.jpg') no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 100vh;
  .userForm {
    border-radius: 20px;
    position: fixed;
    width: 90%;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
