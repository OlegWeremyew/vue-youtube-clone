<template>
  <div class="relative w-full">
    <input
        type="text"
        placeholder="Search"
        ref="input"
        :class="classes"
        :value="query"
        @input="updateQuery($event.target.value)"
        @focus="setState(true)"
        @click.stop="setState(true)"
        @keyup.esc="handleEsc"
        @keydown.enter="handleEnter"
    />
    <button
        type="button"
        class="absolute h-full top-0 right-0 px-3 focus:outline-none"
        v-show="query"
        @click="clear"
    >
      <BaseIcon name="x" class="w-5 h-5"/>
    </button>
  </div>
</template>

<script>
import BaseIcon from "@/components/Common/BaseIcon/BaseIcon.vue";

export default {
  name: "TheSearchInput",
  components: {BaseIcon},
  isActive: false,
  props: ['query', 'hasResults'],
  emits: ['update:query', 'change-state', 'enter'],
  inject: ['isMobileSearchActive'],
  computed: {
    classes() {
      return [
        'w-full',
        'h-full',
        'px-3',
        'shadow-inner',
        'rounded-bl-sm',
        'rounded-tl-sm',
        'border border-gray-300',
        'focus:border-blue-700',
        'focus:outline-none',
      ]
    },
  },
  mounted() {
    if (window.innerWidth < 640) {
      this.$refs.input.focus()
    }

    document.addEventListener('keydown', this.onKeydown)
  },
  methods: {
    onKeydown(event) {
      const isInputFocused = this.$refs.input === document.activeElement

      if (event.code === 'Slash' && !isInputFocused) {
        event.preventDefault()
        this.$refs.input.focus()
      }
    },
    updateQuery(query) {
      this.$emit('update:query', query)
      this.setState(this.isActive)
    },
    setState(isActive) {
      this.isActive = isActive
      this.$emit('change-state', isActive)
    },
    handleEsc() {
      this.removeSelection()

      if (this.isActive && this.hasResults) {
        this.setState(false)
      } else {
        this.$refs.input.blur()
      }
    },
    handleEnter() {
      this.setState(false)
      this.$refs.input.blur()
      this.$emit('enter')
    },
    removeSelection() {
      const end = this.$refs.input.value.length

      this.$refs.input.setSelectionRange(end, end)
    },
    clear() {
      this.$refs.input.focus()
      this.updateQuery('')
    },
  },
  watch: {
    'isMobileSearchActive.value'(isMobileSearchActive) {
      if (isMobileSearchActive) {
        this.$nextTick(() => {
          this.$refs.input.focus()
        })
      }
    },
  },
}
</script>
