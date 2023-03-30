import styled, { css } from 'styled-components';

type ContainerProps = {
  imgSrc?: string;
  error?: boolean;
};

export const Container = styled.div<ContainerProps>`
  ${({ theme, imgSrc, error }) => css`
    width: 8.1rem;
    height: 8.1rem;

    display: flex;
    align-items: center;
    justify-content: center;

    ${error
      ? css`
          background-color: ${theme.colors.grayScale03};
        `
      : css`
          background-image: ${`url(${imgSrc})`};
        `}

    border-radius: ${theme.border.radius.full};
  `}
`;
