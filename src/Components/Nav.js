import Logo from '../assets/icons/logo.svg';
// for navigation routing
import { Link } from 'react-router';


const Nav = () => {
    return (
      <header class="py-5 md:flex md:justify-between md:items-center w-3/4 my-0 mx-auto">
        <div>
          <a href="/">
            <img src={Logo} alt="logo" />
          </a>
        </div>
        <nav class="w-1/2">
          <ul class="md:flex md:justify-evenly">
            <li>
              <Link to="/" className=''>Home</Link>
            </li>
            <li>
              <Link to="/about-us" className=''>About</Link>
            </li>
            <li>
              <Link to="/book-a-table">Reservation</Link>
            </li>
            <li>
              <Link to="/menu" className=''>Menu</Link>
            </li>
            <li>
              <Link to="/order-online" className=''>Order Online</Link>
            </li>
            <li>
              <Link to="/login" className=''>Login</Link>
            </li>
          </ul>
        </nav>
      </header>
    )
}

export default Nav;