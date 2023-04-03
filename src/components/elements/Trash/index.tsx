import { MouseEvent } from 'react';
import Image from 'next/image';
import trashIcon from '@/assets/icons/trash.svg';

import * as S from './styles';

type Props = {
  handleClearImages: (event: MouseEvent) => void;
};

export const Trash = ({ handleClearImages }: Props) => {
  return (
    <>
      <S.TrashContent onClick={handleClearImages} data-testid='clearImagesButton'>
        <Image src={trashIcon} alt='Clear images' />
      </S.TrashContent>
    </>
  );
};
