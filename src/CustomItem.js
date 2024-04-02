import React from 'react';

const CustomItem = ({ imageUrl, caption }) => {
  return (
    <div>
      <img src={imageUrl} width={300} height={400} alt="Image" />
      <p>{caption}</p>
      <p>{imageUrl}</p>
    </div>
  );
};

export default CustomItem;