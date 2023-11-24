import './globals.css'
import Navbar from './components/Navbar'

export const metadata = {
  title: 'JWT + Toast',
  description: 'Project for PTAC',
}

export default function RootLayout({ children }) {
  return (
    <html lang='pt-br'>
      <body className='bg-pink-50 grid grid-cols-1 justify-items-center'>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}