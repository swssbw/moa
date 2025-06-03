'use client';
import { ThemeProvider } from '@mui/material';
import theme from '@/components/MoaTheme';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
