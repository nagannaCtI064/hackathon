import React from 'react';

const Gallery = () => {
  return (
    <div className="gallery">
      <div className="gallery-item">
        <img src="https://via.placeholder.com/300" alt="Cultural Activity 1" />
        <h3>Cultural Activity 1</h3>
      </div>
      <div className="gallery-item">
        <img src="https://via.placeholder.com/300" alt="Cultural Activity 2" />
        <h3>Cultural Activity 2</h3>
      </div>
      <div className="gallery-item">
        <img src="https://via.placeholder.com/300" alt="Cultural Activity 3" />
        <h3>Cultural Activity 3</h3>
      </div>
      <div className="gallery-item">
        <img src="https://via.placeholder.com/300" alt="Cultural Activity 4" />
        <h3>Cultural Activity 4</h3>
      </div>
      
    </div>
  );
};

const PageContent = () => {
  return (
    <div className="page-content">
      <h1>Gallery</h1>
      <h2>Explore Cultural Activities</h2>
      <Gallery />
    </div>
  );
};

export default PageContent;
