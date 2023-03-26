import {screen, render, waitForElementToBeRemoved} from "@testing-library/vue";
import TheModalSearchPredictions from "./TheModalSearchPredictions.vue";
import userEvent from '@testing-library/user-event'

const user = userEvent.setup()

const predictions = ['Predictions 1', 'Predictions 2', 'Predictions 3',]
const categories = ['Category 1', 'Category 2', 'Category 3',]

function renderModal(searchPredictions, searchPredictionCategories) {
  const options = {
    props: {
      searchPredictions,
    },
    data: () => ({
      searchPredictionCategories,
    }),
  }

  return render(TheModalSearchPredictions, options)
}

describe('when open', () => {
  it('shows search predictions', () => {
    renderModal(predictions)

    predictions.forEach(screen.getByText)
  })

  it('shows search prediction category', () => {
    renderModal(categories)

    categories.forEach(screen.getByText)
  })
})

describe('when closed', () => {
  it('does not show search predictions', () => {
    renderModal(predictions)

    user.click(screen.getByRole('button', {
      name: 'Cancel',
    }))

    return waitForElementToBeRemoved(predictions.map(screen.queryByText))
  })

  it('does not show search prediction categories', () => {
    renderModal(categories)

    user.click(screen.getByRole('button', {
      name: 'Cancel',
    }))

    return waitForElementToBeRemoved(categories.map(screen.queryByText))
  })
})
