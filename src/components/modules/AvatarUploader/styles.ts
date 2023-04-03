import styled, { css } from 'styled-components';

type InputUploadWrapperProps = {
  isDragging: boolean;
  error: boolean;
  isEditing: boolean;
  hasImage: boolean;
};

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 720px) {
    width: 34.5625rem;
    height: 11.0625rem;
  }
`;

export const InputUploadWrapper = styled.div<InputUploadWrapperProps>`
  ${({ theme, isDragging, error, isEditing, hasImage }) => css`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    position: relative;

    gap: 2rem;

    background-color: ${theme.colors.grayScale01};

    ${!error &&
    !isEditing &&
    css`
      border: 2px ${isDragging ? 'solid' : 'dashed'} ${theme.colors.grayScale02};

      cursor: pointer;
    `}

    border-radius: ${theme.border.radius.large};

    padding: ${theme.spacings.medium};

    &:active,
    &:hover {
      border-color: rgba(63, 128, 255, 0.4);
    }

    @media (min-width: 720px) {
      justify-content: ${hasImage ? 'flex-start' : 'center'};
      flex-direction: row;

      padding-block: 0;
    }
  `}
`;
