import UserAccountButton from '../src/components/Layout/Navbar/RightSideMenu/UserAccountButton'
import { render, screen } from '@testing-library/react'

test('if user logged in account icon visible', () => {
    render(<UserAccountButton status='authenticated' />)
    expect(screen.getByRole('button', { name: /account of current user/i })).toBeVisible()
})

test('if user not logged in account icon not visible', () => {
    render(<UserAccountButton status='unauthenticated' />)
    expect(screen.queryByRole('button', { name: /account of current user/i })).not.toBeInTheDocument()
})