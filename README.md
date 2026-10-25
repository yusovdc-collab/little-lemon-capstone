
# Little Lemon Restaurant — React Capstone

A responsive restaurant web application built with React,
JavaScript, HTML, and CSS for the Meta Front-End Developer
Capstone project.

## Project Overview

Little Lemon is a fictional Mediterranean restaurant in
Chicago. This application provides a responsive restaurant
homepage and an interactive table reservation experience.

## Features

- Responsive homepage and navigation
- Restaurant information and specials section
- Table reservation form
- Date and time selection
- Guest count and occasion selection
- Form validation and error messages
- Reservation confirmation screen
- Keyboard navigation and accessible form labels
- Automated tests using Vitest and React Testing Library

## Technologies Used

- React
- JavaScript (JSX)
- HTML5
- CSS3
- Vite
- Vitest
- React Testing Library

## Installation

### Prerequisites

Install Node.js and npm.

### Clone the repository

```bash
git clone https://github.com/YOUR-USERNAME/little-lemon-capstone.git
cd little-lemon-capstone
```

Replace YOUR-USERNAME with the actual GitHub username.

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Open the local URL displayed by Vite in your browser.

## Running Tests

To run the automated unit tests:

```bash
npm test
```

The test suite covers:

- Header and navigation rendering
- Reservation form rendering
- Required booking fields
- Successful booking submission
- Invalid guest counts
- Missing reservation dates and times
- Past-date validation
- Invalid occasions

## Production Build

To create a production build:

```bash
npm run build
```

The production files will be generated in the dist folder.

To preview the production build:

```bash
npm run preview
```

## How to Use

1. Open the Little Lemon homepage.
2. Select "Reserve a Table".
3. Choose a reservation date.
4. Select a time.
5. Enter the number of guests.
6. Choose an occasion, if applicable.
7. Submit the reservation form.
8. Review the confirmation details.

## Important Notice

This is an educational front-end demonstration.

The reservation times are sample options. The application
does not connect to a restaurant's live booking system,
persist reservations in a database, or create real bookings.

## Accessibility

The application includes semantic HTML, keyboard-accessible
form controls, descriptive labels, visible focus indicators,
and validation feedback.

## Project Structure

```text
src/
  components/
    Header.jsx
    Nav.jsx
    Homepage.jsx
    BookingPage.jsx
    BookingForm.jsx
    ConfirmedBooking.jsx
    Footer.jsx
  tests/
    BookingForm.test.jsx
    BookingValidation.test.jsx
    Header.test.jsx
    setup.js
  App.jsx
  App.css
  index.css
  main.jsx
```

## Course

Meta Front-End Developer Capstone — Coursera

## License

Created for educational purposes.
```
