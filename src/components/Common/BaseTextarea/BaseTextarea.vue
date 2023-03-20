<template>
  <div class="relative">
    <textarea
        ref="textarea"
        v-bind="$attrs"
        :value="value"
        :maxlength="limit"
        @input="adjustHeight"
        placeholder="Provide additional details (optional)"
        class="border pt-2 pb-6 px-2 resize-none rounded-sm w-full focus:outline-none overflow-hidden peer"
    />
    <BaseTextareaCounter>
      {{ counter }}
    </BaseTextareaCounter>
  </div>

</template>

<script>
import BaseTextareaCounter from "../BaseTextareaCounter/BaseTextareaCounter.vue";

export default {
  name: "BaseTextarea",
  components: {BaseTextareaCounter},
  props: {
    value: String,
    limit: Number,
  },
  emits: ['set-value'],
  computed: {
    counter() {
      return `${this.value.length}/${this.limit}`
    },
  },
  methods: {
    adjustHeight({target}) {
      this.$emit('set-value', target.value.trim())
      this.setTextareaHeight()
    },
    setTextareaHeight() {
      const textarea = this.$refs.textarea

      textarea.style.height = 'auto'
      textarea.style.height = `${textarea.scrollHeight}px`
    },
  },
  mounted() {
    this.setTextareaHeight()
  },
}
</script>
