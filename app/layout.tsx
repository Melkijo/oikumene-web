import './globals.css'
import type { Metadata } from 'next'
import { work_sans,lalezar } from './fonts'


export const metadata: Metadata = {
  title: 'UKM Oikumene',
  description: 'UKM Oikumene universitas mataram',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${work_sans.variable} ${lalezar.variable}`}>
      <body >{children}</body>
    </html>
  )
}
