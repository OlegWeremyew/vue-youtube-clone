<template>
  <transition
      appear
      enter-active-class="ease-out duration-200"
      enter-from-class="transition opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="ease-in duration-100"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
  >
    <div
        class="fixed inset-0 bg-black bg-opacity-80"
        data-testid="base-modal-overlay"
    />
  </transition>
</template>

<script lang="ts">
export default {
  name: "BaseModalOverlay",
}
</script>
