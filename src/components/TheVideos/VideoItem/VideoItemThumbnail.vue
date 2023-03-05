<template>
  <div class="relative">
    <img :src="`https://picsum.photos/seed/image${index}/720/404`">
    <span
        class="opacity-0 group-hover:opacity-100 bg-opacity-60 absolute top-0 right-0 bg-black text-white rounded-sm m-1 p-1"
    >
      <base-icon name="clock" class="w-5 h-5"></base-icon>
    </span>
    <span
        class="opacity-0 group-hover:opacity-100 bg-opacity-60 absolute top-8 right-0 bg-black text-white rounded-sm m-1 p-1"
    >
      <base-icon class="w-5 h-5" name="menuAlt3"></base-icon>
    </span>
    <span
        class="opacity-100 group-hover:opacity-0 duration-500 absolute bottom-0 right-0 bg-black text-white rounded-sm m-1 p-1 text-xs font-semibold">6:35</span>
  </div>
</template>

<script>
import BaseIcon from "../../Common/BaseIcon.vue";

export default {
  name: "VideoItemThumbnail",
  components: {BaseIcon},
  props: ['index']
}
</script>

<style scoped>

</style>