import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 1rem;

  ${({ theme }) => css`
    > span.crop-title {
      font-weight: ${theme.font.weights.normal};

      color: ${theme.colors.grayScale04};
    }
  `}

  @media (min-width: 720px) {
    width: fit-content;

    align-items: flex-start;
  }
`;

export const InputRange = styled.input`
  ${({ theme }) => css`
    width: 100%;
    height: 2px;

    border-radius: 1px;

    ::-webkit-slider-thumb {
      -webkit-appearance: none !important;

      width: 1.2rem;
      height: 1.2rem;

      background-color: ${theme.colors.infoBlue};

      border-radius: 50%;
      cursor: pointer;
    }

    @media (min-width: 720px) {
      width: 17.25rem;
    }
  `}
`;

export const ContentButton = styled.div`
  width: 100%;

  display: flex;
  align-items: center;

  @media (min-width: 720px) {
    justify-content: flex-end;
  }
`;

export const ButtonSubmit = styled.button`
  ${({ theme }) => css`
    width: 100%;
    height: 2.286rem;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: ${theme.font.sizes.small};

    margin-top: 1.5rem;

    background-color: ${theme.colors.grayScale06};
    color: ${theme.colors.white};

    border: none;
    border-radius: ${theme.border.radius.xlarge};

    @media (min-width: 720px) {
      width: 6.8125rem;
      height: 2rem;
    }
  `}
`;
