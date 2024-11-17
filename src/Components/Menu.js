import MenuList from '../Data/MenuList'; 
import basket from '../assets/icons/basket.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonBiking } from '@fortawesome/free-solid-svg-icons'; // Import the faPersonBiking icon

const Menu = () => {
  return (
    <section>
      <div class="md:flex md:justify-between w-3/4 md:my-20 mx-auto py-10">
        <h2>This week's specials!</h2>
        <button class="hidden md:block">Online Menu</button>
      </div>
      <div class="md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-10 w-3/4 my-4 mx-auto">
        {MenuList.map((item, index) => {
        // Destructuring item to extract the dish and other properties
        const { dish, price, imageUrl, description } = item;

        return (
          <article key={index} class="shadow-lg rounded-lg p-3">
            <img src={imageUrl} alt={dish} class="w-full h-[30vh] object-cover rounded-t-xl"/>
            <div class="flex justify-between">
              <h4>{dish}</h4>
              <p>{price}</p>
            </div>
            <p>{description}</p>
            <div class="flex justify-between">
              <div>
                <a href="#">Order a delivery</a>
                <FontAwesomeIcon icon={faPersonBiking}/>
              </div>
              <a href="#"><img src={basket} alt="basket icon"/></a>
            </div>
          </article>
          );
        })}
      </div>
    </section>
  );
};

export default Menu;
