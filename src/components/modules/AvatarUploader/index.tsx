import { useState, MouseEvent, useContext, useCallback } from 'react';
import ImageUploading, { ImageListType, ImageType, ErrorsType } from 'react-images-uploading';
import {
  InputDropInfo,
  ImagePreview,
  InputErrorFeedback,
  CropSlider,
  Close,
  UploadAnimation,
  Trash,
} from '@/components';
import { ImageContext } from '@/context/ImageContext';

import * as S from './styles';

export const AvatarUploader = () => {
  const { setImageSaved } = useContext(ImageContext);
  const [images, setImages] = useState<ImageType[]>([]);
  const [previewImage, setPreviewImage] = useState<ImageType[]>([]);
  const [listErrors, setListErrors] = useState<string[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [cropDimension, setCropDimension] = useState(1);
  const [previewCropDimension, setPreviewCropDimension] = useState(1);

  const handleUploadError = useCallback((errors: ErrorsType) => {
    if (errors) {
      setIsEditing(false);
      const typeErrors = Object.keys(errors);

      setListErrors(typeErrors);
    }
  }, []);

  const handleClickTryAgain = useCallback(() => {
    setListErrors([]);
    setIsEditing(false);
  }, []);

  const handleChangeCropValue = useCallback(
    (value: string) => (parseInt(value) !== 0 ? setCropDimension(parseInt(value)) : null),
    [],
  );

  const handleCancelUpload = useCallback(() => {
    setIsEditing(false);
    setImages(previewImage);
    setCropDimension(previewCropDimension);
  }, [previewImage, previewCropDimension]);

  const handleChange = (imageList: ImageListType) => {
    setCropDimension(1);
    setIsEditing(true);
    setImages(imageList);
  };

  const handleClickSaveDimension = () => {
    setIsEditing(false);
    setPreviewImage(images);
    setPreviewCropDimension(cropDimension);
    setImageSaved(images[0]);
  };

  const handleClearImages = (e: MouseEvent) => {
    e.stopPropagation();
    setImages([]);
    setPreviewImage([]);
    setImageSaved(null);
  };

  return (
    <S.Container data-testid='avatar-uploader-content'>
      <ImageUploading
        data-testid='image-uploading'
        value={images}
        onChange={handleChange}
        onError={handleUploadError}
        inputProps={{ alt: 'Avatar image' }}
      >
        {({ imageList, onImageUpload, onImageRemoveAll, isDragging, dragProps }) => (
          <S.InputUploadWrapper
            data-testid='input-upload-wrapper'
            isDragging={isDragging && !listErrors.length && !isEditing}
            error={!!listErrors.length}
            isEditing={isEditing}
            hasImage={!!imageList.length || !!listErrors.length}
            onClick={() => (!listErrors.length && !isEditing ? onImageUpload() : null)}
            {...dragProps}
          >
            {isDragging ? (
              <UploadAnimation />
            ) : listErrors.length ? (
              <>
                <Close
                  handleCancelUpload={() => {
                    onImageRemoveAll();
                    handleClickTryAgain();
                  }}
                />
                <ImagePreview error />
                <InputErrorFeedback
                  errorTypeList={listErrors}
                  handleClickTryAgain={() => {
                    onImageRemoveAll();
                    handleClickTryAgain();
                  }}
                />
              </>
            ) : (
              <>
                {!!imageList.length &&
                  !listErrors.length &&
                  imageList.map((img) => (
                    <ImagePreview
                      imgSrc={img.dataURL as string}
                      key={img.dataURL}
                      dimension={cropDimension}
                    />
                  ))}
                {isEditing ? (
                  <>
                    <Close handleCancelUpload={handleCancelUpload} />

                    <CropSlider
                      handleChangeCropValue={handleChangeCropValue}
                      handleClickSaveDimension={handleClickSaveDimension}
                    />
                  </>
                ) : (
                  <>
                    {!!imageList.length && <Trash handleClearImages={handleClearImages} />}
                    <InputDropInfo />
                  </>
                )}
              </>
            )}
          </S.InputUploadWrapper>
        )}
      </ImageUploading>
    </S.Container>
  );
};
