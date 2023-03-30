import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  gap: 1rem;

  ${({ theme }) => css`
    > span.input-description-organization {
      color: ${theme.colors.grayScale04};

      font-weight: ${theme.font.weights.normal};
    }
  `}
`;

export const DescriptionInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  ${({ theme }) => css`
    > span {
      color: ${theme.colors.grayScale05};
    }
  `}
`;
