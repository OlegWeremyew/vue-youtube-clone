import {render, screen} from '@testing-library/vue';
import BaseCheckbox from "./BaseCheckbox.vue";

it('renders with label and checked', () => {
  const label = "Test Label"
  const option = {
    props: {
      id: "checkbox",
    },
    slots: {
      default: label,
    },
  }

  render(BaseCheckbox, option)

  expect(screen.getByLabelText(label)).not.toBeChecked()
})

it('renders unchecked', () => {
  render(BaseCheckbox)

  expect(screen.getByRole('checkbox')).not.toBeChecked()
})
