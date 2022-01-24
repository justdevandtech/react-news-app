import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import {cardsStyles} from './Styles';
import { Loading } from './Loading';
import { ImageModal } from './ImageModal';


export const NewsCard = ({news}) => {
  const [modalOpen, setmodalOpen] = useState(false);
  const [image, setImage] = useState('');
  const [title, setTitle] = useState('');

  const handleOpenLink = (link) => {
    window.open(link, '_blank');
  }

  const handleOpenModal = (image, title) => {
    setImage(image);
    setTitle(title);
    setmodalOpen(true);
  }

  const handleClose = () => setmodalOpen(false);

    const newsData = news?.articles?.map((item, index) => {
        const { title, description, urlToImage, url } = item;
      return (
        <Card className='col-lg-12' style={{ cursor: "pointer" }} key={index}>
          <Card.Img
            variant='top'
            src={urlToImage}
            onClick={() => handleOpenModal(urlToImage, title)}
          />
          <Card.Body onClick={() => handleOpenLink(url)}>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description.substring(0, 100)}...</Card.Text>
          </Card.Body>
        </Card>
      );
    });

    if (news.length === 0) {
      return <Loading />;
    }
      
  return (
    <div className='mt-4' style={cardsStyles}>
      {newsData}{" "}
      <ImageModal
        modalOpen={modalOpen}
        handleClose={handleClose}
        image={image}
        title={title}
      />
    </div>
  );
};
