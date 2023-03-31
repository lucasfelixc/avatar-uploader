import styled, { css } from 'styled-components';

type InputUploadWrapperProps = {
  isDragging: boolean;
  error: boolean;
};

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InputUploadWrapper = styled.div<InputUploadWrapperProps>`
  ${({ theme, isDragging, error }) => css`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 2rem;

    background-color: ${theme.colors.grayScale01};

    ${!error &&
    css`
      border: 2px ${isDragging ? 'solid' : 'dashed'} ${theme.colors.grayScale02};
    `}

    border-radius: ${theme.border.radius.large};

    padding: ${theme.spacings.medium};
  `}
`;
