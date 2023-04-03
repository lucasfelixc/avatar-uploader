import { MouseEvent } from 'react';
import Image from 'next/image';
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import trashIcon from '@/assets/icons/trash.svg';

import * as S from './styles';

type Props = {
  handleClearImages: (event: MouseEvent) => void;
};

export const Trash = ({ handleClearImages }: Props) => {
  return (
    <>
      <S.TrashContent
        onClick={handleClearImages}
        id='clearImagesButton'
        data-testid='clearImagesButton'
        data-tooltip-content='Remove images'
      >
        <Image src={trashIcon} alt='Clear images' />
      </S.TrashContent>
      <ReactTooltip anchorSelect='#clearImagesButton' place='top' />
    </>
  );
};
