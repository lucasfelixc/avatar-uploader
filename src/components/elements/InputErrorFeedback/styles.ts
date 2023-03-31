import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  gap: 1rem;

  @media (min-width: 720px) {
    align-items: flex-start;
  }
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

    text-decoration: underline;
  `}
`;
