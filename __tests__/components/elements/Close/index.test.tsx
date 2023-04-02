import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { WrapperTheme } from '@/utils/test';
import { Close } from '@/components';

describe('<Close />', () => {
  test('Should render', () => {
    const { getByTestId } = WrapperTheme(render, <Close handleCancelUpload={() => null} />);

    expect(getByTestId('close-content')).toBeInTheDocument();
  });

  test('Should execute click function', () => {
    const alert = jest.spyOn(window, 'alert').mockImplementation(() => null);

    const { getByTestId } = WrapperTheme(
      render,
      <Close handleCancelUpload={() => window.alert('This component was clicked')} />,
    );

    const closeComponent = getByTestId('close-content');
    fireEvent.click(closeComponent);

    expect(alert).toBeCalledWith('This component was clicked');
  });
});
