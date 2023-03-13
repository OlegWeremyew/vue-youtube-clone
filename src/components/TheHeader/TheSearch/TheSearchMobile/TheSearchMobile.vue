<template>
  <div class="absolute w-full p-2 z-10 flex">
    <BaseTooltip text="Back" right>
      <button
          @click="$emit('close')"
          type="button"
          class="mr-2 p-2 focus:outline-none"
      >
        <BaseIcon name="arrowLeft" class="w-5 h-5"/>
      </button>
    </BaseTooltip>

    <TheSearch/>

    <BaseTooltip text="Search with your voice" left>
      <button
          type="button"
          class="p-2 focus:outline-none"
      >
        <BaseIcon name="microphone" class="w-5 h-5"/>
      </button>
    </BaseTooltip>
  </div>
</template>

<script>

import BaseIcon from "../../../Common/BaseIcon.vue";
import BaseTooltip from "../../../Common/BaseTooltip.vue";
import TheSearch from "../TheSearch.vue";

export default {
  name: 'TheSearchMobile',
  components: {
    BaseIcon,
    BaseTooltip,
    TheSearch
  },
  emits: ['close'],
  methods: {
    onClick({target}) {
      if (!this.$el.contains(target)) {
        this.$emit('close')
      }
    }
  },
  mounted() {
    window.addEventListener('click', this.onClick)
  },
  beforeUnmount() {
    window.removeEventListener('click', this.onClick)
  }
}
</script>
