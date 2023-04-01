import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { WrapperTheme } from '@/utils/test';
import { ImagePreview } from '@/components';
import closeIcon from '@/assets/coringando.jpeg';

describe('<ImagePreview />', () => {
  test('Should render', () => {
    const { getByTestId } = WrapperTheme(render, <ImagePreview />);

    expect(getByTestId('image-preview-content')).toBeInTheDocument();
  });

  test('Should render with source image', () => {
    WrapperTheme(render, <ImagePreview imgSrc={closeIcon.src} />);

    const imagePreview = document.getElementsByClassName('image-preview-content');
    const imagePreviewStyle = window.getComputedStyle(imagePreview[0]);

    expect(imagePreviewStyle.backgroundImage).toBe('url(/img.jpg)');
  });

  test('Should render with a specific dimension', () => {
    WrapperTheme(render, <ImagePreview imgSrc={closeIcon.src} dimension={79} />);

    const imagePreview = document.getElementsByClassName('image-preview-content');
    const imagePreviewStyle = window.getComputedStyle(imagePreview[0]);

    expect(imagePreviewStyle.backgroundSize).toBe('79%');
  });

  test('Should render error icon', () => {
    const { getByTestId } = WrapperTheme(render, <ImagePreview error />);

    const errorIcon = getByTestId('error-icon');

    expect(errorIcon).toBeInTheDocument();
  });
});
