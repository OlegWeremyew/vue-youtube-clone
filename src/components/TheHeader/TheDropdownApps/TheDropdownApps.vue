<template>
  <div class="relative">
    <BaseTooltip text="YouTube Aps">
    <button
        @click="isOpen = !isOpen"
        type="button"
        class="relative p-2 focus:outline-none"
    >
      <BaseIcon name="viewGrid" class="h-5 w-5"/>
    </button>
    </BaseTooltip>

    <transition
        enter-active-class="transition ease-out duration-100"
        enter-from-class="transition opacity-0 scale-95"
        enter-to-class="transform ease-in scale-100"
        leave-active-class="transition ease-in duration-75"
        leave-from-class="transform opacity-100 scale-100"
        leave-to-class="transform opacity-0 scale-95"
    >
      <div
          v-show="isOpen"
          ref="dropdown"
          tabindex="-1"
          @keydown.esc="isOpen = false"
          :class="dropdownClasses"
      >
        <section class="py-2 border-b">
          <ul>
            <DropDownsListItem label="YouTube TV"/>
          </ul>
        </section>
        <section class="py-2 border-b">
          <ul>
            <DropDownsListItem label="YouTube Music TV"/>
            <DropDownsListItem label="YouTube Kids"/>
          </ul>
        </section>
        <section class="py-2">
          <ul>
            <DropDownsListItem label="Creator Academy"/>
            <DropDownsListItem label="YouTube for Artists"/>
          </ul>
        </section>
      </div>
    </transition>
  </div>
</template>

<script>
import BaseIcon from "../../Common/BaseIcon/BaseIcon.vue";
import DropDownsListItem from "./DropDownsListItem.vue";
import BaseTooltip from "../../Common/BaseTooltip/BaseTooltip.vue";

export default {
  name: "TheDropdownApps",
  data: () => ({
    isOpen: false
  }),
  components: {
    BaseTooltip,
    DropDownsListItem,
    BaseIcon,
  },
  computed: {
    dropdownClasses(){
      return [
        'z-10',
        'absolute',
        'top-9',
        'right-0',
        'sm:left-0',
        'bg-white',
        'w-60',
        'border',
        'border-t-0',
        'focus:outline-none',
      ]
    }
  },
  mounted() {
    window.addEventListener('click', ({target}) => {
      if (!this.$el.contains(target)) {
        this.isOpen = false
      }
    })
  },
  watch: {
    isOpen() {
      this.$nextTick(() => {
        if (this.isOpen) {
          this.$refs.dropdown.focus()
        }
      })
    },
  }
}
</script>

<style scoped>

</style>