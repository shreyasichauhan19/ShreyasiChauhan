// GalleryPage.jsx
import React from 'react';
import SectionTitle from '../Components/SectionTitle';
import ImageGallery from '../Components/ImageGallery';

const Gallery = () => {
  return (
    <div id="gallerypage" className="w-full flex justify-center overflow-hidden-web">
      <div className="w-full xl:w-[70%] flex flex-col">
        <div className="w-full mt-[10%]">
          <SectionTitle title="GALLERY" subtitle="I take photos sometimes" />
        </div>
        <ImageGallery />
      </div>
    </div>
  );
};

export default Gallery;
