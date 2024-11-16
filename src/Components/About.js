const About = () => {
    return (
        <section class="py-10 flex w-3/4 my-0 mx-auto">
            <div class="w-1/3">
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
            <p>Little Lemon is a vibrant Mediterranean restaurant founded by Mario and Adrian, 
                two culinary enthusiasts with a passion for blending traditional flavors with innovative twists. 
                Nestled in the heart of Chicago, Little Lemon brings a fresh perspective to classic Mediterranean cuisine, offering a tantalizing array of dishes 
                inspired by the rich culinary heritage of the region.
            </p>
            </div>
            <div>
                <img src={require('../assets/Mario-and-Adrian A.jpg')} alt="image of the owners in the kitchen"/>
                <img src={require('../assets/Mario and Adrian b.jpg')} alt="image of the owners in the kitchen"/>
            </div>
        </section>
    )
}

export default About;