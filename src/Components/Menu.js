import MenuList from '../Data/MenuList'; 
import basket from '../assets/icons/basket.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonBiking } from '@fortawesome/free-solid-svg-icons'; // Import the faPersonBiking icon

const Menu = () => {
  return (
    <section>
      <div class="flex justify-between w-3/4 my-0 mx-auto py-10">
        <h2>This week's specials!</h2>
        <button>Online Menu</button>
      </div>
      <div class="flex justify-evenly w-3/4 my-4 mx-auto">
        {MenuList.map((item, index) => {
        // Destructuring item to extract the dish and other properties
        const { dish, price, imageUrl, description } = item;

        return (
          <article key={index}>
            <img src={imageUrl} alt={dish} width="200px"/>
            <div>
              <h4>{dish}</h4>
              <p>{price}</p>
            </div>
            <p>{description}</p>
            <div>
              <a href="#">Order a delivery</a>
              <FontAwesomeIcon icon={faPersonBiking}/>
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
