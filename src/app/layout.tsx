import type { Metadata } from 'next';

import './globals.css';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';

import MUIProvider from '@/components/MUIProvider';

export const metadata: Metadata = {
  title: 'Moa',
  description: '모아',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Moa',
    startupImage: [
      {
        url: '/splash/apple-splash-2048-2732.png',
        media: '(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)',
      },
      {
        url: '/splash/apple-splash-1668-2388.png',
        media: '(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)',
      },
      {
        url: '/splash/apple-splash-1536-2048.png',
        media: '(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)',
      },
    ],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  icons: {
    apple: [{ url: '/icons/icon-192x192.png', sizes: '192x192', type: 'image/png' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='ko'
      suppressHydrationWarning
    >
      <head>
        <link
          rel='apple-touch-icon'
          href='/icons/icon-192x192.png'
        />
        <meta
          name='apple-mobile-web-app-capable'
          content='yes'
        />
        <meta
          name='apple-mobile-web-app-status-bar-style'
          content='black-translucent'
        />
        <meta
          name='apple-mobile-web-app-title'
          content='Moa'
        />
      </head>
      <body>
        <AppRouterCacheProvider>
          <MUIProvider>{children}</MUIProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
