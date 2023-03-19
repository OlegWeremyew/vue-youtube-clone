<template>
  <header :class="classes">
    <div :class="leftSideClass">
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
        :is-small-screen="isSmallScreen"
        @close="closeMobileSearch"
        @open-voice-modal="isVoiceModalOpen = true"
    />
    <div :class="rightSideClass">
      <BaseTooltip text="Search with your voice">
        <button
            type="button"
            class="sm:hidden p-2 focus:outline-none"
            @click="isVoiceModalOpen = true"
        >
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
      <TheDropdownSettings/>
      <TheDropdownApps/>
      <ButtonLogin/>
    </div>
  </header>

  <teleport to="body">
    <TheModalSearchWithVoice
        v-if="isVoiceModalOpen"
        @close="isVoiceModalOpen = false"
    />
  </teleport>
</template>

<script>
import {computed} from "vue";
import BaseIcon from "../Common/BaseIcon.vue";
import BaseTooltip from "../Common/BaseTooltip.vue";
import ButtonLogin from "../Common/ButtonLogin.vue";
import LogoMain from "./LogoMain/LogoMain.vue";
import TheDropdownSettings from "./TheDropdownSettings/TheDropdownSettings.vue";
import TheSearchWrapper from "./TheSearch/TheSearchWrapper/TheSearchWrapper.vue";
import TheDropdownApps from "./TheDropdownApps/TheDropdownApps.vue";
import TheModalSearchWithVoice from "./TheModalSearchWithVoice/TheModalSearchWithVoice.vue";

export default {
  name: 'TheHeader',
  components: {
    TheModalSearchWithVoice,
    BaseIcon,
    BaseTooltip,
    LogoMain,
    ButtonLogin,
    TheDropdownSettings,
    TheSearchWrapper,
    TheDropdownApps,
  },

  provide() {
    return {
      isMobileSearchActive: computed(() => this.isMobileSearchActive)
    }
  },

  emits: {
    toggleSidebar: null
  },

  data() {
    return {
      isVoiceModalOpen: false,
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
    opacity() {
      return this.isMobileSearchShown ? 'opacity-0' : 'opacity-100'
    },
    leftSideClass() {
      return ['lg:w-1/4', 'flex', this.opacity,]
    },
    rightSideClass() {
      return [
        'flex',
        'items-center',
        'justify-end',
        'lg:w-1/4',
        'sm:space-x-3',
        'p-2',
        'sm:px-4',
        this.opacity,
      ]
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
