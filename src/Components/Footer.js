import Logo from '../assets/icons/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faThreads, faXTwitter } from '@fortawesome/free-brands-svg-icons'; // Import the faPersonBiking icon



const Footer = () => {
    return (
        <footer>
        <section>
          <img src={Logo} alt="logo"/>
        </section>
        <section>
          <h4>Menu</h4>
          <ul>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Reservation</a>
            </li>
            <li>
              <a>Menu</a>
            </li>
            <li>
              <a>Order Online</a>
            </li>
            <li>
              <a>Login</a>
            </li>
          </ul>
        </section>
        <section>
          <h4>Contact</h4>
          <p>Address</p>
          <p>+9127731</p>
          <p>little-lemon@mail.com</p>
        </section>
        <section>
          <h4>Follow Us on Social Media</h4>
          <div>
            <FontAwesomeIcon icon={faFacebookF} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faThreads} />
            <FontAwesomeIcon icon={faXTwitter} />
          </div>
        </section>
      </footer>
    )
}

export default Footer;