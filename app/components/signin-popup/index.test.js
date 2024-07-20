import { render, screen } from '@testing-library/react';
import { SigninPopup } from './index';

describe('SigninPopup', () => {
  it('should have a heading with appropriate ARIA attributes', () => {
    render(<SigninPopup />);
    const heading = screen.getByRole('heading', { name: /Cadastre-se na plataforma/i });
    expect(heading).toBeInTheDocument();
  });

  it('should have form elements with appropriate ARIA attributes', () => {
    render(<SigninPopup />);
    const inputs = screen.getAllByRole('textbox');
    expect(inputs).toHaveLength(2);
    const passwordInputs = screen.getAllByLabelText(/senha/i);
    expect(passwordInputs).toHaveLength(2);
    const submitButton = screen.getByRole('button', { name: /registrar/i });
    expect(submitButton).toBeInTheDocument();
    const linkButton = screen.getByRole('link', { name: /já possui conta\?/i });
    expect(linkButton).toBeInTheDocument();
  });

  it('should have form elements with appropriate labels', () => {
    render(<SigninPopup />);
    const nameLabel = screen.getByLabelText(/nome/i);
    expect(nameLabel).toBeInTheDocument();
    const userLabel = screen.getByLabelText(/user/i);
    expect(userLabel).toBeInTheDocument();
    const passwordLabel = screen.getByLabelText(/senha/i);
    expect(passwordLabel).toBeInTheDocument();
    const confirmPasswordLabel = screen.getByLabelText(/repeatir senha/i);
    expect(confirmPasswordLabel).toBeInTheDocument();
  });

  it('should have form elements with appropriate tooltips', () => {
    render(<SigninPopup />);
    const nameInput = screen.getByLabelText(/nome/i);
    expect(nameInput).toHaveAttribute('title', 'Seu nome como quiser');
    const userInput = screen.getByLabelText(/user/i);
    expect(userInput).toHaveAttribute('title', 'Email será usado para login');
    const passwordInput = screen.getByLabelText(/senha/i);
    expect(passwordInput).toHaveAttribute('title', 'Mínimo de 8 caracteres, letras, números e caracter especial');
  });

  it('should have form elements with appropriate required attributes', () => {
    render(<SigninPopup />);
    const nameInput = screen.getByLabelText(/nome/i);
    expect(nameInput).toBeRequired();
    const userInput = screen.getByLabelText(/user/i);
    expect(userInput).toBeRequired();
    const passwordInputs = screen.getAllByLabelText(/senha/i);
    passwordInputs.forEach((input) => expect(input).toBeRequired());
  });
});