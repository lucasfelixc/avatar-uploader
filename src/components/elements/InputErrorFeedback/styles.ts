import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  gap: 1rem;
`;

export const ContentErrorsText = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.errorFeedback};

    font-weight: ${theme.font.weights.normal};
  `}
`;

export const TryButton = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.grayScale06};

    font-size: ${theme.font.sizes.xsmall};

    text-decoration: underline;
  `}
`;
