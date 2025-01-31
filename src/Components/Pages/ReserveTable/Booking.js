import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import BookingForm from "./BookingForm";
import { fetchAPI, submitAPI } from "./api";

function Booking() {
  const navigate = useNavigate();
  const [availableTimes, setAvailableTimes] = useState([]);

  // Fetch available times when the component mounts
  useEffect(() => {
    const fetchTimes = async () => {
      const times = await fetchAPI(new Date()); // Fetch times for today's date
      setAvailableTimes(times);
    };

    fetchTimes();
  }, []);

  // Fetch available times when the date changes
  const updateAvailableTimes = async (selectedDate) => {
    const times = await fetchAPI(new Date(selectedDate));
    setAvailableTimes(times);
  };

  // Submit form data to the API
  const submitForm = async (formData) => {
    try {
      const isSuccessful = await submitAPI(formData); // Submit the form data to the API
      if (isSuccessful) {
        // Navigate to the confirmation page upon success
        navigate("/confirmed-booking");
      } else {
        console.error("Failed to submit the booking");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="md:gap-7 w-3/4 my-10 mx-auto">
      <header className="border-b-2 border-yellow-200">
        <h1>Make a Table Reservation</h1>
      </header>
      <section className="md:grid grid-cols-1 md:grid-cols-12 gap-12 mt-8">
        {/* Booking Form Column (Left) */}
        <div className="md:col-span-6">
          <Formik
            initialValues={{
              date: "",
              time: "",
              guests: 2,
              occasion: "",
            }}
            validateOnBlur={false} // Disable validation on blur to prevent showing all errors immediately
            validateOnChange={false} // Disable validation on change to prevent showing all errors immediately
            validate={(values) => {
              const errors = {};
              if (!values.time) errors.time = "Select an available time";
              if (!values.date) {
                errors.date = "Date is required";
              } else if (new Date(values.date) <= new Date()) {
                errors.date = "Please choose a future date";
              }
              if (!values.guests || values.guests < 1 || values.guests > 15) {
                errors.guests = "Maximum guests allowed are 15";
              }
              if (!values.occasion) errors.occasion = "You haven't picked the occasion";
              return errors;
            }}
            onSubmit={async (values) => {
              await submitForm(values);
            }}
          >
            {({ values, handleChange, handleSubmit, errors, touched, setFieldValue }) => (
              <>
                <BookingForm
                  availableTimes={availableTimes}
                  handleChange={handleChange}
                  handleSubmit={handleSubmit}
                  formData={values} // values come from Formik's render props
                  formErrors={errors} // errors come from Formik's render props
                  touched={touched} // touched field tracking from Formik
                  updateAvailableTimes={updateAvailableTimes}
                  setFieldValue={setFieldValue} // Pass setFieldValue to handle custom changes
                />
                <div className="mt-4">
                  {Object.keys(errors).length > 0 && (
                    <ul className="text-red-500">
                      {Object.values(errors).map((error, index) => (
                        <li key={index}>{error}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </>
            )}
          </Formik>
        </div>
      </section>
    </div>
  );
}

export default Booking;
