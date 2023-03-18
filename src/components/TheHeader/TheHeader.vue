<template>
  <header :class="classes">
    <div :class="[
        'lg:w-1/4',
         'flex',
         isMobileSearchShow ? 'opacity-0' : 'opacity-100'
         ]">
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

    <TheSearchMobile v-if="isMobileSearchShow" @close="closeMobileSearch"/>

    <div
        class="hidden sm:flex items-center justify-end p-2.5 pl-8 md:pl-12 md:px-8 flex-1 lg:px-0 lg:w-1/2 max-w-screen-md"
        v-else
    >
      <TheSearch/>

      <BaseTooltip text="Search with your voice">
        <button class="p-2 focus:outline-none">
          <BaseIcon name="microphone" class="w-5 h-5"/>
        </button>
      </BaseTooltip>
    </div>

    <div
        :class="[
        'flex',
        'items-center',
        'justify-end',
         'lg:w-1/4',
         'sm:space-x-3',
         'p-2',
         'sm:px-4',
         isMobileSearchShow ? 'opacity-0' : 'opacity-100',
         ]"
    >
      <BaseTooltip text="Search with your voice">
        <button class="sm:hidden p-2 focus:outline-none">
          <BaseIcon name="microphone" class="w-5 h-5"/>
        </button>
      </BaseTooltip>

      <BaseTooltip text="Search">
        <button
            type="button"
            @click.stop="isMobileSearchActive = true"
            class="sm:hidden p-2 focus:outline-none"
        >
          <BaseIcon name="search" class="w-5 h-5"/>
        </button>
      </BaseTooltip>

      <TheDropDownApps/>
      <TheDropdownSettings/>
      <ButtonLogin/>
    </div>
  </header>
</template>

<script>
import BaseIcon from "../Common/BaseIcon.vue";
import BaseTooltip from "../Common/BaseTooltip.vue";
import LogoMain from "./LogoMain/LogoMain.vue";
import ButtonLogin from "../Common/ButtonLogin.vue";
import TheSearch from "./TheSearch/TheSearch.vue";
import TheSearchMobile from "./TheSearch/TheSearchMobile/TheSearchMobile.vue";
import TheDropdownSettings from "./TheDropdownSettings/TheDropdownSettings.vue";
import TheDropDownApps from "./TheDropDownApps/TheDropDownApps.vue";

export default {
  components: {
    TheDropDownApps,
    BaseIcon,
    BaseTooltip,
    LogoMain,
    ButtonLogin,
    TheSearch,
    TheSearchMobile,
    TheDropdownSettings
  },
  data: () => ({
    isSmallScreen: false,
    isMobileSearchActive: false,
  }),
  emits: {
    toggleSidebar: null
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
  computed: {
    isMobileSearchShow() {
      return this.isSmallScreen && this.isMobileSearchActive
    },
    classes() {
      return ['flex', 'justify-between', 'w-full', 'bg-white', 'bg-opacity-95']
    }
  },
  mounted() {
    this.onResize()
    window.addEventListener('resize', this.onResize)
  }
}
</script>
