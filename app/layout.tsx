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
  title: 'ForjaDoNico | PLAYER 1 READY',
  description: 'Portfólio pessoal de ForjaDoNico - Desenvolvedora e criadora de conteudo. INSERT COIN TO START.',
  generator: 'v0.app',
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
}

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
