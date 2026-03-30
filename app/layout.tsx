import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Rocio Abad — Designer',
  description: 'Graphic Designer based in Madrid with 16 years of experience in branding, typography and web design.',
  openGraph: {
    title: 'Rocio Abad — Designer',
    description: 'Graphic Designer based in Madrid with 16 years of experience.',
    url: 'https://www.rocioabad.com',
    siteName: 'Rocio Abad',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#0a0a0a" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body>
        <Nav />
        <main className="page">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
