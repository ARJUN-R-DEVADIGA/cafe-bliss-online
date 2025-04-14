
import React from 'react';

const About = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="section-title">Our Story</h2>
            <p className="mb-4">
              Café Bliss was founded in 2010 with a simple mission: to create a warm, welcoming 
              space where quality coffee and food bring people together. What started as a small 
              neighborhood café has grown into a beloved community gathering place.
            </p>
            <p className="mb-4">
              Our coffee beans are ethically sourced from sustainable farms around the world and 
              roasted in small batches to ensure the freshest, most flavorful cup possible. Our 
              food is made from scratch daily using locally sourced ingredients whenever possible.
            </p>
            <p>
              Whether you're meeting friends, working remotely, or simply enjoying a moment of solitude, 
              we strive to make every visit to Café Bliss a delightful experience.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img 
                src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=600" 
                alt="Coffee beans" 
                className="rounded-lg h-48 w-full object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1610632380989-680fe40816c6?q=80&w=600" 
                alt="Barista preparing coffee" 
                className="rounded-lg h-64 w-full object-cover"
              />
            </div>
            <div className="space-y-4 mt-8">
              <img 
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=600" 
                alt="Coffee shop interior" 
                className="rounded-lg h-64 w-full object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1579494376631-9363a7667fbe?q=80&w=600" 
                alt="Fresh pastries" 
                className="rounded-lg h-48 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
