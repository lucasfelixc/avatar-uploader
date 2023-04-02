import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { WrapperTheme } from '@/utils/test';
import { InputErrorFeedback } from '@/components';

describe('<InputErrorFeedback />', () => {
  test('Should render', () => {
    const { getByTestId } = WrapperTheme(
      render,
      <InputErrorFeedback errorTypeList={['acceptType']} handleClickTryAgain={() => null} />,
    );

    expect(getByTestId('input-error-content')).toBeInTheDocument();
  });

  test('Should render without error message', () => {
    const { queryByTestId } = WrapperTheme(
      render,
      <InputErrorFeedback errorTypeList={[]} handleClickTryAgain={() => null} />,
    );

    const errorMsg = queryByTestId('error-text');

    expect(errorMsg).toBe(null);
  });

  test('Should render with error message', () => {
    const { queryByTestId } = WrapperTheme(
      render,
      <InputErrorFeedback errorTypeList={['acceptType']} handleClickTryAgain={() => null} />,
    );

    const errorMsg = queryByTestId('error-text');

    expect(errorMsg).toBeInTheDocument();
    expect(errorMsg).toContainHTML('Your selected file type is not allow.');
  });

  test('Should click in try again', () => {
    const alert = jest.spyOn(window, 'alert').mockImplementation(() => null);

    const { getByTestId } = WrapperTheme(
      render,
      <InputErrorFeedback
        errorTypeList={['acceptType']}
        handleClickTryAgain={() => window.alert('Try again clicked')}
      />,
    );

    const tryAgainButton = getByTestId('try-again-button');
    fireEvent.click(tryAgainButton);

    expect(alert).toBeCalledWith('Try again clicked');
  });
});
