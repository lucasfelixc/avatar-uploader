import { ThemeProvider as DefaultThemeProvider } from 'styled-components';
import { GlobalStyles } from './global-styles';
import { theme } from './theme';

type Props = {
  children: React.ReactElement;
};

export const ThemeProvider = ({ children }: Props) => {
  return (
    <DefaultThemeProvider theme={theme}>
      {children}
      <GlobalStyles />
    </DefaultThemeProvider>
  );
};
