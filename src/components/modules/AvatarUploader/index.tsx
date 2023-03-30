import { useState } from 'react';
import ImageUploading, { ImageListType } from 'react-images-uploading';
import { InputDropInfo } from '@/components';

import * as S from './styles';

export const AvatarUploader = () => {
  const [images, setImages] = useState([]);

  const onChange = (imageList: ImageListType) => {
    setImages(imageList as never[]);
  };

  return (
    <S.Container>
      <ImageUploading value={images} onChange={onChange}>
        {({ onImageUpload, isDragging, dragProps }) => (
          <S.InputUploadWrapper isDragging={isDragging} onClick={onImageUpload} {...dragProps}>
            <InputDropInfo />
          </S.InputUploadWrapper>
        )}
      </ImageUploading>
    </S.Container>
  );
};
