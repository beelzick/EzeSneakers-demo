import { render, screen } from '../lib/test-utils'
import SearchField from '../src/components/Layout/Navbar/Search/SearchField'
import userEvent from '@testing-library/user-event'

test('if user can open then close search dialog', async () => {
    render(<SearchField />)
    userEvent.click(screen.getByTestId('search-input'))
    const searchDialog = screen.getByRole('dialog')
    expect(searchDialog).toBeVisible()
    const closeIcon = screen.getByTestId('CloseIcon').closest('button')
    expect(closeIcon).toBeVisible()
    userEvent.click(closeIcon)
    expect(await searchDialog).not.toBeVisible()
})