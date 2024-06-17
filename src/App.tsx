import React from 'react';
import useUnsplashImage from './hooks/useUnsplashImage';
import './App.css';

const App: React.FC = () => {
  const { imageUrl, error, fetchRandomImage } = useUnsplashImage();

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