import { render, screen } from '@testing-library/react';
import { LoginPopup } from './index';

describe('LoginPopup component', () => {
  test('renders the login popup with correct structure', () => {
    render(<LoginPopup />);

    const loginPopup = screen.getByTestId('login-popup');
    const title = screen.getByText('Entre com sua conta');
    const userInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Senha');
    const loginButton = screen.getByText('login');
    const registerLink = screen.getByText('Deseja se registar?');

    expect(loginPopup).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(userInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
    expect(registerLink).toBeInTheDocument();
  });

  test('displays error message when user input is empty', () => {
    render(<LoginPopup />);

    const userInput = screen.getByLabelText('Email');
    const loginButton = screen.getByText('login');

    fireEvent.change(userInput, { target: { value: '' } });
    fireEvent.click(loginButton);

    const errorMessage = screen.getByText('Email is required');
    expect(errorMessage).toBeInTheDocument();
  });

  test('displays error message when password input is empty', () => {
    render(<LoginPopup />);

    const passwordInput = screen.getByLabelText('Senha');
    const loginButton = screen.getByText('login');

    fireEvent.change(passwordInput, { target: { value: '' } });
    fireEvent.click(loginButton);

    const errorMessage = screen.getByText('Senha is required');
    expect(errorMessage).toBeInTheDocument();
  });

  test('navigates to signin page when register link is clicked', () => {
    render(<LoginPopup />);

    const registerLink = screen.getByText('Deseja se registar?');
    fireEvent.click(registerLink);

    expect(window.location.pathname).toBe('/signin');
  });

  test('submits form with valid inputs', () => {
    render(<LoginPopup />);

    const userInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Senha');
    const loginButton = screen.getByText('login');

    fireEvent.change(userInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'test123' } });
    fireEvent.click(loginButton);

    // Add your form submission logic here
    // For example, you can mock a login API call and assert the expected behavior
  });
});