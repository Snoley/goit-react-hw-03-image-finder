import React from 'react';
import ImageGalleryItem from './ImageGalleryItem';
import Loader from '../Loader/Loader';
import { ImageGalleryLi } from './ImageGallery.Styled';

function ImageGallery({ status, error, gallery }) {
  if (status === 'pending') {
    return <Loader />;
  }

  if (status === 'resolved') {
    return (
      <>
        <ImageGalleryLi>
          {gallery.map(photo => (
            <ImageGalleryItem key={photo.id} photo={photo} />
          ))}
        </ImageGalleryLi>
      </>
    );
  }

  if (status === 'rejected') {
    return (
      <div>
        <h2>{error}</h2>
      </div>
    );
  }
}

export default ImageGallery;
