import React, { useState } from 'react';
import Modal from '../components/Modal';

export default function Tech() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemInModal, setItemInModal] = useState(0);

  const images = [
    'agro.jpg',
    'agro.jpg',
    'agro.jpg',
    'agro.jpg',
    'agro.jpg',
    'agro.jpg',
    'agro.jpg',
  ];

  const openModal = (index) => {
    setIsModalOpen(true);
    setItemInModal(index)
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return <>
    <h1 className='section-title'>Tecnología</h1>
    <div className='text-grid'>
      {images.map((image, index) => (
        <img onClick={() => openModal(index)} className='text-item' key={index} src={'images/' + image} alt={`Imagen ${index + 1}`} width='500' height='500' />
      ))}
    </div>
    <Modal isOpen={isModalOpen} onClose={closeModal}>
      <h2>Item {itemInModal}</h2>
      <p>Descripción del item</p>
    </Modal>
  </>
}
