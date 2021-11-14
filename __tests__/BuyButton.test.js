import { screen } from '@testing-library/react'
import BuyButton from '../src/components/Cart/BuyButton'
import { render } from '../lib/test-utils'

test('if subtotal 0 button disabled', () => {
    render(<BuyButton subtotal={0} />)
    expect(screen.getByText(/buy/i)).toBeDisabled()
})

test('if subtotal not 0 button not disabled', () => {
    render(<BuyButton subtotal={10} />)
    expect(screen.getByText(/buy/i)).toBeEnabled()
})