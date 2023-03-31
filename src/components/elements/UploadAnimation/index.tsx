import Lottie from 'react-lottie';
import uploadAnimationData from '@/assets/animations/upload.json';

import * as S from './styles';

export const UploadAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: uploadAnimationData,
    background: 'transparent',
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <S.Container>
      <S.AnimationContent>
        <Lottie options={defaultOptions} />
      </S.AnimationContent>

      <span className='drop-text'>Drop the file here to load it.</span>
    </S.Container>
  );
};
