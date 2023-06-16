'use client'
import Image from "next/image";
import styles from './products.module.css'
import { useBasketContext } from "@/context/basket.context";

const Discount = ({discount}) => {
    return discount !== 0 ? <div className={styles.discount}>
        <div>{discount}%</div>
    </div> : null
}

const Product = ({data}) => { 

    const {basket, addToBasket, removeFromBasket} = useBasketContext();

    const onSiteClickHandler = () => {

        removeFromBasket(data.id)
    };

    const onOrderClickHandler = () => {

        addToBasket(data.id)

    };

    return (<div className={styles.product}>
     
        <div className={styles.productHeader}>
            <Image src={`/${data.media.url}`} width={'1024'} height={'768'} alt="logo"></Image>
           
                <Discount discount={data.discount} />
          
        </div>
        <div className={styles.productContent}>
            <div>
                <h1>{data.title}</h1>
                <p>
                    {data.description}
                </p>
            </div>
            <div className={styles.productFooter}>
                <div>
                    <h2>Pris</h2>
                    <p>{data.price} kr.</p>
                </div>
                <div>
                    <button onClick={onSiteClickHandler}>ACTION</button>
                    <button onClick={onOrderClickHandler}>KØB</button>
                </div>
            </div>
        </div>
        
    </div>)

}

export default Product;