import * as S from './styles';

type Props = {
  imgSrc: string;
};

export const ImagePreview = ({ imgSrc }: Props) => {
  return <S.Container imgSrc={imgSrc} />;
};
