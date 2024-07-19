import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import SigninPage from './page.tsx'
 
describe('Login', () => {
  it('renders SigninPage', () => {
    render(<SigninPage />)
    const page = screen.getByTestId('signin-page')
    expect(page).toBeInTheDocument()
  })
})