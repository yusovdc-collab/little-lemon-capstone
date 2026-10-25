import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "../components/Header";

describe("Header", () => {
  it("displays the restaurant name", () => {
    render(<Header />);

    expect(screen.getByText(/little lemon/i)).toBeInTheDocument();
  });

  it("displays the navigation links", () => {
    render(<Header />);

    expect(screen.getByRole("link", { name: "Home" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "About" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Menu" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Reservations" })).toBeInTheDocument();
  });
});