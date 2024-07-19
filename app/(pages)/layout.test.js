import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import RootLayout from './layout.tsx'
 
describe('Home', () => {
  it('renders a RootLayout', () => {
    render(<RootLayout />)
    const home = screen.getByTestId('main-Layout')
    expect(home).toBeInTheDocument()
  })
})