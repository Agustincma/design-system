import { render, screen } from "@testing-library/react";
import { Card } from "./Card";

describe("Card component", () => {
  it("renders with title", () => {
    render(<Card title="My Card" />);
    expect(screen.getByText("My Card")).toBeInTheDocument();
  });

  it("renders description when provided", () => {
    render(<Card title="My Card" description="Card description" />);
    expect(screen.getByText("Card description")).toBeInTheDocument();
  });
});
