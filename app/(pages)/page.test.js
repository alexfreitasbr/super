import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Home from './page.tsx'
 
describe('Home', () => {
  it('renders a Homepage', () => {
    render(<Home />)
    const home = screen.getByTestId('main-page')
    expect(home).toBeInTheDocument()
  })
})