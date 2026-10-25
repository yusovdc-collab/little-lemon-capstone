export const availableTimes = [
  "17:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
  "19:30",
  "20:00",
  "20:30",
  "21:00",
];

export function getToday() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export function validateBooking(booking) {
  const errors = {};
  const guests = Number(booking.guests);

  if (!booking.date) {
    errors.date = "Please choose a reservation date.";
  } else if (
    !/^\d{4}-\d{2}-\d{2}$/.test(booking.date) ||
    Number.isNaN(
      new Date(`${booking.date}T12:00:00`).getTime()
    ) ||
    new Date(`${booking.date}T12:00:00`)
      .getFullYear() !== Number(booking.date.slice(0, 4)) ||
    booking.date < getToday()
  ) {
    errors.date =
      "Please choose a valid date that is not in the past.";
  }

  if (!availableTimes.includes(booking.time)) {
    errors.time = "Please select an available time.";
  }

  if (
    booking.guests === "" ||
    !Number.isInteger(guests) ||
    guests < 1 ||
    guests > 10
  ) {
    errors.guests = "Please enter between 1 and 10 guests.";
  }

  if (
    !["None", "Birthday", "Anniversary", "Other"]
      .includes(booking.occasion)
  ) {
    errors.occasion = "Please select a valid occasion.";
  }

  return errors;
}