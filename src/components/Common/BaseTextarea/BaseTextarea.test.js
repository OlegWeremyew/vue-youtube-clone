import {render, screen} from '@testing-library/vue';
import BaseTextarea from "./BaseTextarea.vue";

function renderTextarea(text, limit) {
  const options = {
    props: {
      value: text,
      limit: limit,
    }
  }

  return render(BaseTextarea, options)
}

it('show prefilled', () => {
  const text = "Dummy text"

  renderTextarea(text)

  screen.getByDisplayValue(text)
})

it('show counter', () => {
  const text = "Dummy text"
  const limit = 100

  renderTextarea(text, limit)

  screen.getByText(`${text.length}/${limit}`)
})