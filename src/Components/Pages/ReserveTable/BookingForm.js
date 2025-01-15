function BookingForm({
    formData,
    formErrors,
    availableTimes,
    handleChange,
    handleSubmit,
    updateAvailableTimes,
}) {
    const handleDateChange = (e) => {
        const selectedDate = e.target.value;
        handleChange(e);  // Update form data with the selected date
        updateAvailableTimes(selectedDate);  // Update available times based on the new date
    };

    // InputField component to DRY up code for similar input structures
    const InputField = ({ id, label, type, value, onChange, error, min, max, options }) => (
        <div className="space-y-2">
            <label htmlFor={id} className="block text-sm font-semibold text-gray-700">
                {label}
            </label>
            {type === 'select' ? (
                <select
                    id={id}
                    name={id}
                    value={value}
                    onChange={onChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-yellow-300"
                    aria-required="true"
                    aria-invalid={error ? 'true' : 'false'}
                    aria-describedby={`${id}-error`}
                >
                    <option value="">Select from the available options</option>
                    {options.map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            ) : (
                <input
                    type={type}
                    id={id}
                    name={id}
                    value={value}
                    onChange={onChange}
                    min={min}
                    max={max}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-yellow-300"
                    aria-required="true"
                    aria-invalid={error ? 'true' : 'false'}
                    aria-describedby={`${id}-error`}
                />
            )}
            {error && (
                <span id={`${id}-error`} className="text-red-500 text-sm">
                    {error}
                </span>
            )}
        </div>
    );

    return (
        <form className="space-y-6 max-w-lg mx-auto" onSubmit={handleSubmit}>
            {/* Date Field */}
            <InputField
                id="date"
                label="Date"
                type="date"
                value={formData.date}
                onChange={handleDateChange}
                error={formErrors.date}
                updateAvailableTimes={updateAvailableTimes}
            />

            {/* Time Field */}
            <InputField
                id="time"
                label="Time"
                type="select"
                value={formData.time}
                onChange={handleChange}
                error={formErrors.time}
                options={availableTimes}
            />

            {/* Guests Field */}
            <InputField
                id="guests"
                label="Number of Guests"
                type="number"
                value={formData.guests}
                onChange={handleChange}
                error={formErrors.guests}
                min="1"
                max="15"
            />

            {/* Occasion Field */}
            <InputField
                id="occasion"
                label="Occasion"
                type="select"
                value={formData.occasion}
                onChange={handleChange}
                error={formErrors.occasion}
                options={['', 'Party', 'Casual', 'Anniversary']}
            />

            {/* Submit Button */}
            <div>
                <input
                    type="submit"
                    value="Make Your Reservation"
                    className="button hover:!bg-[#ffe252] shadow-xl my-3 w-full"
                    aria-label="Submit the reservation form"
                />
            </div>
        </form>
    );
}

export default BookingForm;
