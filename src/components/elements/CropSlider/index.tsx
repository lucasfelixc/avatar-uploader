import * as S from './styles';

type Props = {
  handleChangeCropValue: (value: string) => void;
  handleClickSaveDimension: () => void;
};

export const CropSlider = ({ handleChangeCropValue, handleClickSaveDimension }: Props) => {
  return (
    <S.Container data-testid='crop-content'>
      <span className='crop-title'>Crop</span>
      <S.InputRange
        data-testid='range-input'
        type='range'
        min='1'
        max='20'
        defaultValue={1}
        onChange={(ev) => handleChangeCropValue(ev.target.value)}
      />
      <S.ContentButton>
        <S.ButtonSubmit data-testid='save-button' onClick={handleClickSaveDimension}>
          Save
        </S.ButtonSubmit>
      </S.ContentButton>
    </S.Container>
  );
};
