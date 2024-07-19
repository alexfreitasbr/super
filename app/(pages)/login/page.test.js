import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import LoginPage from './page.tsx'
 
describe('Login', () => {
  it('renders LoginPage', () => {
    render(<LoginPage />)
    const page = screen.getByTestId('login-page')
    expect(page).toBeInTheDocument()
  })
})