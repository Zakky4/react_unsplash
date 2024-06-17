import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { UnsplashImage } from './types';
import './App.css';

type UnsplashImage = {
  id: number;
  width: number;
  height: number;
  urls: { large: string; regular: string; raw: string; small: string };
  color: string | null;
  user: {
    username: string;
    name: string;
  };
};

const App: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string>('');
  const clientId = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;

  const fetchRandomImage = async () => {
    try {
      const response = await axios.get<UnsplashImage>(
        `https://api.unsplash.com/photos/random?client_id=${clientId}`
      );
      setImageUrl(response.data.urls.regular);
    } catch (error) {
      console.error('Error fetching image from Unsplash', error);
    }
  };

  useEffect(() => {
    fetchRandomImage();
  }, []);

  return (
    <div className="App">
      <h1>Unsplashからランダムな画像を取得</h1>
      {imageUrl && <img src={imageUrl} alt="Random from Unsplash" style={{ width: '500px', height: 'auto' }} />}
      <br />
      <button onClick={fetchRandomImage}>新しい画像を取得</button>
    </div>
  );
};

export default App;