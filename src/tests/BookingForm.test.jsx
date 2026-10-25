import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "../components/BookingForm";

function getFutureDate() {
  const date = new Date();
  date.setDate(date.getDate() + 2);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

describe("BookingForm", () => {
  it("renders all reservation fields", () => {
    render(<BookingForm onSubmit={vi.fn()} />);

    expect(screen.getByLabelText(/choose date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/choose time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /make your reservation/i })
    ).toBeInTheDocument();
  });

  it("does not submit an incomplete reservation", () => {
    const handleSubmit = vi.fn();

    render(<BookingForm onSubmit={handleSubmit} />);

    fireEvent.click(
      screen.getByRole("button", { name: /make your reservation/i })
    );

    expect(handleSubmit).not.toHaveBeenCalled();
  });

  it("submits valid reservation details", () => {
    const handleSubmit = vi.fn();
    const date = getFutureDate();

    render(<BookingForm onSubmit={handleSubmit} />);

    fireEvent.change(screen.getByLabelText(/choose date/i), {
      target: { value: date },
    });

    fireEvent.change(screen.getByLabelText(/choose time/i), {
      target: { value: "18:00" },
    });

    fireEvent.change(screen.getByLabelText(/number of guests/i), {
      target: { value: "4" },
    });

    fireEvent.change(screen.getByLabelText(/occasion/i), {
      target: { value: "Birthday" },
    });

    fireEvent.click(
      screen.getByRole("button", { name: /make your reservation/i })
    );

    expect(handleSubmit).toHaveBeenCalledWith({
      date,
      time: "18:00",
      guests: 4,
      occasion: "Birthday",
    });
  });

  it("rejects an invalid guest count", () => {
    const handleSubmit = vi.fn();

    render(<BookingForm onSubmit={handleSubmit} />);

    const guests = screen.getByLabelText(/number of guests/i);

    fireEvent.change(guests, {
      target: { value: "11" },
    });

    fireEvent.click(
      screen.getByRole("button", { name: /make your reservation/i })
    );

    expect(handleSubmit).not.toHaveBeenCalled();
  });
});