import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Home from './page.tsx'
 
describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)
    const home = screen.getByTestId('main-layout')
    expect(home).toBeInTheDocument()
  })
})