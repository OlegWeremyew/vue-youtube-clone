import {render, screen, waitForElementToBeRemoved} from '@testing-library/vue';
import BaseModal from "./BaseModal.vue";
import {icons} from "../../../constants/icons";
import userEvent from '@testing-library/user-event'

const user = userEvent.setup()

const body = 'This is body'

function renderModal(body = "", footer = "", withCloseButton = false) {
  const option = {
    slots: {
      default: body,
      footer,
    },
    props: {
      withCloseButton,
    },
  }

  return render(BaseModal, option)
}

async function assertModalClosed(body) {
  return await waitForElementToBeRemoved([
    screen.queryByText(body),
    screen.queryByTestId('base-modal-overlay'),
  ])
}

describe('rendering', () => {
  it('renders with body and footer', () => {
    const footer = 'This is footer'
    renderModal(body, footer)

    screen.getByText(body)
    screen.getByText(footer)
  })

  it('renders with close button', () => {
    const withCloseButton = true
    renderModal("", "", withCloseButton)

    //expect(screen.getByTestId('base-icon').innerHTML).toBe(icons['x'])
    expect(screen.getByTestId('base-icon')).toContainHTML(icons['x'])
  })

  it('renders without close button', () => {
    const withCloseButton = false
    renderModal("", "", withCloseButton)

    //expect(screen.queryByTestId('base-icon')).toBeNull()
    expect(screen.queryByTestId('base-icon')).not.toBeInTheDocument()
  })
})

describe('closing', () => {
  it('close when clicking close button', () => {
    const withCloseButton = true
    renderModal(body, '', withCloseButton)

    user.click(screen.getByTestId('base-modal-button-close'))

    return assertModalClosed(body)
  })

  it('close when clicking overlay', () => {
    renderModal(body)

    user.click(screen.getByTestId('base-modal-overlay'))

    return assertModalClosed(body)
  })

  it('close when clicking cancel button', () => {
    const footer = `
        <template #footer="{close}">
          <button @click="close">Cancel</button>
        </template>
        `
    renderModal(body, footer)

    user.click(screen.getByRole('button', {
      name: 'Cancel',
    }))

    return assertModalClosed(body)
  })

  it('close when pressing qsc key', () => {
    renderModal(body)

    screen.getByRole('dialog').focus()

    user.keyboard('{Escape}')

    return assertModalClosed(body)
  })
})

