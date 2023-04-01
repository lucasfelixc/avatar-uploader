import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 2rem;

  ${({ theme }) => css`
    > span.drop-text {
      font-size: ${theme.font.sizes.small};

      color: ${theme.colors.grayScale04};
    }
  `}
`;

export const AnimationContent = styled.div`
  width: 2rem;
  height: 2rem;

  @media (min-width: 720px) {
    width: 3.5rem;
    height: 3.5rem;
  }
`;
