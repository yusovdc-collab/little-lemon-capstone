import { useState } from "react";
import {
  availableTimes,
  getToday,
  validateBooking,
} from "../utils/bookingUtils";

function BookingForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: 2,
    occasion: "None",
  });

  const [errors, setErrors] = useState({});

  function updateField(event) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: undefined,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const validationErrors = validateBooking(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      const firstInvalid = Object.keys(validationErrors)[0];
      document.getElementById(`booking-${firstInvalid}`)?.focus();
      return;
    }

    onSubmit({
      ...formData,
      guests: Number(formData.guests),
    });
  }

  return (
    <form
      className="booking-form"
      onSubmit={handleSubmit}
      noValidate
      aria-label="Table reservation form"
    >
      <div className="form-group">
        <label htmlFor="booking-date">Choose date *</label>
        <input
          id="booking-date"
          name="date"
          type="date"
          min={getToday()}
          value={formData.date}
          onChange={updateField}
          aria-invalid={Boolean(errors.date)}
          aria-describedby={errors.date ? "date-error" : undefined}
          required
        />
        {errors.date && (
          <span id="date-error" className="form-error" role="alert">
            {errors.date}
          </span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="booking-time">Choose time *</label>
        <select
          id="booking-time"
          name="time"
          value={formData.time}
          onChange={updateField}
          aria-invalid={Boolean(errors.time)}
          aria-describedby={errors.time ? "time-error" : undefined}
          required
        >
          <option value="">Select a time</option>
          {availableTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
        {errors.time && (
          <span id="time-error" className="form-error" role="alert">
            {errors.time}
          </span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="booking-guests">
          Number of guests *
        </label>
        <input
          id="booking-guests"
          name="guests"
          type="number"
          min="1"
          max="10"
          step="1"
          value={formData.guests}
          onChange={updateField}
          aria-invalid={Boolean(errors.guests)}
          aria-describedby={errors.guests ? "guests-error" : undefined}
          required
        />
        {errors.guests && (
          <span id="guests-error" className="form-error" role="alert">
            {errors.guests}
          </span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="booking-occasion">Occasion</label>
        <select
          id="booking-occasion"
          name="occasion"
          value={formData.occasion}
          onChange={updateField}
          aria-invalid={Boolean(errors.occasion)}
          aria-describedby={
            errors.occasion ? "occasion-error" : undefined
          }
        >
          <option value="None">None</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
          <option value="Other">Other</option>
        </select>
        {errors.occasion && (
          <span
            id="occasion-error"
            className="form-error"
            role="alert"
          >
            {errors.occasion}
          </span>
        )}
      </div>

      <p className="required-note">* Required fields</p>

      <button type="submit" className="primary-button">
        Make Your Reservation
      </button>
    </form>
  );
}

export default BookingForm;