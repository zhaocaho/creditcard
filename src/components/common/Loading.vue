<template>
  <section class="Loading" v-if="loading">
    <a-spin :spinning="loading" size="large" class="spin"> </a-spin>
  </section>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'Loading',
  setup() {
    // 引用vuex
    const store = useStore()
    return {
      loading: computed(() => store.state.loading)
    }
  }
})
</script>

<style lang="scss" scoped>
.Loading {
  width: 100%;
  height: 100vh;
  z-index: 99;
  background-color: #e6f7ff;
  opacity: 0.6;
  position: relative;
  .spin {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
}
</style>
