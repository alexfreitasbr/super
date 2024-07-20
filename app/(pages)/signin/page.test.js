import { render, screen } from "@testing-library/react";
import SigninPage from "./index";

jest.mock("@/app/components/signin-popup", () => ({
  SigninPopup: () => <div data-testid="mocked-signin-popup" />
}));

describe("SigninPage", () => {
  it("renders the SigninPage component", () => {
    render(<SigninPage />);
    expect(screen.getByTestId("signin-page")).toBeInTheDocument();
  });

  it("renders the SigninPopup component", () => {
    render(<SigninPage />);
    expect(screen.getByTestId("mocked-signin-popup")).toBeInTheDocument();
  });

  it("matches the snapshot", () => {
    const { asFragment } = render(<SigninPage />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("has the correct className", () => {
    render(<SigninPage />);
    expect(screen.getByTestId("signin-page")).toHaveClass(
      "flex min-h-screen flex-col items-center justify-between p-24"
    );
  });

  it("has the correct data-testid", () => {
    render(<SigninPage />);
    expect(screen.getByTestId("signin-page")).toHaveAttribute(
      "data-testid",
      "signin-page"
    );
  });
});