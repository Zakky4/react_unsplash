import React from "react";
import useUnsplashImage from "./hooks/useUnsplashImage";
import "./App.css";

const App: React.FC = () => {
  const { imageUrl, fetchRandomImage } = useUnsplashImage();

  return (
    <div className="App">
      <h1>Unsplashからランダムに画像を取得</h1>
      <button onClick={fetchRandomImage}>新しい画像を取得</button>
      <br />
      <br />
      {imageUrl && (
        <img
          src={imageUrl}
          alt="Random from Unsplash"
          style={{ width: "500px", height: "auto" }}
        />
      )}
    </div>
  );
};

export default App;
