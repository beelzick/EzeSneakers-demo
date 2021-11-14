import SizeError from '../src/components/ShowPage/SizesSelect/SizeError'
import { render, screen } from '@testing-library/react'

test('if error show error text', () => {
    render(<SizeError error={true} />)
    expect(screen.getByText('Choose size')).toBeVisible()
})