import {render, screen} from '@testing-library/vue';
import DropDownsListItem from "./DropDownsListItem.vue";

const label = "Label"

function renderListItem() {
  const options = {
    props: {
      label,
    },
  }
  return render(DropDownsListItem, options)
}

it('renders with label', () => {
  renderListItem()

  screen.getByText(label)
})

it('renders correctly', () => {
  const {html} = renderListItem()

  expect(html()).toMatchSnapshot()
})
