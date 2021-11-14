import { render, screen } from '@testing-library/react'
import FavoritesBtn from '../src/components/Layout/Navbar/NavIcons/FavoritesBtn'

test('if favorites number matches', () => {
    const favQty = 5
    render(<FavoritesBtn favQty={favQty} />)
    expect(screen.getByText(favQty)).toBeVisible()
})