import { render, screen } from "@testing-library/react";
import { Button } from "./index";

describe("Button component", () => {
  test("renders a primary button with default type and no style", () => {
    render(<Button label="Primary Button" />);
    const button = screen.getByTestId("action-btn");
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass(
      "w-full p-2 bg-slate-900 rounded-md border border-slate-800 text-base text-white bg-indigo-500 hover:bg-indigo-600 disabled:opacity-50 transition-all duration-400"
    );
    expect(button).toHaveAttribute("type", "button");
  });

  test("renders a secondary button with submit type", () => {
    render(<Button label="Secondary Button" type="submit" style="secondary" />);
    const button = screen.getByTestId("action-btn");
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass(
      "w-full p-2 bg-slate-900 rounded-md border border-slate-800 text-base text-white bg-gray-500 hover:bg-gray-600 disabled:opacity-50 transition-all duration-400"
    );
    expect(button).toHaveAttribute("type", "submit");
  });

  test("renders a disabled button with success style", () => {
    render(<Button label="Disabled Button" disabled style="success" />);
    const button = screen.getByTestId("action-btn");
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass(
      "w-full p-2 bg-slate-900 rounded-md border border-slate-800 text-base text-white bg-green-500 hover:bg-green-600 disabled:opacity-50 transition-all duration-400"
    );
    expect(button).toBeDisabled();
  });

  test("renders a link button with link style and href", () => {
    render(<Button label="Link Button" link="/example" style="link" />);
    const linkButton = screen.getByTestId("link-btn");
    expect(linkButton).toBeInTheDocument();
    expect(linkButton).toHaveClass(
      "w-full p-2 bg-slate-900 rounded-md border border-slate-800 text-base text-center text-blue-500 bg-white hover:bg-gray-300 disabled:opacity-50 transition-all duration-400"
    );
    expect(linkButton).toHaveAttribute("href", "/example");
  });

  test("renders a button with custom data-testid", () => {
    render(<Button label="Custom Button" data-testid="custom-btn" />);
    const customButton = screen.getByTestId("custom-btn");
    expect(customButton).toBeInTheDocument();
    expect(customButton).toHaveClass(
      "w-full p-2 bg-slate-900 rounded-md border border-slate-800 text-base text-white bg-indigo-500 hover:bg-indigo-600 disabled:opacity-50 transition-all duration-400"
    );
  });
});