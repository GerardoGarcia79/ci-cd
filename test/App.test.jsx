import { render, screen } from "@testing-library/react";
import App from "../src/App";

describe("App", () => {
  it('should render the heading', () => {
    render(<App />);
    const heading = screen.getByText(/3.0/i);
    expect(heading).toBeInTheDocument();
  })
});

