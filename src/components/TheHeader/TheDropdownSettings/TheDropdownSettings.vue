<template>
  <div
      class="opacity-0 group-hover:opacity-100 absolute top-9 -right-full sm:right-0 bg-white w-72 border border-t-0"
  >
    <section class="py-2 border-b">
      <ul>
        <drop-down-settings-list-item
            v-for="listItem in ListItems.slice(0,8)"
            :key="listItem.label"
            :icon="listItem.icon"
            :label="listItem.label"
            :with-sub-menu="listItem.withSubMenu"
        ></drop-down-settings-list-item>

      </ul>
    </section>
    <section class="py-2">
      <ul>
        <drop-down-settings-list-item
            :label="ListItems[8].label"
            with-sub-menu
        ></drop-down-settings-list-item>
      </ul>
    </section>
  </div>
</template>

<script>
import BaseIcon from "../../Common/BaseIcon.vue";
import DropDownSettingsListItem from "./DropDownSettingsListItem.vue";

export default {
  name: "TheDropdownSettings",
  components: {DropDownSettingsListItem, BaseIcon},
  data: () => ({
    ListItems: [
      {label: 'Appearance: Light', icon: 'sun', withSubMenu: true},
      {label: 'Language: English', icon: 'translate', withSubMenu: true},
      {label: 'Location: Ukraine', icon: 'globeAlt', withSubMenu: true},
      {label: 'Settings', icon: 'cog', withSubMenu: false},
      {label: 'Your data in YouTube', icon: 'shieldCheck', withSubMenu: false},
      {label: 'Help', icon: 'questionMarkCircle', withSubMenu: false},
      {label: 'Send feedback', icon: 'chatAlt', withSubMenu: false},
      {label: 'Keyboard shortcuts', icon: 'calculator', withSubMenu: false},
      {label: 'Restricted Mode: Off', icon: null, withSubMenu: true},
    ]
  })
}
</script>

<style scoped>

</style>