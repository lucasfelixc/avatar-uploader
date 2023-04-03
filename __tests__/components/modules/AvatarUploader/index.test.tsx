import { fireEvent, render, waitFor, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import { WrapperTheme, helpers } from '@/utils/test';
import { AvatarUploader } from '@/components';

describe('<AvatarUploader />', () => {
  test('Should render', () => {
    const { getByTestId } = WrapperTheme(render, <AvatarUploader />);

    expect(getByTestId('avatar-uploader-content')).toBeInTheDocument();
  });

  test('Should render the preview image', async () => {
    const file = new File(['example'], 'example.png', {
      type: 'image/png',
    });

    const { getByAltText, getByTestId } = WrapperTheme(render, <AvatarUploader />);

    const input = getByAltText('Avatar image');
    Object.defineProperty(input, 'files', {
      value: [file],
    });

    fireEvent.change(input);

    const imagePreview = await waitFor(() => getByTestId('image-preview-content'));

    expect(imagePreview).toBeInTheDocument();
  });

  test('Should give error type file', async () => {
    const filePdf = new File(['example'], 'example.pdf', {
      type: 'aplication/pdf',
    });

    const { getByAltText, getByTestId } = WrapperTheme(render, <AvatarUploader />);

    const input = getByAltText('Avatar image');
    Object.defineProperty(input, 'files', {
      value: [filePdf],
    });

    fireEvent.change(input);

    const iconError = await waitFor(() => getByTestId('error-icon'));

    expect(iconError).toBeInTheDocument();
  });

  test('Should allow retrying after an error clicking on the close button', async () => {
    const filePdf = new File(['example'], 'example.pdf', {
      type: 'aplication/pdf',
    });

    const { getByAltText, getByTestId } = WrapperTheme(render, <AvatarUploader />);

    const input = getByAltText('Avatar image');
    Object.defineProperty(input, 'files', {
      value: [filePdf],
    });

    fireEvent.change(input);

    const closeButton = await waitFor(() => getByTestId('close-content'));

    expect(closeButton).toBeInTheDocument();

    fireEvent.click(closeButton);

    expect(getByTestId('input-drop-info-content')).toBeInTheDocument();
  });

  test('Should allow retrying after an error clicking on the try again button', async () => {
    const filePdf = new File(['example'], 'example.pdf', {
      type: 'aplication/pdf',
    });

    const { getByAltText, getByTestId } = WrapperTheme(render, <AvatarUploader />);

    const input = getByAltText('Avatar image');
    Object.defineProperty(input, 'files', {
      value: [filePdf],
    });

    fireEvent.change(input);

    const tryAgainButton = await waitFor(() => getByTestId('try-again-button'));

    expect(tryAgainButton).toBeInTheDocument();

    fireEvent.click(tryAgainButton);

    expect(getByTestId('input-drop-info-content')).toBeInTheDocument();
  });

  test('Should resize the image', async () => {
    const fileImg = new File(['example'], 'example.png', {
      type: 'image/png',
    });

    const { getByAltText, getByTestId } = WrapperTheme(render, <AvatarUploader />);

    const input = getByAltText('Avatar image');
    Object.defineProperty(input, 'files', {
      value: [fileImg],
    });

    fireEvent.change(input);

    const imagePreview = await waitFor(() => getByTestId('image-preview-content'));

    expect(imagePreview).toBeInTheDocument();

    const rangeInput = getByTestId('range-input');
    fireEvent.change(rangeInput, { target: { value: 250 } });

    const imagePreviewStyle = window.getComputedStyle(imagePreview);

    expect(imagePreviewStyle.backgroundSize).toBe('250%');
  });

  test('Should save the size image', async () => {
    const fileImg = new File(['example'], 'example.png', {
      type: 'image/png',
    });

    const { getByAltText, getByTestId } = WrapperTheme(render, <AvatarUploader />);

    const input = getByAltText('Avatar image');
    Object.defineProperty(input, 'files', {
      value: [fileImg],
    });

    fireEvent.change(input);

    const imagePreview = await waitFor(() => getByTestId('image-preview-content'));

    expect(imagePreview).toBeInTheDocument();

    const rangeInput = getByTestId('range-input');
    fireEvent.change(rangeInput, { target: { value: 250 } });

    fireEvent.click(getByTestId('save-button'));

    const imagePreviewStyle = window.getComputedStyle(imagePreview);

    expect(imagePreviewStyle.backgroundSize).toBe('250%');
  });

  test('Should save default size image', async () => {
    const fileImg = new File(['example'], 'example.png', {
      type: 'image/png',
    });

    const { getByAltText, getByTestId } = WrapperTheme(render, <AvatarUploader />);

    const input = getByAltText('Avatar image');
    Object.defineProperty(input, 'files', {
      value: [fileImg],
    });

    fireEvent.change(input);

    const imagePreview = await waitFor(() => getByTestId('image-preview-content'));

    expect(imagePreview).toBeInTheDocument();

    const rangeInput = getByTestId('range-input');
    fireEvent.change(rangeInput, { target: { value: 252 } });

    fireEvent.click(getByTestId('save-button'));

    const imagePreviewStyle = window.getComputedStyle(imagePreview);

    expect(imagePreviewStyle.backgroundSize).toBe('100%');
  });

  test('Should cancel upload image', async () => {
    const fileImg = new File(['example'], 'example.png', {
      type: 'image/png',
    });

    const { getByAltText, getByTestId, queryByTestId } = WrapperTheme(render, <AvatarUploader />);

    const input = getByAltText('Avatar image');
    Object.defineProperty(input, 'files', {
      value: [fileImg],
    });

    fireEvent.change(input);

    const imagePreview = await waitFor(() => getByTestId('image-preview-content'));

    expect(imagePreview).toBeInTheDocument();

    const rangeInput = getByTestId('range-input');
    fireEvent.change(rangeInput, { target: { value: 250 } });

    fireEvent.click(getByTestId('close-content'));

    const imagePreviewContent = queryByTestId('image-preview-content');

    expect(imagePreviewContent).not.toBeInTheDocument();
  });

  test('Should clear selected image', async () => {
    const fileImg = new File(['example'], 'example.png', {
      type: 'image/png',
    });

    const { getByAltText, getByTestId, queryByTestId } = WrapperTheme(render, <AvatarUploader />);

    const input = getByAltText('Avatar image');
    Object.defineProperty(input, 'files', {
      value: [fileImg],
    });

    fireEvent.change(input);

    const imagePreview = await waitFor(() => getByTestId('image-preview-content'));

    expect(imagePreview).toBeInTheDocument();

    const rangeInput = getByTestId('range-input');
    fireEvent.change(rangeInput, { target: { value: 250 } });

    fireEvent.click(getByTestId('save-button'));

    fireEvent.click(getByTestId('clearImagesButton'));

    const imagePreviewContent = queryByTestId('image-preview-content');

    expect(imagePreviewContent).not.toBeInTheDocument();
  });

  test('Should show dragging text', async () => {
    const file = new File([JSON.stringify({ ping: true })], 'ping.json', {
      type: 'application/json',
    });
    const data = helpers.mockData([file]);

    const { getByTestId } = WrapperTheme(render, <AvatarUploader />);

    const uploadWrapper = getByTestId('input-upload-wrapper');
    fireEvent.click(uploadWrapper);

    await act(() => fireEvent.dragEnter(uploadWrapper, data));

    const draggingContent = await waitFor(() => getByTestId('upload-animation-content'));

    expect(draggingContent).toBeInTheDocument();
  });
});
