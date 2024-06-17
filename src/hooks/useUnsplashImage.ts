import { useState, useEffect } from "react";
import axios from "axios";
import { UnsplashImage } from "../types/UnsplashImage";

const useUnsplashImage = () => {
  const [imageUrl, setImageUrl] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const clientId = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;

  const fetchRandomImage = async () => {
    if (!clientId) {
      setError("Unsplash access key is missing");
      return;
    }

    try {
      const response = await axios.get<UnsplashImage>(
        `https://api.unsplash.com/photos/random?client_id=${clientId}`
      );
      setImageUrl(response.data.urls.regular);
      setError(null);
    } catch (error) {
      console.error("Error fetching image from Unsplash", error);
      setError("Error fetching image from Unsplash");
    }
  };

  useEffect(() => {
    fetchRandomImage();
  }, []);

  return { imageUrl, error, fetchRandomImage };
};

export default useUnsplashImage;
