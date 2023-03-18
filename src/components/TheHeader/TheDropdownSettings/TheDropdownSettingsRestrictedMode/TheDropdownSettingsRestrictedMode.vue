<template>
  <DropdownSettingsHeader
      title="Choose Your location"
      @back="$emit('close')"
  />
  <section class="px-3 py-4 text-black text-sm space-y-4">
    <p>
      This helps hide potentially mature videos. No filter is 100% accurate.
    </p>
    <p>
      This setting only applies to this browser
    </p>
    <div class="text-gray-600 font-semibold flex items-center">
      <span class="uppercase mr-2">Activate restricted mode</span>
      <input
          type="checkbox"
          :checked="selectedOptions.restrictedMode.enabled"
          @input="selectedOption"
      >
    </div>
  </section>
</template>

<script>

import DropDownSettingsListItem from "../DropDownSettingsListItem/DropDownSettingsListItem.vue";
import DropdownSettingsHeader from "../DropdownSettingsHeader/DropdownSettingsHeader.vue";

export default {
  name: 'TheDropdownSettingsRestrictedMode',
  components: {
    DropdownSettingsHeader,
    DropDownSettingsListItem
  },
  props: {
    selectedOptions: Object,
  },
  emits: ['close', 'select-option'],
  methods: {
    selectedOption($event) {
      const enabled = $event.target.checked
      const value = {enabled, text : enabled ? 'On' : 'Off'}

      this.$emit('select-option', {
        name: 'restrictedMode',
        value,
      })
    },
  },
}
</script>
