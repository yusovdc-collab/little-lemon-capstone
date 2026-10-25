import { useEffect, useState } from "react";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import BookingPage from "./components/BookingPage";
import ConfirmedBooking from "./components/ConfirmedBooking";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [booking, setBooking] = useState(null);
  const [resetCount, setResetCount] = useState(0);

  useEffect(() => {
    if (resetCount > 0) {
      document.getElementById("booking-date")?.focus();
    }
  }, [resetCount]);

  function handleBooking(details) {
    setBooking(details);
  }

  function handleReset() {
    setBooking(null);
    setResetCount((count) => count + 1);
  }

  return (
    <div className="app">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <Header />

      <main id="main-content">
        <Homepage />

        {booking ? (
          <ConfirmedBooking
            booking={booking}
            onReset={handleReset}
          />
        ) : (
          <BookingPage onBooking={handleBooking} />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;