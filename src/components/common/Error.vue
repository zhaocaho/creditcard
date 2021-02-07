<template>
  <section class="Error">
    <a-result :status="status" class="Error-result" :subTitle="title">
      <slot />
    </a-result>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Error',
  props: {
    // 组件状态
    status: {
      type: String,
      required: true
    },
    // 标题信息
    title: String
  }
})
</script>

<style lang="scss" scoped>
@import '~@/assets/css/common.scss';
.Error {
  width: 100%;
  height: 100vh;
  background-color: #ffffff;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
  .Error-result {
    @include center();
  }
}
</style>
