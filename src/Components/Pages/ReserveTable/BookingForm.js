function BookingForm({
  formData,
  formErrors,
  availableTimes,
  handleChange,
  handleSubmit,
  updateAvailableTimes,
}) {
  // Handle date change to update available times
  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    handleChange(e); // Update form data with the selected date
    updateAvailableTimes(selectedDate); // Update available times based on the new date
  };

  // InputField component to DRY up code for similar input structures
  const InputField = ({
    id,
    label,
    type,
    value,
    onChange,
    error,
    min,
    max,
    options,
    required,
  }) => (
    <div className="space-y-2">
      {/* Label element with 'for' attribute */}
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
          aria-required={required ? 'true' : 'false'}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={`${id}-error`}
          required={required}
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
          aria-required={required ? 'true' : 'false'}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={`${id}-error`}
          required={required}
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
        required={true} // Make date field required
      />

      {/* Time Field */}
      <InputField
        id="time"
        label="Time"
        type="select"
        value={formData.time}
        onChange={handleChange}
        error={formErrors.time}
        required={true} // Make time field required
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
        min={1}
        max={15}
        required={true} // Make guests field required
      />

      {/* Occasion Field */}
      <InputField
        id="occasion"
        label="Occasion"
        type="select"
        value={formData.occasion}
        onChange={handleChange}
        error={formErrors.occasion}
        required={true} // Make occasion field required
        options={['Party', 'Casual', 'Anniversary']}
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
