import { useEffect, useRef } from "react";

function ConfirmedBooking({ booking, onReset }) {
  const headingRef = useRef(null);

  useEffect(() => {
    if (booking) {
      headingRef.current?.focus();
    }
  }, [booking]);

  if (!booking) return null;

  return (
    <section
      className="section confirmation-section"
      id="reservations"
      aria-labelledby="confirmation-title"
    >
      <div className="confirmation-card">
        <div className="confirmation-check" aria-hidden="true">
          ✓
        </div>

        <h2
          id="confirmation-title"
          ref={headingRef}
          tabIndex={-1}
        >
          Reservation Details Submitted!
        </h2>

        <p>
          Your demo reservation details have been submitted
          successfully.
        </p>

        <dl className="booking-summary">
          <dt>Date</dt>
          <dd>{booking.date}</dd>

          <dt>Time</dt>
          <dd>{booking.time}</dd>

          <dt>Guests</dt>
          <dd>{booking.guests}</dd>

          <dt>Occasion</dt>
          <dd>{booking.occasion}</dd>
        </dl>

        <p className="demo-note">
          This is a demonstration. No reservation has
          been sent to a real restaurant.
        </p>

        <button
          type="button"
          className="primary-button"
          onClick={onReset}
        >
          Make Another Reservation
        </button>
      </div>
    </section>
  );
}

export default ConfirmedBooking;