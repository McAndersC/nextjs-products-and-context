import Navigation from '@/components/navigation/navigation'
import './globals.css'
import { Titillium_Web } from 'next/font/google'
import Footer from '@/components/footer/footer'
import { BasketContextProvider } from '@/context/basket.context'
import Basket from '@/components/basket/basket'


const titillium = Titillium_Web({ subsets: ['latin'], weight : ['200', '300', '400', '600'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={titillium.className}>
        
        <BasketContextProvider>
          <Navigation></Navigation>
            <Basket></Basket>
            {children}
          <Footer></Footer>
        </BasketContextProvider>
      </body>
    </html>
  )
}