const About = () => {
    return (
        <section class="py-10 md:flex md:gap-7 w-3/4 my-0 mx-auto">
            <div class="md:w-[50%]">
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
            <p>Little Lemon is a vibrant Mediterranean restaurant founded by Mario and Adrian, 
                two culinary enthusiasts with a passion for blending traditional flavors with innovative twists. 
                Nestled in the heart of Chicago, Little Lemon brings a fresh perspective to classic Mediterranean cuisine, offering a tantalizing array of dishes 
                inspired by the rich culinary heritage of the region.
            </p>
            </div>
            <div class="relative w-64 h-64 my-8 md:w-[50%]">
                <img src={require('../assets/Mario-and-Adrian A.jpg')} alt="image of the owners in the kitchen" class="inline w-1/2 border-2 border-green-800 absolute top-12 left-12 w-full h-full object-cover z-10"/>
                <img src={require('../assets/Mario and Adrian b.jpg')} alt="image of the owners in the kitchen" class="inline w-1/2 border-2 border-green-800 absolute top-0 left-0 w-48 h-48 object-cover z-20"/>
            </div>
        </section>
    )
}

export default About;