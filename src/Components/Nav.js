import Logo from '../assets/icons/logo.svg';

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