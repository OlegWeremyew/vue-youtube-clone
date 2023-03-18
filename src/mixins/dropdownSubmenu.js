import DropdownSettingsHeader
  from "../components/TheHeader/TheDropdownSettings/DropdownSettingsHeader/DropdownSettingsHeader.vue";
import DropDownSettingsListItem
  from "../components/TheHeader/TheDropdownSettings/DropDownSettingsListItem/DropDownSettingsListItem.vue";

export default {
  components: {
    DropdownSettingsHeader,
    DropDownSettingsListItem
  },
  data: () => ({
    optionName: null,
  }),
  emits: ['close', 'select-option'],
  props: {
    selectedOptions: Object,
  },
  methods: {
    selectedOption(option) {
      this.$emit('select-option', {
        name: this.optionName,
        value: option,
      })
    },
  },
}
