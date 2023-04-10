import React, { useState } from 'react';
import { ImageItem, ImageGalleryItemImage, ImageModal } from './ImageGalleryItem.Styled';
import Modal from '../Modal/Modal';

function ImageGalleryItem({ photo }) {
  const [showModal, setShowModal] = useState(false);
  const { tags, largeImageURL, webformatURL } = photo;

  const toggleModal = () => setShowModal(!showModal);

  return (
    <>
      <ImageItem onClick={toggleModal}>
        <ImageGalleryItemImage src={webformatURL} alt={tags} />
      </ImageItem>
      {showModal && (
        <Modal close={toggleModal}>
          <ImageModal src={largeImageURL} alt={tags} />
        </Modal>
      )}
    </>
  );
}

export default ImageGalleryItem;
