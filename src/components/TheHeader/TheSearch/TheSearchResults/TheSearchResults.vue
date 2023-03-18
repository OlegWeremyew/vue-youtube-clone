<template>
  <div :class="classes">
    <ul>
      <li
          v-for="result in results"
          :key="result"
          :class="itemClasses"
      >
        {{ result }}
      </li>
    </ul>
    <a
        href="#"
        :class="reportLinkClasses"
    >
      Report search predictions
    </a>
  </div>
</template>

<script>
export default {
  name: "TheSearchResults",
  props: ['results'],
  computed: {
    classes() {
      return [
        'absolute',
        'top-full',
        'w-full',
        'bg-white',
        'border',
        'border-t-0',
        'border-gray-300',
        'shadow-md pt-4',
      ]
    },
    itemClasses() {
      return [
        'hover:bg-gray-100',
        'text-black',
        'px-3',
        'py-1',
        'select-none',
        'truncate',
      ]
    },
    reportLinkClasses() {
      return [
        'w-full',
        'inline-block',
        'text-right',
        'text-xs',
        'italic',
        'text-gray-500',
        'hover:text-black',
        'pr-2',
      ]
    },
  },
}
</script>
