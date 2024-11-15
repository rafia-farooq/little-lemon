import Logo from '../assets/icons/logo.svg';

const Nav = () => {
    return (
        <header>
        <div>
          <img src={Logo} alt="logo" />
        </div>
        <nav>
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
        </nav>
      </header>
    )
}

export default Nav;