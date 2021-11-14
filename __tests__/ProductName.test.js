import ProductName from '../src/components/ProductCard/ProductName';
import { render, screen } from '@testing-library/react'

test('if user can see product name', () => {
    const name = 'Adidas MC Vulc 600'
    render(<ProductName id='61689ee6967aadc0a7566f49' name={name} />)
    expect(screen.getByRole('heading', { name })).toBeVisible()
})