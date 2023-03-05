<template>
  <header class="flex justify-between fixed z-30 w-full">
    <div class="lg:w-1/4 flex">
      <div class="flex items-center xl:w-64 xl:bg-white pl-4">
        <button class="mr-3 sm:ml-2 sm:mr-6 focus:outline-none">
          <base-icon name="menu"></base-icon>
        </button>
        <logo-main></logo-main>
      </div>
    </div>
    <div
        class="hidden sm:flex items-center justify-end p-2.5 pl-8 md:pl-12 md:px-8 flex-1 lg:px-0 lg:w-1/2 max-w-screen-md"
    >
      <the-search></the-search>
      <button class="ml-4 focus:outline-none">
        <base-icon name="microphone" class="w-5 h-5"></base-icon>
      </button>
    </div>
    <div
        class="flex items-center justify-end lg:w-1/4 sm:space-x-3 p-2 sm:px-4"
    >
      <button class="sm:hidden p-2 focus:outline-none">
        <base-icon name="microphone" class="w-5 h-5"></base-icon>
      </button>
      <button class="sm:hidden p-2 focus:outline-none">
        <base-icon name="search" class="w-5 h-5"></base-icon>
      </button>
      <button class="relative group p-2 focus:outline-none">
        <base-icon name="viewGrid" class="h-5 w-5"></base-icon>
<!--        <the-drop-down-apps></the-drop-down-apps>-->
      </button>
      <button class="relative group p-2 focus:outline-none">
        <base-icon name="dotsVertical" class="h-5 w-5"></base-icon>
<!--        <the-dropdown-settings></the-dropdown-settings>-->
      </button>
      <button-login></button-login>
    </div>
  </header>
</template>
<script>
import TheDropDownApps from "./TheDropDownApps/TheDropDownApps.vue";
import TheDropdownSettings from "./TheDropdownSettings/TheDropdownSettings.vue";
import LogoMain from "./LogoMain.vue";
import TheSearch from "./TheSearch/TheSearch.vue";
import ButtonLogin from "../Common/ButtonLogin.vue";
import BaseIcon from "../Common/BaseIcon.vue";

export default {
  components: {BaseIcon, ButtonLogin, TheSearch, LogoMain, TheDropdownSettings, TheDropDownApps}
}
</script>