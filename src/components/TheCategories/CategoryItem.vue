<template>
  <a
      href="#"
      :class="classes"
  >
    {{ category }}
  </a>
</template>

<script>
export default {
  name: "CategoryItem",
  props: {
    category: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      required: true,
    }
  },
  computed: {
    classes() {
      const classes = ['px-3', 'py-1', 'transition', 'rounded-full', 'border',]

      return this.isActive
          ? [
            'border-gray-700',
            ...classes,
            'bg-gray-600',
            'hover:bg-gray-500',
            'text-white'
          ]
          : [
            ...classes,
            'border-gray-300',
            'bg-gray-100',
            'hover:bg-gray-200'
          ]
    }
  }
}
</script>

<style scoped>

</style>