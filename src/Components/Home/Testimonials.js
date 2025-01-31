import Reviews from '../../Data/Reviews';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'; // Solid stars and half stars
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons'; // Regular (hollow) stars

const Testimonials = () => {
  // Helper function to render stars dynamically
  const renderStars = (stars) => {
    const starIcons = [];
    
    // Full stars (solid)
    for (let i = 0; i < Math.floor(stars); i++) {
      starIcons.push(<FontAwesomeIcon icon={faStar} key={`full-${i}`} className="text-yellow-500" />);
    }

    // Half star if the stars value has a decimal (e.g., 4.5)
    if (stars % 1 !== 0) {
      starIcons.push(<FontAwesomeIcon icon={faStarHalfAlt} key="half" className="text-yellow-500" />);
    }

    // Empty stars (regular)
    const remainingStars = 5 - Math.ceil(stars); // Fill the rest to 5 stars with regular stars
    for (let i = 0; i < remainingStars; i++) {
      starIcons.push(<FontAwesomeIcon icon={faStarRegular} key={`empty-${i}`} className="text-yellow-200" />);
    }

    return starIcons;
  };

  return (
    <section className="py-16 reviews">
      <h1 className="text-center mb-8">Testimonials</h1>
      <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-3/4 mx-auto">
        {Reviews.map((item, index) => {
          const { stars, customerName, imageUrl, review } = item;

          return (
            <article key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              {/* Rating and stars */}
              <div className="flex items-center mb-4">
                <div className="flex gap-1">
                  {renderStars(stars)}
                </div>
                <span className="ml-2 text-gray-500">{stars} Stars</span>
              </div>

              {/* Customer info */}
              <div className="flex items-center mb-4">
                <img src={imageUrl} alt="customer headshot" className="w-16 h-16 rounded-full object-cover mr-4" />
                <h4 className="text-lg font-medium">{customerName}</h4>
              </div>

              {/* Review text */}
              <p className="text-gray-700">{review}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonials;
