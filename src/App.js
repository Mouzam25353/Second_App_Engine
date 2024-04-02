import React, { useState, useEffect } from 'react';
import './App.css';
import CustomItem from './CustomItem';

function App() {
  const [imgNum, setImgNum] = useState(null);
  const [imgData, setImgData] = useState(null);
  const [error, setError] = useState(null);
  const images = ['cat.jpeg','dog.jpeg','sparrow.jpeg']
  var img ; 
  useEffect(() => {
    const pathSegment = window.location.pathname.split('/').pop();
    const parsedNumber = parseInt(pathSegment);

    if (isNaN(parsedNumber) || parsedNumber <= 0) {
      setError('Invalid image number. Please enter a positive integer.');
      return;
    }

    setImgNum(parsedNumber);

    const baseUrl = 'https://storage.googleapis.com/mouzam_bucket_253/';
    switch (parsedNumber) {
      case 1:
        img = images[0];
        break;
        case 2:
          img = images[1];
          break;
          case 3:
            img = images[2];
            break;  
    
      default:
        break;
    }
    const selectedImageUrl = baseUrl+img; // Adjust this URL as needed
    setImgData({ url: selectedImageUrl, caption: `Image Number ${parsedNumber}` });
  }, []);

  return (
    <div className="App">
      <h1>Second App Engine</h1>
      <p>Task 2 part (d)</p>
      {error && <p className="error">{error}</p>}
      {imgData && (
        <CustomItem imageUrl={imgData.url} caption={imgData.caption} />
      )}
  </div>
  );
}

export default App;
