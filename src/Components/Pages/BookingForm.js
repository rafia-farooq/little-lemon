function BookingForm({ formData, formErrors, availableTimes, handleChange, handleSubmit }) {
    return (
        <form className="space-y-6 max-w-lg mx-auto" onSubmit={handleSubmit}>
            {/* Date Field */}
            <div className="space-y-2">
                <label htmlFor="date" className="block text-sm font-semibold text-gray-700">
                    Date
                </label>
                <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-yellow-300"
                />
                {formErrors.date && <span className="text-red-500 text-sm">{formErrors.date}</span>}
            </div>

            {/* Time Field */}
            <div className="space-y-2">
                <label htmlFor="time" className="block text-sm font-semibold text-gray-700">
                    Time
                </label>
                <select
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-yellow-300"
                >
                    <option value="">Select from these available times:</option>
                    {availableTimes.map((time, index) => (
                        <option key={index} value={time}>
                            {time}
                        </option>
                    ))}
                </select>
                {formErrors.time && (
                    <span className="formError text-red-500 text-sm">{formErrors.time}</span>
                )}
            </div>

            {/* Guests Field */}
            <div className="space-y-2">
                <label htmlFor="guests" className="block text-sm font-semibold text-gray-700">
                    Number of Guests
                </label>
                <input
                    type="number"
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    min="1"
                    max="15"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-yellow-300"
                />
                {formErrors.guests && <span className="text-red-500 text-sm">{formErrors.guests}</span>}
            </div>

            {/* Occasion Field */}
            <div className="space-y-2">
                <label htmlFor="occasion" className="block text-sm font-semibold text-gray-700">
                    Occasion
                </label>
                <select
                    id="occasion"
                    name="occasion"
                    value={formData.occasion}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-yellow-300"
                >
                    <option value="">What's the occasion?</option>
                    <option value="Party">Party</option>
                    <option value="Casual">Casual</option>
                    <option value="Anniversary">Anniversary</option>
                </select>
                {formErrors.occasion && (
                    <span className="formError text-red-500 text-sm">{formErrors.occasion}</span>
                )}
            </div>

            {/* Submit Button */}
            <div>
                <input
                    type="submit"
                    value="Make Your Reservation"
                    className="button hover:!bg-[#ffe252] shadow-xl my-3 w-full"
                />
            </div>
        </form>
    );
}

export default BookingForm;
