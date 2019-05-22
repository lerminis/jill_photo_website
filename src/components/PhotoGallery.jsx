import React, { useState } from "react";
import PropTypes from "prop-types";
import Gallery from "react-photo-gallery";
import Lightbox from "react-images";

const PhotoGallery = ({ data }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false);

  return (
    <div>
      <Gallery
        photos={data}
        targetRowHeight={600}
        onClick={(event, obj) => {
          setCurrentImage(obj.index);
          setLightboxIsOpen(true);
        }}
      />
      <Lightbox
        images={data}
        onClose={() => {
          setCurrentImage(0);
          setLightboxIsOpen(false);
        }}
        onClickPrev={() => setCurrentImage(currentImage - 1)}
        onClickNext={() => setCurrentImage(currentImage + 1)}
        currentImage={currentImage}
        isOpen={lightboxIsOpen}
        backdropClosesModal={true}
      />
    </div>
  );
};

PhotoGallery.propTypes = {
  data: PropTypes.array.isRequired
};

export default PhotoGallery;
