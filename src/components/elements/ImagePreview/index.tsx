import Image from 'next/image';
import warningIcon from '@/assets/icons/warning.svg';

import * as S from './styles';

type Props = {
  imgSrc?: string;
  error?: boolean;
};

export const ImagePreview = ({ imgSrc, error }: Props) => {
  return (
    <S.Container imgSrc={imgSrc} error={error}>
      {!!error && <Image src={warningIcon} alt='warning' />}
    </S.Container>
  );
};
