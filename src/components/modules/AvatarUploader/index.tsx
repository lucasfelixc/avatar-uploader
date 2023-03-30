import { useState } from 'react';
import ImageUploading, { ImageListType, ImageType } from 'react-images-uploading';
import { InputDropInfo, ImagePreview } from '@/components';

import * as S from './styles';

export const AvatarUploader = () => {
  const [images, setImages] = useState<ImageType[]>([]);

  const onChange = (imageList: ImageListType) => {
    setImages(imageList);
  };

  return (
    <S.Container>
      <ImageUploading value={images} onChange={onChange}>
        {({ imageList, onImageUpload, isDragging, dragProps }) => (
          <S.InputUploadWrapper isDragging={isDragging} onClick={onImageUpload} {...dragProps}>
            {!!imageList.length &&
              imageList.map((img) => <ImagePreview imgSrc={img.dataURL || ''} key={img.dataURL} />)}

            <InputDropInfo />
          </S.InputUploadWrapper>
        )}
      </ImageUploading>
    </S.Container>
  );
};
