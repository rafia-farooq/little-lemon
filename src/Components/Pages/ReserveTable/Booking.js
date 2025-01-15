import { useState, useReducer, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BookingForm from "./BookingForm";
import { fetchAPI, submitAPI } from "./api";

// Reducer to manage availableTimes
const timesReducer = (state, action) => {
    switch (action.type) {
        case 'SET_TIMES':
            return action.times;
        default:
            return state;
    }
};

// Fetch available times
const fetchAvailableTimes = async (date) => {
    return await fetchAPI(new Date(date));
};

function Booking() {
    const navigate = useNavigate();

    // State management
    const [formData, setFormData] = useState({
        date: '',
        time: '',
        guests: 2,
        occasion: '',
    });

    const [formErrors, setFormErrors] = useState({
        time: '',
        date: '',
        guests: '',
        occasion: '',
    });

    const [availableTimes, dispatch] = useReducer(timesReducer, []);

    // Fetch available times on mount
    useEffect(() => {
        const fetchTimes = async () => {
            const times = await fetchAvailableTimes(new Date());  // Fetch times for today's date
            dispatch({ type: 'SET_TIMES', times });
        };

        fetchTimes();
    }, []);

    // Update available times when the date is changed
    const updateAvailableTimes = async (selectedDate) => {
        const times = await fetchAvailableTimes(selectedDate);
        dispatch({ type: 'SET_TIMES', times });
    };

    // Handle form changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

        // Clear error for the specific field if value changes
        if (value !== '') {
            setFormErrors((prevErrors) => ({
                ...prevErrors,
                [name]: '',
            }));
        }

        // If the date changes, update available times
        if (name === 'date') {
            updateAvailableTimes(value);
        }
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        let errors = {};

        if (!formData.time) {
            errors.time = 'Select an available time';
        }

        if (!formData.date) {
            errors.date = 'Date is required';
        } else if (new Date(formData.date) <= new Date()) {
            errors.date = 'Please choose a future date';
        }

        if (!formData.guests || formData.guests < 1 || formData.guests > 15) {
            errors.guests = 'Maximum guests allowed are 15';
        }

        if (!formData.occasion) {
            errors.occasion = "You haven't picked the occasion";
        }

        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
        } else {
            await submitForm(formData);
        }
    };

    // Submit form data to the API
    const submitForm = async (formData) => {
        try {
            const isSuccessful = await submitAPI(formData);  // Submit the form data to the API
            if (isSuccessful) {
                // Navigate to the confirmation page upon success
                navigate('/confirmed-booking');
            } else {
                console.error('Failed to submit the booking');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
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
                    />
                </div>
                <div className="md:col-span-5 mt-14 md:mt-0">
                    <h4 id="your-reservations" className="capitalize">Your Reservations</h4>
                    <p className="mt-5 text-[#9cab99]">
                        {formData.date && formData.time
                            ? `Reservation on ${formData.date} at ${formData.time}`
                            : "It's so empty here. Make a reservation."}
                    </p>
                </div>
            </main>
        </div>
    );
}

export default Booking;
