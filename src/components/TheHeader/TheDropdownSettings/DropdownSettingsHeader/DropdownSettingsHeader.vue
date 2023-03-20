<template>
  <section class="flex border-b border-gray-200 text-black">
    <button
        type="button"
        class="px-3 focus:outline-none"
        @click.stop="$emit('back')"
    >
      <BaseIcon name="arrowLeft"/>
    </button>
    <span class="py-3">{{title}}</span>
  </section>
</template>

<script>
import BaseIcon from "../../../Common/BaseIcon/BaseIcon.vue";

export default {
  name: "TheDropdownSettingsHeader",
  components: {BaseIcon},
  props: ['title'],
  emits: ['back'],
}
</script>