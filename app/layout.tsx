import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import './styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Curso de Inteligência Artificial | Transforme sua Carreira',
  description: 'Domine a IA com um curso premium e 100% online. Aprenda Machine Learning, Deep Learning, ChatGPT e LLMs com certificado incluso. +200 alunos já transformaram suas carreiras.',
  keywords: ['inteligência artificial', 'curso IA', 'machine learning', 'deep learning', 'ChatGPT', 'LLMs', 'curso online', 'certificado IA'],
  authors: [{ name: 'AI Course Academy' }],
  creator: 'AI Course Academy',
  publisher: 'AI Course Academy',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://cursoai.com',
    title: 'Curso de Inteligência Artificial | Transforme sua Carreira',
    description: 'Domine a IA com um curso premium e 100% online. Aprenda Machine Learning, Deep Learning, ChatGPT e LLMs com certificado incluso.',
    siteName: 'Curso de IA',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Curso de Inteligência Artificial',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Curso de Inteligência Artificial | Transforme sua Carreira',
    description: 'Domine a IA com um curso premium e 100% online. Aprenda Machine Learning, Deep Learning, ChatGPT e LLMs com certificado incluso.',
    images: ['/images/twitter-image.jpg'],
    creator: '@cursoai',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: '#00D9FF',
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
