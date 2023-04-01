import Image from 'next/image';
import ImageIcon from '@/assets/icons/image-icon.svg';

import * as S from './styles';

export const InputDropInfo = () => {
  return (
    <S.Container data-testid='input-drop-info-content'>
      <S.DescriptionInfo>
        <Image src={ImageIcon} alt='Image icon' />
        <span>Organization Logo</span>
      </S.DescriptionInfo>
      <span className='input-description-organization'>
        Drop the image here or click to browse.
      </span>
    </S.Container>
  );
};
