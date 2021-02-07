<template>
  <div class="Home">
    <transition
      enter-active-class="animate__animated animate__fadeIn"
      leave-active-class="animate__animated animate__fadeIn"
    >
      <!-- 失活的组件将会被缓存！-->
      <keep-alive>
        <component class="Home-component" :is="currentComponent"></component>
      </keep-alive>
    </transition>
    <!-- 加载 -->
    <Loading />
    <Result-dialog
      v-if="true"
      :status="'error'"
      :title="'当前用户不存在'"
    ></Result-dialog>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import Login from '@/views/Home/component/Login.vue'
import Loading from '@/components/common/Loading.vue'
import ResultDialog from '@/components/common/ResultDialog.vue'

export default defineComponent({
  name: 'Home',
  components: {
    Login,
    Loading,
    ResultDialog
  },
  setup() {
    const currentComponent = ref('')
    currentComponent.value = 'Login'
    return {
      currentComponent
    }
  }
})
</script>
<style lang="scss" scoped>
.Home {
  // 样式中引用@地址，需要加上~
  background: url('~@/assets/images/moneyBg.jpg') no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 100vh;
  .Home-component {
    border-radius: 20px;
    position: fixed;
    width: 90%;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
    overflow: hidden;
  }
}
</style>
