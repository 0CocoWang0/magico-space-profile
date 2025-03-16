import React, { useEffect, useState } from 'react';
import client from './contentful';  // import the contentful client
import Image from 'next/image';

const ImageGallery = () => {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    // Fetch data from Contentful
    client
      .getEntries({
        content_type: 'imageGallery', // match the content type you defined
      })
      .then((response) => setGallery(response.items))
      .catch(console.error);
  }, []);

  return (
    <div className="gallery-container">
      {gallery.map((item) => (
        <div className="gallery-item" key={item.sys.id}>
          <Image src={item.fields.image.fields.file.url} alt={item.fields.title} />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
