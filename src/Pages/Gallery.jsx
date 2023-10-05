import React, { useState } from 'react';

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  const images = [
    'https://tecdn.b-cdn.net/img/Photos/Slides/img%20(123).jpg',
    'https://tecdn.b-cdn.net/img/Photos/Slides/img%20(124).jpg',
    'https://tecdn.b-cdn.net/img/Photos/Slides/img%20(125).jpg',
  ];

  const nextSlide = () => {
    setSelectedImage((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setSelectedImage((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div
      id="carouselExampleCaptions"
      className="relative"
      data-te-carousel-init
      data-te-carousel-slide
    >
      {/* Carousel Slides */}
      <div className="relative w-full overflow-hidden">
        {images.map((imageUrl, index) => (
          <div
            key={index}
            className={`${
              index === selectedImage ? '' : 'hidden'
            } relative float-left -mr-[100%] w-full transition-transform duration-600 ease-in-out motion-reduce:transition-none`}
            data-te-carousel-active
            data-te-carousel-item
            style={{ backfaceVisibility: 'hidden' }}
          >
            <div
              className="relative overflow-hidden bg-cover bg-no-repeat"
              style={{ backgroundPosition: '50%' }}
            >
              <img
                src={imageUrl}
                className="block w-full"
                alt={`Slide ${index + 1}`}
              />
              <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black bg-fixed opacity-50"></div>
            </div>
            <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
              <h5 className="text-xl">{`Slide ${index + 1} label`}</h5>
              <p>
                {`Some representative placeholder content for the slide ${
                  index + 1
                }.`}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel Controls */}
      <button
        className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        data-te-target="#carouselExampleCaptions"
        data-te-slide="prev"
        onClick={prevSlide}
      >
        {/* Previous Button SVG */}
      </button>
      <button
        className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        data-te-target="#carouselExampleCaptions"
        data-te-slide="next"
        onClick={nextSlide}
      >

      </button>
    </div>
  );
};

export default ImageGallery;
