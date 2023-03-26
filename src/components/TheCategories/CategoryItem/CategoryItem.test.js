import {render, screen} from '@testing-library/vue';
import CategoryItem from "./CategoryItem.vue";

const category = 'Category'

function renderCategoryItem(isActive = false) {
  const options = {
    props: {
      category,
      isActive,
    },
  }
  return render(CategoryItem, options)
}

it('renders with label', () => {
  renderCategoryItem()

  expect(screen.getByText(category)).not.toHaveClass('bg-gray-600 hover:bg-gray-500 text-white')
})

it('renders active', () => {
  renderCategoryItem(true)

  expect(screen.getByText(category)).toHaveClass('bg-gray-600 hover:bg-gray-500 text-white')
})

it('renders correctly', () => {
  const {html} = renderCategoryItem()

  expect(html()).toMatchSnapshot()
})