<template>
  <div class="relative">
    <BaseTooltip text="Settings">
      <button @click="isOpen = !isOpen" class="relative p-2 focus:outline-none">
        <BaseIcon name="dotsVertical" class="w-5 h-5" />
      </button>
    </BaseTooltip>
    <transition
        enter-active-class="transition ease-out duration-100"
        enter-from-class="transition opacity-0 scale-95"
        enter-to-class="transform opacity-100 scale-100"
        leave-active-class="transition ease-in duration-75"
        leave-from-class="transform opacity-100 scale-100"
        leave-to-class="transform opacity-0 scale-95"
    >
      <div
          v-show="isOpen"
          ref="dropdown"
          @keydown.esc="isOpen = false"
          tabindex="-1"
          :class="dropdownClasses"
      >
        <TheDropdownSettingsMain
            v-if="selectedMenu === 'main'"
            @select-menu="showSelectedMenu"
        />
        <TheDropdownSettingsAppearance
            v-else-if="selectedMenu === 'appearance'"
            @select-menu="showSelectedMenu"
        />
      </div>
    </transition>
  </div>
</template>

<script>

import BaseIcon from "../../Common/BaseIcon.vue";
import BaseTooltip from "../../Common/BaseTooltip.vue";
import TheDropdownSettingsMain from "./TheDropdownSettingsMain/TheDropdownSettingsMain.vue";
import TheDropdownSettingsAppearance from "./TheDropdownSettingsAppearance/TheDropdownSettingsAppearance.vue";

export default {
  components: {
    BaseIcon,
    BaseTooltip,
    TheDropdownSettingsMain,
    TheDropdownSettingsAppearance
  },

  data () {
    return {
      isOpen: false,
      selectedMenu: 'main',
      dropdownClasses: [
        'z-10',
        'absolute',
        'top-9',
        '-right-full',
        'sm:right-0',
        'bg-white',
        'w-72',
        'border',
        'border-t-0',
        'focus:outline-none'
      ]
    }
  },

  watch: {
    isOpen () {
      this.$nextTick(() => this.isOpen && this.$refs.dropdown.focus())
    }
  },

  mounted () {
    window.addEventListener('click', event => {
      if (!this.$el.contains(event.target)) {
        this.isOpen = false
      }
    })
  },

  methods: {
    showSelectedMenu (selectedMenu) {
      this.selectedMenu = selectedMenu
    }
  }
}
</script>
