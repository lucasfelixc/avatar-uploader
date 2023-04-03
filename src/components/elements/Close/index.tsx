import Image from 'next/image';
import closeIcon from '@/assets/icons/close.svg';

import * as S from './styles';

type Props = {
  handleCancelUpload: () => void;
};

export const Close = ({ handleCancelUpload }: Props) => {
  return (
    <S.CloseContent onClick={handleCancelUpload} data-testid='close-content'>
      <Image src={closeIcon} alt='Close editing' />
    </S.CloseContent>
  );
};
