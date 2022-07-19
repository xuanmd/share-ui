import { Theme, ThemeProvider } from '@mui/material/styles';

interface LibraryThemeProviderProps {
  children?: React.ReactNode;
  theme: Theme;
}

export const LibraryThemeProvider: React.FC<LibraryThemeProviderProps> = ({ children, theme }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
)