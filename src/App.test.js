import { render, screen } from '@testing-library/react';
import Booking from './Components/Pages/ReserveTable/Booking';
// import { initializeTimes } from './Components/Pages/ReserveTable/Booking'; // Import the function to test


// Test for the heading text in the Booking form
test('Correct Booking Form heading', () => {
    render(<Booking />);
    const headingText = screen.getByText("Make a Table Reservation");
    expect(headingText).toBeInTheDocument();
});


// Test for initializeTimes function
// describe('initializeTimes', () => {
//   it('should return the correct initial available times', () => {
//     // Expected list of available times
//     const expectedTimes = [
//       '5:00 PM',
//       '5:30 PM',
//       '6:00 PM',
//       '6:30 PM',
//       '7:00 PM',
//       '7:30 PM',
//       '8:00 PM',
//       '9:00 PM',
//       '10:00 PM',
//       '11:00 PM',
//     ];

//     // Call the initializeTimes function to get the result
//     const result = initializeTimes();

//     // Assert that the result matches the expected array
//     expect(result).toEqual(expectedTimes);
//   });
// });