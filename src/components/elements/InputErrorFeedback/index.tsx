import { ErrorsType } from 'react-images-uploading';

import * as S from './styles';

type Props = {
  errorTypeList: string[];
  handleClickTryAgain: () => void;
};

const errorsText = {
  acceptType: 'Your selected file type is not allow.',
  maxFileSize: 'Selected file size exceed maxFileSize.',
  resolution: 'Selected file is not match your desired resolution.',
};

export const InputErrorFeedback = ({ errorTypeList, handleClickTryAgain }: Props) => {
  return (
    <S.Container>
      {!!errorTypeList && (
        <S.ContentErrorsText>
          {errorTypeList.map((type) => (
            <span key={type}>{errorsText[type as keyof ErrorsType]}</span>
          ))}
        </S.ContentErrorsText>
      )}
      <S.TryButton onClick={handleClickTryAgain}>Try again</S.TryButton>
    </S.Container>
  );
};
