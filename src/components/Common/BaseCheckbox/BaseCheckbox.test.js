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

  const checkbox = screen.getByLabelText(label)

  expect(checkbox.checked).toBe(false)
})

it('renders unchecked', () => {
  render(BaseCheckbox)

  const checkbox = screen.getByRole('checkbox')

  expect(checkbox.checked).toBe(false)
})
