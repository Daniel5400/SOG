import React, { useState, useEffect } from 'react';
import '../App.css'; // Ensure you import the CSS file

const images = [
  require('../Assets/backgroundcar.jpg'),
  require('../Assets/backgroundcars.jpg'),
];


const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 30000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  const currentImage = images[currentImageIndex];

  return (
    <div>
      <div
        className="hero"
        style={{
          backgroundImage: `url(${currentImage})`,
          width: '100%',
          height: '75vh',
          backgroundSize: 'cover',
          marginBottom: '50px',
          transition: 'background-image 1s ease-in-out'
        }}
      >
        <section className="hero-content">
          <div className="h-l">
            <h1>
              Let <span> make</span>your<span>ride experience a memorable one.</span> 
            </h1>
            <p>When it comes to solid car we are you best choice, ride in confort,ride with us.</p>
           
          </div>
        </section>
      </div>
    </div>
  );
}


export default Hero;
