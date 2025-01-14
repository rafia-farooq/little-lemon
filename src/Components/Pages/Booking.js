import { useState, useReducer } from "react";
import BookingForm from "./BookingForm";

// Reducer to manage availableTimes
const timesReducer = (state, action) => {
    switch (action.type) {
        case 'SET_TIMES':
            return action.times;
        default:
            return state;
    }
};


// Initialize times function to create the initial state
const initializeTimes = () => [
    '5:00 PM',
    '5:30 PM',
    '6:00 PM',
    '6:30 PM',
    '7:00 PM',
    '7:30 PM',
    '8:00 PM',
    '9:00 PM',
    '10:00 PM',
    '11:00 PM',
];

function Booking() {
    // State to manage form values and errors
    const [formData, setFormData] = useState({
        date: '',
        time: '',
        guests: 2,
        occasion: '',
    });

    // State to manage error messages
    const [formErrors, setFormErrors] = useState({
        time: '',
        date: '',
        guests: '',
        occasion: '',
    });

    // Reducer to manage availableTimes
    const [availableTimes, dispatch] = useReducer(timesReducer, [], initializeTimes);

    // Function to update available times based on selected date
    const updateAvailableTimes = (selectedDate) => {
        // Include the selected date in the dispatch
        // Placeholder logic: based on the date, we might update the available times differently
        const times = selectedDate ? [
            '5:00 PM',
            '5:30 PM',
            '6:00 PM',
            '6:30 PM',
            '7:00 PM',
            '7:30 PM',
            '8:00 PM',
            '8:30 PM',
            '9:00 PM',
            '9:30 PM',
            '10:00 PM',
            '10:30 PM',
            '11:00 PM',
        ] : [];
        // Dispatch the available times with the selected date (can use selectedDate for logic)
        dispatch({
            type: 'SET_TIMES',
            times,
            selectedDate,  // Include the date in the dispatch
        });
    };
    // Handle change for form elements
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

        // Clear the error when the user changes the value
        if (name === 'time' && value !== '') {
            setFormErrors((prevErrors) => ({
                ...prevErrors,
                time: '',
            }));
        }
        if (name === 'date' && value !== '') {
            setFormErrors((prevErrors) => ({
                ...prevErrors,
                date: '',
            }));
        }
        if (name === 'guests' && value !== '') {
            setFormErrors((prevErrors) => ({
                ...prevErrors,
                guests: '',
            }));
        }
        if (name === 'occasion' && value !== '') {
            setFormErrors((prevErrors) => ({
                ...prevErrors,
                occasion: '',
            }));
        }
    };

    // Form validation before submission
    const handleSubmit = (e) => {
        e.preventDefault();

        let errors = {};
        
        // Validate the "time" field
        if (!formData.time) {
            errors.time = 'Select an available time';
        }

        // Validate the "date" field (ensure it's a future date)
        if (!formData.date) {
            errors.date = 'Date is required';
        } else if (new Date(formData.date) <= new Date()) {
            errors.date = 'Please choose a future date';
        }

        // Validate the "guests" field
        if (!formData.guests || formData.guests < 1 || formData.guests > 15) {
            errors.guests = 'Maximum guests allowed are 15';
        }

        // Validate the "occasion" field
        if (!formData.occasion) {
            errors.occasion = "You haven't picked the occasion";
        }

        // If there are errors, set them
        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
        } else {
            // Form submission logic goes here
            console.log(formData);
        }
    };

    return (
        <>
            <div className="about md:gap-7 w-3/4 my-10 mx-auto">
                <header className="border-b-2 border-yellow-200">
                    <h1>Make a Table Reservation</h1>
                </header>
                <main className="md:grid grid-cols-1 md:grid-cols-12 gap-12 mt-8">
                    <div className="md:col-span-7">
                        <BookingForm
                            formData={formData}
                            formErrors={formErrors}
                            availableTimes={availableTimes}
                            handleChange={handleChange}
                            handleSubmit={handleSubmit}
                            updateAvailableTimes={updateAvailableTimes} // Pass the function down
                        />
                    </div>
                    <div className="md:col-span-5 mt-14 md:mt-0">
                        <h4 id="your-reservations" className="capitalize">
                            Your Reservations
                        </h4>
                        <p className="mt-5 text-[#9cab99]">
                            {formData.date && formData.time ? `Reservation on ${formData.date} at ${formData.time}` : "It's so empty here. Make a reservation."}
                        </p>
                    </div>
                </main>
            </div>
        </>
    );
}

export default Booking;
