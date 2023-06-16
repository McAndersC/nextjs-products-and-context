'use client'

import { createContext, useContext, useEffect, useState } from "react";

const BasketContext = createContext({});

export const BasketContextProvider = ({children}) => {

    const [basket, setBasket] = useState([]);

    useEffect(() => {
        let value = null;
        value = localStorage.getItem('basket') || null;

        if(value) {
            value = JSON.parse(value);
            setBasket(value);
        }

    }, [setBasket])

    const saveToLocalStorage = (detViVilGemme) => {


        localStorage.setItem("basket", detViVilGemme);

    }

    const addToBasket = (id) => {

        if(basket.find( (product) => product.id === id )) { 
            return;
        }

        let basketItem = {
            id: id,
            amount : 1
        }

        setBasket([...basket, basketItem])
        saveToLocalStorage(JSON.stringify([...basket, basketItem]))

    }

    const removeFromBasket = (id) => {

        if(basket.find( (product) => product.id === id )) {

            let productIndex = basket.findIndex( (product) => product.id === id );
            basket.splice(productIndex, 1);
            console.log('removeFromBasket', id, productIndex)
            setBasket([...basket])
            saveToLocalStorage(JSON.stringify([...basket]))

        } else {
            return;
        }

    

     
    }


    return (
        <BasketContext.Provider value={{basket, addToBasket, removeFromBasket}}>
            {children}
        </BasketContext.Provider>
    )

}

export const useBasketContext = () => useContext(BasketContext)