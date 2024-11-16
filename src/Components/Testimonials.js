import Reviews from '../Data/Reviews';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'; // Solid stars and half stars
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons'; // Regular (hollow) stars

const Testimonials = () => {
    return (
        <section class="py-10 reviews">
            <h2 class="text-center">Testimonials</h2>
            <div class="flex w-3/4 my-0 mx-auto">
                {Reviews.map((item, index) => {
                    const { stars, customerName, imageUrl, review } = item;

                    // Initialize an array to hold the star icons
                    let starIcons = [];

                    // Full stars (solid)
                    for (let i = 0; i < Math.floor(stars); i++) {
                        starIcons.push(<FontAwesomeIcon icon={faStar} key={`full-${i}`} />);
                    }

                    // Half star if the stars value has a decimal (e.g., 4.5)
                    if (stars % 1 !== 0) {
                        starIcons.push(<FontAwesomeIcon icon={faStarHalfAlt} key="half" />);
                    }

                    // Empty stars (regular)
                    const remainingStars = 5 - Math.ceil(stars); // Fill the rest to 5 stars with regular stars
                    for (let i = 0; i < remainingStars; i++) {
                        starIcons.push(<FontAwesomeIcon icon={faStarRegular} key={`empty-${i}`} />);
                    }

                    return (
                        <article key={index}>
                            <div>
                                {starIcons} {/* Dynamically rendered stars based on the `stars` value */}
                                {stars} Stars
                            </div>
                            <div>
                                <img src={imageUrl} alt="customer headshot" width="100px" />
                                <h4>{customerName}</h4>
                            </div>
                            <div>
                                <p>{review}</p>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
};

export default Testimonials;
