import { RenderResult } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { ImageProvider } from '@/context/ImageContext';

import { theme } from '@/styles/theme';

export const WrapperTheme = (
  fn: (children: React.ReactElement) => RenderResult,
  children: React.ReactElement,
) =>
  fn(
    <ImageProvider>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ImageProvider>,
  );
