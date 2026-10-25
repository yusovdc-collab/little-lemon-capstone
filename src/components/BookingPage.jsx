import BookingForm from "./BookingForm";

function BookingPage({ onBooking }) {
  return (
    <section className="section booking-section" id="reservations">
      <div className="booking-container">
        <div>
          <p className="eyebrow">BOOK A TABLE</p>
          <h2>Reserve Your Table</h2>
          <p>
            Enjoy Mediterranean cuisine at Little Lemon.
            Select your preferred date, time, and number of guests.
          </p>
          <p className="demo-note">
            Demo reservation form. Submissions are not sent
            to a restaurant.
          </p>
        </div>

        <BookingForm onSubmit={onBooking} />
      </div>
    </section>
  );
}

export default BookingPage;