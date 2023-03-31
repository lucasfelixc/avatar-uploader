import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  gap: 2rem;

  ${({ theme }) => css`
    > span.drop-text {
      font-size: ${theme.font.sizes.small};

      color: ${theme.colors.grayScale04};
    }
  `}
`;

export const AnimationContent = styled.div`
  width: 3.5rem;
  height: 3.5rem;
`;
