import type { Metadata } from 'next'
import { Press_Start_2P, VT323 } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const pressStart = Press_Start_2P({ 
  weight: "400",
  subsets: ["latin"],
  variable: '--font-pixel'
});

const vt323 = VT323({ 
  weight: "400",
  subsets: ["latin"],
  variable: '--font-retro'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://forjadonico.dev'),
  title: {
    default: 'FORJADONICO | Portfólio',
    template: '%s | FORJADONICO',
  },
  description:
    'Portfólio de Nico com projetos de programação, impressão 3D e conteúdo de tecnologia.',
  openGraph: {
    title: 'FORJADONICO | Portfólio',
    description:
      'Conheça os projetos de programação e impressão 3D da FORJADONICO, além de dicas de tecnologia.',
    url: 'https://forjadonico.dev',
    siteName: 'FORJADONICO',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'Marca FORJADONICO',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FORJADONICO | Portfólio',
    description:
      'Projetos de programação e impressão 3D com identidade visual FORJADONICO.',
    images: ['/images/logo.png'],
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${pressStart.variable} ${vt323.variable} font-retro`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
