// ImageGallery.jsx
import React, { useState } from 'react';
import { CAROUSEL_IMAGES } from "../Constants/constants";


const ImageGallery = ({ images = CAROUSEL_IMAGES }) => {

  const [selectedImage, setSelectedImage] = useState(0);

  const nextSlide = () => {
    setSelectedImage((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setSelectedImage((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div id="carouselExampleCaptions" className="w-[70%] overflow-hidden-web flex justify-center">
      <div> 
      <p>Work in progress... come back sooon :))</p>
        {/* Previous Arrow */}
        <button
          className="flex items-center justify-center p-8 text-center text-black opacity-90 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-black hover:no-underline hover:opacity-90 hover:outline-none focus:text-black focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
          type="button"
          data-te-target="#carouselExampleCaptions"
          data-te-slide="prev"
          onClick={prevSlide}
          style={{ fontSize: '2rem' }}
        >
          &lt;
        </button>
        
            {/* Image Carousel */}
            <div className="ml-[10%] w-[70%] xl:w-[70%] flex flex-col relative"> 
            {images.map((imageUrl, index) => (
                <div
                key={index}
                className={`${
                    index === selectedImage ? 'opacity-100' : 'opacity-0 hidden'
                }  rounded-lg transition-opacity duration-500 ease-in-out relative w-[70%] motion-reduce:transition-none`}
                data-te-carousel-active
                data-te-carousel-item
                style={{ backfaceVisibility: 'hidden', height: '600px', width: '600px' }}
                >
                <div
                    className="relative overflow-hidden bg-cover bg-no-repeat rounded-lg"
                    style={{ backgroundPosition: '50%' }}
                >
                    <img
                    src={imageUrl}
                    className="block w-[70%] rounded-lg"
                    alt={`Slide ${index + 1}`}
                    />
                </div>
                </div>
            ))}
            </div>

        
        {/* Next Arrow */}
        <button
          className="flex items-center justify-center p-4  text-center text-black opacity-90 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-black hover:no-underline hover:opacity-90 hover:outline-none focus:text-black focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
          type="button"
          data-te-target="#carouselExampleCaptions"
          data-te-slide="next"
          onClick={nextSlide}
          style={{ fontSize: '2rem' }}
        >
          &gt;
        </button>
      </div>
    </div>
);
};

export default ImageGallery;
