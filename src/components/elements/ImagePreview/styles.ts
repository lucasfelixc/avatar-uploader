import styled, { css } from 'styled-components';

type ContainerProps = {
  imgSrc: string;
};

export const Container = styled.div<ContainerProps>`
  ${({ theme, imgSrc }) => css`
    width: 10.15rem;
    height: 10.15rem;

    background-image: ${`url(${imgSrc})`};

    border-radius: ${theme.border.radius.full};
  `}
`;
