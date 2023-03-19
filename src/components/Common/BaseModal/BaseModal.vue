<template>
  <div
      :class="classes"
      tabindex="-1"
      @keydown.esc="close"
  >
    <BaseModalOverlay
        v-if="isOpen"
        @click="close"
    />

    <div
        v-if="isOpen"
        class="bg-white w-2/3 m-8 relative"
    >
      <div class="p-2 text-right">
        <BaseModalButtonClose @click="close"/>
      </div>

      <div class="p-6">
        <slot/>
      </div>
    </div>
  </div>
</template>

<script>
import BaseModalButtonClose from "./BaseModalButtonClose/BaseModalButtonClose.vue";
import BaseModalOverlay from "./BaseModalOverlay/BaseModalOverlay.vue";

export default {
  name: "BaseModal",
  data: () => ({
    isOpen: true,
    classes: [
      'fixed',
      'inset-0',
      'z-30',
      'flex',
      'justify-center',
      'items-start'
    ],
  }),
  emits: ['close'],
  components: {BaseModalOverlay, BaseModalButtonClose},
  methods: {
    close() {
      this.isOpen = false

      setTimeout(() => {
        this.$emit('close')
      }, 100)
    },
  },
  mounted() {
    this.$el.focus()
  },
}
</script>
