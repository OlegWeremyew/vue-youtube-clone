import {render, screen} from '@testing-library/vue';
import BaseButton from "./BaseButton.vue";

test('renders base button', () => {

  //given (arrange)
  const option = {
    slots: {
      default: "Test Button",
    },
  }

  //when (act)
  render(BaseButton, option)

  //then (assert)
  expect(screen.getByText(/Test Button/i).innerHTML).toBeTruthy()
})
