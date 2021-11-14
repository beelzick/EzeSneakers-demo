import { render, screen } from '@testing-library/react'
import FavoritesIcon from '../src/components/Layout/Navbar/NavIcons/FavoritesIcon'

test('if user not logged in fav button disabled', () => {
    const status = 'unauthenticated'
    render(<FavoritesIcon status={status} favQty={5} />)
    expect(screen.getByTestId('favorites-icon-button')).toBeDisabled()
})