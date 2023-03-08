<template>
  <div class="flex items-start mt-3">
    <img :src="`https://picsum.photos/seed/avatar${index}/68`" class="mr-3 rounded-full w-9 h-9" alt="">
    <div class="text-sm">
      <span class="font-semibold text-gray-800">Video title {{index}}</span>
      <div class="mt-1 flex items-center">
        <span>Channel name {{index}}</span>
        <base-icon name="checkCircle" class="w-3.5 h-3.5 ml-1"></base-icon>
      </div>
      <div>
        <span v-html="summary"></span>
      </div>
    </div>
    <button
        class="-mt-1 ml-auto p-1 opacity-0 group-hover:opacity-100 text-gray-500 hover:text-gray-700 focus:outline-none">
      <base-icon name="dotsVertical"></base-icon>
    </button>
  </div>
</template>

<script>
import BaseIcon from "../../Common/BaseIcon.vue";

export default {
  name: "VideoItemInfo",
  props: ['index'],
  components: {BaseIcon},
  computed: {
    summary(){
      const days = this.index === 1 ? 'day' : 'days'
      return `${this.index} 1K views &middot; ${this.index} ${days} ago`
    }
  }
}
</script>

<style scoped>

</style>