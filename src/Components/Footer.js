import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faThreads, faXTwitter } from '@fortawesome/free-brands-svg-icons'; // Import the faPersonBiking icon



const Footer = () => {
    return (
        <footer className="py-10 text-center md:text-left">
          <div className="md:flex md:justify-between w-3/4 my-0 mx-auto">{/*---- wrapper -----*/}
            <section>
              <img src={require('../assets/icons/white-green-square-logo.png')} alt="logo" class="w-2/3"/>
            </section>
            <section>
              <h3>Menu</h3>
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
              <h3>Contact</h3>
              <p>Address</p>
              <p>+9127731</p>
              <p>little-lemon@mail.com</p>
            </section>
            <section>
              <h3 className="text-center">Follow Us on Social Media</h3>
              <div className="flex justify-evenly my-4">
                <FontAwesomeIcon icon={faFacebookF} className='icon'/>
                <FontAwesomeIcon icon={faInstagram} className='icon'/>
                <FontAwesomeIcon icon={faThreads} className='icon'/>
                <FontAwesomeIcon icon={faXTwitter} className='icon'/>
              </div>
            </section>
          </div>{/*----end of wrapper-----*/}
      </footer>
    )
}

export default Footer;