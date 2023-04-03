import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { WrapperTheme } from '@/utils/test';
import { UploadAnimation } from '@/components';

describe('<UploadAnimation />', () => {
  test('Should render', () => {
    const { getByTestId } = WrapperTheme(render, <UploadAnimation />);

    expect(getByTestId('upload-animation-content')).toBeInTheDocument();
  });

  test('Should render the helper text', () => {
    const { getByText } = WrapperTheme(render, <UploadAnimation />);

    const helperText = getByText('Drop the file here to load it.');

    expect(helperText).toBeInTheDocument();
  });
});
