'use client'
import { useBasketContext } from '@/context/basket.context';
import styles from './basket.module.css'
import BasketProduct from './basketProduct';

const Basket = () => {

    const {basket} = useBasketContext();

  
    return (
        <pre className={styles.basket}>

            {basket.map( (basketProduct) => <div key={basketProduct.id}>
                
                <BasketProduct basketProduct={basketProduct}></BasketProduct>
                
            </div> )}

        </pre>
    )

}

export default Basket;