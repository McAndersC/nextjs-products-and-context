'use client'
import Product from '@/components/products/product'
import styles from './page.module.css'
import Products from '@/components/products/products'
import { useBasketContext } from '@/context/basket.context';

const BasketCount = () => {

  const {basket} = useBasketContext();

  return ( <div>{basket.length}</div> )

}

export default function Home() {
  return (
    <main className={styles.main}>

      <BasketCount></BasketCount>
      
      <Products></Products>
     
    </main>
  )
}
