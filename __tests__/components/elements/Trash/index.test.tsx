import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { WrapperTheme } from '@/utils/test';
import { Trash } from '@/components';

describe('<Trash />', () => {
  test('Should render', () => {
    const { getByTestId } = WrapperTheme(render, <Trash handleClearImages={() => null} />);

    expect(getByTestId('clearImagesButton')).toBeInTheDocument();
  });

  test('Should execute the clear function when the button is clicked', () => {
    const alert = jest.spyOn(window, 'alert').mockImplementation(() => null);

    const { getByTestId } = WrapperTheme(
      render,
      <Trash handleClearImages={() => window.alert('Clear image')} />,
    );

    const clearButton = getByTestId('clearImagesButton');
    fireEvent.click(clearButton);

    expect(alert).toBeCalledWith('Clear image');
  });
});
