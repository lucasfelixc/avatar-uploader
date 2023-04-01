import Image from 'next/image';
import warningIcon from '@/assets/icons/warning.svg';

import * as S from './styles';

type Props = {
  imgSrc?: string;
  error?: boolean;
  dimension?: number;
};

export const ImagePreview = ({ imgSrc, error, dimension }: Props) => {
  return (
    <S.Container
      data-testid='image-preview-content'
      className='image-preview-content'
      imgSrc={imgSrc}
      error={error}
      dimension={dimension}
    >
      {!!error && <Image src={warningIcon} alt='warning' data-testid='error-icon' />}
    </S.Container>
  );
};
