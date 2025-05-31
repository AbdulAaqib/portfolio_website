import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider, useTheme } from '../context/ThemeContext'

function RootLayout({ children }: { children: React.ReactNode }) {
  const { isDarkMode } = useTheme();
  return (
    <div className={isDarkMode ? '' : 'light-mode'}>
      {children}
    </div>
  );
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </ThemeProvider>
  );
}

export default MyApp;
