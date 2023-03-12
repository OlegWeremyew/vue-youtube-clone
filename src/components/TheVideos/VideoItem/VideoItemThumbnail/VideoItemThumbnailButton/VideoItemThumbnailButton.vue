<template>
    <span
        :class="classes"
        @mouseenter="toggleBadge"
        @mouseleave="toggleBadge"
    >
      <BaseIcon :name="icon" class="w-5 h-5"/>
      <span :class="badgeClasses">
        <span class="inline-block my-1.5 mx-3">{{label}}</span>
      </span>
    </span>
</template>

<script>
import BaseIcon from "../../../../Common/BaseIcon.vue";

export default {
  name: "VideoItemThumbnailButton",
  data: () => ({
    isBadgeShow: false
  }),
  props: {
    icon: String,
    label: String,
  },
  components: {BaseIcon},
  computed: {
    classes() {
      return [
        'opacity-0',
        'group-hover:opacity-100',
        'bg-opacity-60',
        'absolute',
        'right-0',
        'bg-black',
        'text-white',
        'm-1',
        'p-1',
        this.isBadgeShow
            ? 'rounded-r-sm'
            : 'rounded-sm',
      ]
    },
    badgeClasses() {
      return [
        'absolute',
        'transition-width',
        'bg-black bg-opacity-60',
        'whitespace-nowrap',
        'top-0',
        'right-full',
        'overflow-hidden',
        'uppercase text-xs',
        'delay-100',
        'font-semibold',
        'rounded-l-sm',
        this.isBadgeShow
            ? 'w-28'
            : 'w-0',
      ]
    }
  },
  methods: {
    toggleBadge() {
      this.isBadgeShow = !this.isBadgeShow
    }
  }
}
</script>

<style scoped>

</style>