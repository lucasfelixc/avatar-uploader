import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { WrapperTheme } from '@/utils/test';
import { CropSlider } from '@/components';

describe('<CropSlider />', () => {
  test('Should render', () => {
    const { getByTestId } = WrapperTheme(
      render,
      <CropSlider handleChangeCropValue={() => null} handleClickSaveDimension={() => null} />,
    );

    expect(getByTestId('crop-content')).toBeInTheDocument();
  });

  test('Should change range input value', () => {
    const alert = jest.spyOn(window, 'alert').mockImplementation(() => null);

    const { getByTestId } = WrapperTheme(
      render,
      <CropSlider
        handleChangeCropValue={(ev) => window.alert(ev)}
        handleClickSaveDimension={() => null}
      />,
    );

    const rangeInput = getByTestId('range-input');
    fireEvent.change(rangeInput, { target: { value: 20 } });

    expect(alert).toBeCalledWith('20');
  });

  test('Should click in save button', () => {
    const alert = jest.spyOn(window, 'alert').mockImplementation(() => null);

    const { getByTestId } = WrapperTheme(
      render,
      <CropSlider
        handleChangeCropValue={() => null}
        handleClickSaveDimension={() => window.alert('Save button was clicked')}
      />,
    );

    const saveButton = getByTestId('save-button');
    fireEvent.click(saveButton);

    expect(alert).toBeCalledWith('Save button was clicked');
  });
});
