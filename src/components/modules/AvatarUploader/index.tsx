import { useEffect, useState } from 'react';
import ImageUploading, { ImageListType, ImageType, ErrorsType } from 'react-images-uploading';
import { InputDropInfo, ImagePreview, InputErrorFeedback } from '@/components';

import * as S from './styles';

export const AvatarUploader = () => {
  const [images, setImages] = useState<ImageType[]>([]);
  const [listErrors, setListErrors] = useState<string[]>([]);

  useEffect(() => {
    console.log(listErrors);
  }, [listErrors]);

  const onChange = (imageList: ImageListType) => setImages(imageList);

  const handleUploadError = (errors: ErrorsType) => {
    if (errors) {
      const typeErrors = Object.keys(errors);

      setListErrors(typeErrors);
    }
  };

  const handleClickTryAgain = () => setListErrors([]);

  return (
    <S.Container>
      <ImageUploading value={images} onChange={onChange} onError={handleUploadError}>
        {({ imageList, onImageUpload, onImageRemoveAll, isDragging, dragProps }) => (
          <S.InputUploadWrapper
            isDragging={isDragging && !listErrors.length}
            error={!!listErrors.length}
            onClick={() => (!listErrors.length ? onImageUpload() : null)}
            {...dragProps}
          >
            {listErrors.length ? (
              <>
                <ImagePreview error />
                <InputErrorFeedback
                  errorTypeList={listErrors}
                  handleClickTryAgain={() => {
                    handleClickTryAgain();
                    onImageRemoveAll();
                  }}
                />
              </>
            ) : (
              <>
                {!!imageList.length &&
                  !listErrors.length &&
                  imageList.map((img) => (
                    <ImagePreview imgSrc={img.dataURL || ''} key={img.dataURL} />
                  ))}
                <InputDropInfo />
              </>
            )}
          </S.InputUploadWrapper>
        )}
      </ImageUploading>
    </S.Container>
  );
};
