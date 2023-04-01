import { RenderResult } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { theme } from '@/styles/theme';

export const WrapperTheme = (
  fn: (children: React.ReactElement) => RenderResult,
  children: React.ReactElement,
) => fn(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
