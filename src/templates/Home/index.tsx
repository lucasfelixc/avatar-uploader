// import { useContext } from 'react';
// import { ImageContext } from '@/context/ImageContext';
import { AvatarUploader } from '@/components';

import * as S from './styles';

const Home = () => {
  // Accessing raw image data in parent component:
  // const { imageSaved } = useContext(ImageContext);

  return (
    <S.Container data-testid='home-content'>
      <AvatarUploader />
    </S.Container>
  );
};

export default Home;
