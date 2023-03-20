import {render, screen} from '@testing-library/vue';
import BaseCheckbox from "./BaseCheckbox.vue";

test('renders checked base checkbox with label', () => {

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

test('renders unchecked base checkbox', () => {

  render(BaseCheckbox)

  const checkbox = screen.getByRole('checkbox')

  expect(checkbox.checked).toBe(false)
})
