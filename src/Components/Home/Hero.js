import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="hero py-12 md:h-[500px] lg:h-[450px]">
          <div className="md:flex md:justify-between gap-10 w-3/4 mx-auto"> {/*---- wrapper -----*/}
            <article className="md:w-[40%] md:mt-12">
              <header>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
              </header>
              <h4 className="mt-7">We are a family owned Mediterranean restaurant focused on traditional recipes 
                served with a modern twist.
              </h4>
              <Link to="/book-a-table" className="button hover:!bg-[#ffe252] shadow-xl my-10">Reserve a Table</Link>
            </article>
            <article className="md:w-[45%] md:flex md:justify-end lg:h-[70vh]">
                    <figure className="w-full h-full">
                        <img 
                            src={require('../../assets/heroImage.jpg')} 
                            alt="A server carrying a Mediterranean dish to a table" 
                            className="w-full h-full object-cover rounded-lg"
                        />
                        <figcaption className="sr-only">
                            A server carrying a Mediterranean dish to a table at Little Lemon.
                        </figcaption>
                    </figure>
                </article>
          </div>{/*----end of wrapper-----*/}
        </section>
    )
}

export default Hero;