const About = () => {
    return (
        <section className="about py-12 md:flex md:justify-between md:gap-7 w-3/4 my-10 mx-auto">
            <artcile className="md:w-[50%] lg:w-[40%]">
                <header>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                </header>
                <p className='text-justify'>Little Lemon is a vibrant Mediterranean restaurant founded by Mario and Adrian, 
                    two culinary enthusiasts with a passion for blending traditional flavors with innovative twists. 
                    Nestled in the heart of Chicago, Little Lemon brings a fresh perspective to classic Mediterranean cuisine, offering a tantalizing array of dishes 
                    inspired by the rich culinary heritage of the region.
                </p>
            </artcile>
            <div className="relative w-64 h-64 my-8 md:w-[40%] lg:w-[45%]">
                <img src={require('../../assets/Mario-and-Adrian A.jpg')} alt="image of the owners in the kitchen cooking" className="inline w-full h-full absolute top-12 left-12 object-cover z-10 rounded-lg shadow-lg md:ml-10"/>
                <img src={require('../../assets/Mario and Adrian b.jpg')} alt="image of the owners in the kitchen laughing" className="inline w-2/3 absolute top-0 left-0 object-cover z-20 rounded-lg shadow-lg"/>
            </div>
        </section>
    )
}

export default About;