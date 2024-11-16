import Logo from '../assets/icons/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faThreads, faXTwitter } from '@fortawesome/free-brands-svg-icons'; // Import the faPersonBiking icon



const Footer = () => {
    return (
        <footer class="footer py-10">
          <div class="flex justify-between w-3/4 my-0 mx-auto">{/*---- wrapper -----*/}
            <section>
              <img src={Logo} alt="logo"/>
            </section>
            <section>
              <h4>Menu</h4>
              <ul>
                <li>
                  <a href='#'>Home</a>
                </li>
                <li>
                  <a  href='#'>About</a>
                </li>
                <li>
                  <a  href='#'>Reservation</a>
                </li>
                <li>
                  <a  href='#'>Menu</a>
                </li>
                <li>
                  <a  href='#'>Order Online</a>
                </li>
                <li>
                  <a  href='#'>Login</a>
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
              <div class="flex justify-evenly my-4">
                <FontAwesomeIcon icon={faFacebookF}/>
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon icon={faThreads} />
                <FontAwesomeIcon icon={faXTwitter} />
              </div>
            </section>
          </div>{/*----end of wrapper-----*/}
      </footer>
    )
}

export default Footer;