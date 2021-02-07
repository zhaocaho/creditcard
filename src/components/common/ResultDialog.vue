<template>
  <section class="ResultDialog">
    <a-result :status="status" class="ResultDialog-result" :subTitle="title">
      <a-button
        v-if="status === 'error' && isExist === true"
        type="danger"
        @click="show = false"
        >确认</a-button
      >
      <a-button
        v-if="status === 'error' && isExist === false"
        type="primary"
        @click="a"
        >去注册</a-button
      >
    </a-result>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref, toRefs } from 'vue'

export default defineComponent({
  name: 'ResultDialog',
  props: {
    // 组件状态
    status: {
      type: String,
      required: true
    },
    // 展示信息
    title: {
      type: String,
      required: true
    }
  },
  setup(props) {
    // 计算属性----判断用户是否存在
    const isExist = computed(() => {
      // 判断展示内容title是否是不存在用户
      if (props.title.indexOf('不存在') === -1) {
        // 不存在
        return true
      } else {
        // 用户存在
        return false
      }
    })

    const a = () => {
      console.log('去注册')
    }

    return {
      //   ...toRefs(dialogObj)
      isExist,
      a
    }
  }
})
</script>

<style lang="scss" scoped>
@import '~@/assets/css/common.scss';
.ResultDialog {
  width: 100%;
  height: 100vh;
  background-color: #ffffff;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
  .ResultDialog-result {
    @include center();
  }
}
</style>
