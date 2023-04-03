import React, { createContext, useState } from 'react';
import { ImageType } from 'react-images-uploading';

interface ImageContextData {
  imageSaved: ImageType | null;
  setImageSaved: (image: ImageType | null) => void;
}

type ImageProviderProps = {
  children: React.ReactNode;
};

export const ImageContext = createContext({} as ImageContextData);

export function ImageProvider({ children }: ImageProviderProps) {
  const [imageSaved, setImageSaved] = useState<ImageType | null>(null);

  return (
    <ImageContext.Provider
      value={{
        imageSaved,
        setImageSaved,
      }}
    >
      {children}
    </ImageContext.Provider>
  );
}
