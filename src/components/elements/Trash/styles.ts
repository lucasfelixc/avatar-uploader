import styled, { css } from 'styled-components';

export const TrashContent = styled.div`
  width: 2rem;
  height: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;

  top: 2rem;
  right: 2rem;

  cursor: pointer;
  overflow: hidden;

  ${({ theme }) => css`
    border: 1px solid ${theme.colors.grayScale02};
    border-radius: 50%;

    transition: 150ms;

    &:hover {
      border-color: ${theme.colors.grayScale04};
    }
  `}

  @media (min-width: 720px) {
    top: 2.235rem;
    right: 1.79rem;
  }
`;
