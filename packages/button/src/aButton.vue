<template>
  <div
    class="openx-button"
    @click="clickHandler"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { hello } from '@demo-mui/shared';
const props = withDefaults(defineProps<{
    text?:string
}>(),{
    text: 'Cat'
})
function clickHandler() {
  hello(props.text);
}
</script>

<style lang="scss" scoped>
.openx-button {
  width: 300px;
  height: 80px;
  background: pink;
}
</style>