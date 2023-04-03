import styled, { css } from 'styled-components';

type ContainerProps = {
  imgSrc?: string;
  error?: boolean;
  dimension?: number;
};

export const Wrapper = styled.div`
  width: 8.1rem;
  height: 8.1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;

  ${({ theme }) => css`
    border-radius: ${theme.border.radius.full};
  `}
`;

export const Container = styled.div<ContainerProps>`
  ${({ theme, imgSrc, error, dimension }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    ${error
      ? css`
          background-color: ${theme.colors.grayScale03};
        `
      : css`
          background-image: ${`url(${imgSrc})`};
          background-position: center;
          background-repeat: no-repeat;
          background-size: 100%;
          transform: scale(${dimension});
        `}

    border-radius: ${theme.border.radius.full};

    @media (min-width: 720px) {
      width: 7.125rem;
      height: 7.125rem;
    }
  `}
`;
