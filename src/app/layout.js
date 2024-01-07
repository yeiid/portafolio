import { Inter } from 'next/font/google'
import './globals.css'
import 'boxicons/css/boxicons.min.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App'
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">

      <body className={inter.className}>
       
        {children}
        
        </body>
    </html>
  )
}
