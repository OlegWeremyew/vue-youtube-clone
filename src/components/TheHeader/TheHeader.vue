<template>
  <header :class="classes">
    <div
        :class="[
        'lg:w-1/4',
        'flex',
        isMobileSearchShown ? 'opacity-0' : 'opacity-100'
      ]"
    >
      <div class="flex items-center xl:w-64 xl:bg-white pl-4">
        <button
            @click="$emit('toggleSidebar')"
            class="mr-3 sm:ml-2 sm:mr-6 focus:outline-none"
        >
          <BaseIcon name="menu"/>
        </button>
        <LogoMain/>
      </div>
    </div>
    <TheSearchWrapper
        v-show="isSearchShown"
        @close="closeMobileSearch"
        :is-small-screen="isSmallScreen"
    />
    <div
        :class="[
        'flex',
        'items-center',
        'justify-end',
        'lg:w-1/4',
        'sm:space-x-3',
        'p-2',
        'sm:px-4',
        isMobileSearchShown ? 'opacity-0' : 'opacity-100'
      ]"
    >
      <BaseTooltip text="Search with your voice">
        <button class="sm:hidden p-2 focus:outline-none">
          <BaseIcon name="microphone" class="w-5 h-5"/>
        </button>
      </BaseTooltip>
      <BaseTooltip text="Search">
        <button
            @click.stop="isMobileSearchActive = true"
            class="sm:hidden p-2 focus:outline-none"
        >
          <BaseIcon name="search" class="w-5 h-5"/>
        </button>
      </BaseTooltip>
      <TheDropdownApps/>
      <TheDropdownSettings/>
      <ButtonLogin/>
    </div>
  </header>
</template>

<script>

import BaseIcon from "../Common/BaseIcon.vue";
import BaseTooltip from "../Common/BaseTooltip.vue";
import ButtonLogin from "../Common/ButtonLogin.vue";
import LogoMain from "./LogoMain/LogoMain.vue";
import TheDropdownSettings from "./TheDropdownSettings/TheDropdownSettings.vue";
import TheDropDownApps from "./TheDropDownApps/TheDropDownApps.vue";
import TheSearchWrapper from "./TheSearch/TheSearchWrapper/TheSearchWrapper.vue";

export default {
  name: 'TheHeader',
  components: {
    TheDropDownApps,
    BaseIcon,
    BaseTooltip,
    LogoMain,
    ButtonLogin,
    TheDropdownSettings,
    TheSearchWrapper
  },

  emits: {
    toggleSidebar: null
  },

  data() {
    return {
      isSmallScreen: false,
      isMobileSearchActive: false,
      classes: [
        'flex',
        'justify-between',
        'w-full',
        'bg-white',
        'bg-opacity-95'
      ]
    }
  },

  computed: {
    isMobileSearchShown() {
      return this.isSmallScreen && this.isMobileSearchActive
    },
    isSearchShown() {
      return this.isMobileSearchShown || !this.isSmallScreen
    },
  },

  mounted() {
    this.onResize()

    window.addEventListener('resize', this.onResize)
  },

  methods: {
    onResize() {
      if (window.innerWidth < 640) {
        this.isSmallScreen = true
        return
      }

      this.closeMobileSearch()
      this.isSmallScreen = false
    },

    closeMobileSearch() {
      this.isMobileSearchActive = false
    }
  },
}
</script>
