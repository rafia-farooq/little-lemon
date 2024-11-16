const Hero = () => {
    return (
        <section class="py-10 hero">
          <div class="flex w-3/4 my-0 mx-auto"> {/*---- wrapper -----*/}
            <article>
              <h1>Little Lemon</h1>
              <h3>Chicago</h3>
              <p>We are a family owned Mediterranean restaurant focused on traditional recipes 
                served with a modern twist.
              </p>
              <button>Reserve a table</button>
            </article>
            <article>
                <img src={require('../assets/heroImage.jpg')} alt="image of a server carrying a dish"/>
            </article>
          </div>{/*----end of wrapper-----*/}
        </section>
    )
}

export default Hero;