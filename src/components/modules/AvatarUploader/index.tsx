import { useState } from 'react';
import ImageUploading, { ImageListType, ImageType, ErrorsType } from 'react-images-uploading';
import {
  InputDropInfo,
  ImagePreview,
  InputErrorFeedback,
  CropSlider,
  Close,
  UploadAnimation,
} from '@/components';

import * as S from './styles';

export const AvatarUploader = () => {
  const [images, setImages] = useState<ImageType[]>([]);
  const [previewImage, setPreviewImage] = useState<ImageType[]>([]);
  const [listErrors, setListErrors] = useState<string[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [cropDimension, setCropDimension] = useState(100);
  const [previewCropDimension, setPreviewCropDimension] = useState(100);

  const onChange = (imageList: ImageListType) => {
    setCropDimension(100);
    setIsEditing(true);
    setImages(imageList);
  };

  const handleUploadError = (errors: ErrorsType) => {
    if (errors) {
      setIsEditing(false);
      const typeErrors = Object.keys(errors);

      setListErrors(typeErrors);
    }
  };

  const handleClickTryAgain = () => {
    setListErrors([]);
    setIsEditing(false);
  };

  const handleChangeCropValue = (value: string) =>
    parseInt(value) % 10 === 0 ? setCropDimension(parseInt(value)) : null;

  const handleClickSaveDimension = () => {
    setIsEditing(false);
    setPreviewImage(images);
    setPreviewCropDimension(cropDimension);
  };

  const handleCancelUpload = () => {
    setIsEditing(false);
    setImages(previewImage);
    setCropDimension(previewCropDimension);
  };

  return (
    <S.Container>
      <ImageUploading value={images} onChange={onChange} onError={handleUploadError}>
        {({ imageList, onImageUpload, onImageRemoveAll, isDragging, dragProps }) => (
          <S.InputUploadWrapper
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
                      imgSrc={img.dataURL || ''}
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
                  <InputDropInfo />
                )}
              </>
            )}
          </S.InputUploadWrapper>
        )}
      </ImageUploading>
    </S.Container>
  );
};
