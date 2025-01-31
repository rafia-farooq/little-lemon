import Hero from './Hero';
import Menu from './Menu';
import Testimonials from './Testimonials';
import About from './About';

const Homepage = () => {
    return(
        <main>
            <Hero></Hero>
            <Menu></Menu>
            <Testimonials></Testimonials>
            <About></About>
        </main>
    )
}

export default Homepage;