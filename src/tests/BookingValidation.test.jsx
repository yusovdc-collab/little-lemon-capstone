import { describe, it, expect } from "vitest";
import {
  validateBooking,
  getToday,
} from "../utils/bookingUtils";

const validBooking = {
  date: getToday(),
  time: "18:00",
  guests: 2,
  occasion: "None",
};

describe("Booking validation", () => {
  it("accepts valid booking details", () => {
    expect(validateBooking(validBooking)).toEqual({});
  });

  it("rejects missing dates", () => {
    const errors = validateBooking({
      ...validBooking,
      date: "",
    });

    expect(errors.date).toBeDefined();
  });

  it("rejects past dates", () => {
    const errors = validateBooking({
      ...validBooking,
      date: "2020-01-01",
    });

    expect(errors.date).toBeDefined();
  });

  it("rejects missing reservation times", () => {
    const errors = validateBooking({
      ...validBooking,
      time: "",
    });

    expect(errors.time).toBeDefined();
  });

  it("rejects invalid guest counts", () => {
    for (const guests of [0, 11, 2.5, ""]) {
      const errors = validateBooking({
        ...validBooking,
        guests,
      });

      expect(errors.guests).toBeDefined();
    }
  });

  it("rejects unknown occasions", () => {
    const errors = validateBooking({
      ...validBooking,
      occasion: "Invalid",
    });

    expect(errors.occasion).toBeDefined();
  });
});