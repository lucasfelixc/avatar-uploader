import * as S from './styles';

type Props = {
  handleChangeCropValue: (value: string) => void;
  handleClickSaveDimension: () => void;
};

export const CropSlider = ({ handleChangeCropValue, handleClickSaveDimension }: Props) => {
  return (
    <S.Container>
      <span className='crop-title'>Crop</span>
      <S.InputRange
        type='range'
        min='20'
        max='300'
        defaultValue={100}
        onChange={(ev) => handleChangeCropValue(ev.target.value)}
      />
      <S.ContentButton>
        <S.ButtonSubmit onClick={handleClickSaveDimension}>Save</S.ButtonSubmit>
      </S.ContentButton>
    </S.Container>
  );
};
