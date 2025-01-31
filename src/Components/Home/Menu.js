import MenuList from '../../Data/MenuList'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonBiking, faCartPlus } from '@fortawesome/free-solid-svg-icons'; // Import the faPersonBiking icon
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <section className="py-10 mb-8">
      <div className="md:flex md:justify-between w-3/4 md:my-20 mx-auto">
        <h1>This week's specials!</h1>
        <Link to="/menu" className="hidden button hover:!bg-[#ffe252] shadow-xl">Online Menu</Link>
      </div>
      <div className="md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-10 w-3/4 my-4 mx-auto">
        {MenuList.map((item, index) => {
          // Destructuring item to extract the dish and other properties
          const { dish, price, imageUrl, description } = item;

          return (
            <article key={index} className="shadow-lg rounded-lg flex flex-col h-full">
              <img src={imageUrl} alt={dish} className="w-full h-[30vh] object-cover rounded-t-xl" />
              <div className="flex flex-col justify-between flex-grow p-3 bg-emerald-50"> {/*wrapper div for content under the image*/}
                <div className="flex justify-between my-5">{/*wrapper div for name and price*/}
                  <h5>{dish}</h5>
                  <p className='price'>{price}</p>
                </div>{/*end of wrapper div for name and price*/}
                <p className='mb-7'>{description}</p>
                <div className="flex justify-between items-end mt-auto">{/*wrapper div for buttons*/}
                  <Link to="/order-online" className="button-secondary hover:!bg-[#ee9972]">Order Delivery <FontAwesomeIcon icon={faPersonBiking} aria-hidden="true"/></Link>
                  <Link to="#" className="button-secondary hover:!bg-[#ee9972]">Add to Cart <FontAwesomeIcon icon={faCartPlus} aria-hidden="true"/></Link>
                </div>{/*wrapper div for buttons*/}
              </div>{/*end of wrapper div for content under the image*/}
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Menu;
