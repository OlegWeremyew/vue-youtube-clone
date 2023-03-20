<template>
  <button type="button" :class="classes">
    <slot/>
  </button>
</template>

<script>
export default {
  name: "BaseButton",
  computed: {
    classes() {
      return [
        'uppercase',
        'text-sm',
        'font-medium',
        'tracking-wider',
        'py-2.5',
        'px-4',
        'focus:outline-none',
      ]
    },
  },
}
</script>
