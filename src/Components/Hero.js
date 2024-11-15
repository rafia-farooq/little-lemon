const Hero = () => {
    return (
        <section>
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
        </section>
    )
}

export default Hero;