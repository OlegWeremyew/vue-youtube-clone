import {render, screen} from '@testing-library/vue';
import BaseTooltip from "./BaseTooltip.vue";
import userEvent from '@testing-library/user-event'

const user = userEvent.setup()

const text = "Tooltip text"
const buttonLabel = 'Click Me'
const button = `<button>${buttonLabel}</button>`

function renderTooltip(text, element = '') {
  const options = {
    props: {
      text,
    },
    slots: {
      default: element,
    },
  }

  return render(BaseTooltip, options)
}

function getOwningElement() {
  return screen.getByText(buttonLabel).parentElement
}

function hoverOverOwningElement() {
  return user.hover(getOwningElement())
}

function moveCursorAwayFromOwningElement() {
  return user.unhover(getOwningElement())
}

function clickOwningElement() {

  return user.click(getOwningElement())
}

function assertTooltipHidden() {
  return expect(screen.getByText(text)).not.toBeVisible()
}

function assertTooltipShown() {
  return expect(screen.getByText(text)).toBeVisible()
}

describe('rendering', () => {
  it('render hidden with specified text', () => {
    renderTooltip(text)

    assertTooltipHidden()
  })

  it('render with owning element', () => {
    renderTooltip('', button)

    expect(screen.getByText(buttonLabel)).toBeVisible()
  })
})


describe('showing', () => {
  it('shoes after hovering over owning element', async () => {
    renderTooltip(text, button)

    await hoverOverOwningElement()

    assertTooltipShown()
  })
})

describe('hiding', () => {

  beforeEach(async () => {
    renderTooltip(text, button)

    await hoverOverOwningElement()
    assertTooltipShown()
  })

  it('hides afret moving cursor away from owning element', async () => {
    await moveCursorAwayFromOwningElement()

    assertTooltipHidden()
  })

  it('hides after clicking owning element', async () => {
    await clickOwningElement()

    assertTooltipHidden()
  })
})