<template>
  <div :class="classes">
    <BaseTooltip
        v-if="isSmallScreen"
        text="Back"
        right
    >
      <button
          type="button"
          class="mr-2 p-2 focus:outline-none"
          @click="$emit('close')"
      >
        <BaseIcon name="arrowLeft" class="w-5 h-5"/>
      </button>
    </BaseTooltip>

    <TheSearch/>

    <BaseTooltip text="Search with your voice" :left="isSmallScreen">
      <button
          type="button"
          class="p-2 focus:outline-none"
          @click="$emit('open-voice-modal')"
      >
        <BaseIcon name="microphone" class="w-5 h-5"/>
      </button>
    </BaseTooltip>

  </div>
</template>

<script>
import BaseIcon from "@/components/Common/BaseIcon/BaseIcon.vue";
import BaseTooltip from "@/components/Common/BaseTooltip/BaseTooltip.vue";
import TheSearch from "../TheSearch.vue";

export default {
  name: 'TheSearchWrapper',
  emits: ['close', 'open-voice-modal'],
  components: {
    BaseIcon,
    BaseTooltip,
    TheSearch
  },
  props: ['isSmallScreen'],
  computed: {
    classes() {
      return this.isSmallScreen
          ? [
            'absolute',
            'w-full',
            'p-2',
            'z-10',
            'flex',
          ] : [
            'hidden',
            'sm:flex',
            'items-center',
            'justify-end',
            'p-2.5',
            'pl-8',
            'md:pl-12',
            'md:px-8',
            'flex-1',
            'lg:px-0',
            'lg:w-1/2',
            'max-w-screen-md'
          ]
    },
  },
  mounted() {
    window.addEventListener('click', this.onClick)
  },

  methods: {
    onClick(event) {
      if (!this.$el.contains(event.target)) {
        this.$emit('close')
      }
    }
  }
}
</script>
