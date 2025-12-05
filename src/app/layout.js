import './globals.css'

export const metadata = {
  title: 'Bell Anton Portfolio',
  description: "Bell Anton's Portfolio - Computer Science Student at Partido State University",
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}