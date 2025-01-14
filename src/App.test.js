import { render, screen } from '@testing-library/react';
import App from './App';
import Booking from './Components/Pages/Booking';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });



test('Renders the BookingForm heading', () => {
    render(<Booking />);
    const headingText = screen.getByText("Make a Table Reservation");
    expect(headingText).toBeInTheDocument();
})


