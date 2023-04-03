import { useContext, useEffect } from 'react';
import { AvatarUploader } from '@/components';
import { ImageContext } from '@/context/ImageContext';

import * as S from './styles';

const Home = () => {
  const { imageSaved } = useContext(ImageContext);

  useEffect(() => {
    // This is an example of using the raw image data in the parent component:
    if (imageSaved) {
      localStorage.setItem('imageData', JSON.stringify(imageSaved));
    }
  }, [imageSaved]);

  return (
    <S.Container data-testid='home-content'>
      <AvatarUploader />
    </S.Container>
  );
};

export default Home;
