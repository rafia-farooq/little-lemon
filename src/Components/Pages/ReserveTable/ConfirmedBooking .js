import { Link } from 'react-router-dom';

const ConfirmedBooking = () => {
    return (
        <section className="w-3/4 my-10 mx-auto">
            <div>
                <header className="border-b-2 border-yellow-200">
                    <h1>Booking Confirmed!</h1>
                </header>
                <p className='text-justify mt-8'>Your reservation has been successfully confirmed. We look forward to welcoming you.</p>
            </div>
            <Link to="/" className="button hover:!bg-[#ffe252] shadow-xl my-10">Go to HomePage</Link>
        </section>
    )
}

export default ConfirmedBooking;