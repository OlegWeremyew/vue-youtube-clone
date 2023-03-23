import {render, screen} from '@testing-library/vue';
import BaseButton from "./BaseButton.vue";

it('renders with label', () => {

  const option = {
    slots: {
      default: "Test Button",
    },
  }

  render(BaseButton, option)

  expect(screen.getByText(/Test Button/i).innerHTML).toBeTruthy()
})
