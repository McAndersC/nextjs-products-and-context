'use client'
import styles from "./navigation.module.css";
import Link from "next/link";
import { navdata } from "./navigation.service";
import { useState } from "react";
import { useBasketContext } from "@/context/basket.context";

const McDmLogo = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 100 100"
      {...props}
    >
      <path d="M93.2 20.31 9.83.38C2.6-1.35-1.57 3.06.55 10.18l24.42 82.17c2.12 7.13 8.04 8.54 13.16 3.14l58.96-62.24c5.08-5.4 3.35-11.22-3.88-12.95ZM77.29 43.67l-30.2 31.86c-8.15 8.61-17.57 6.35-20.92-5.01L13.68 28.43C10.29 17.1 16.96 10.08 28.5 12.84l42.69 10.2c11.5 2.75 14.25 12.03 6.1 20.64Z" />
      <path d="M27.83 58.45c-.99.11-1.83-.6-1.94-1.59l-2.12-27.98c-.07-.99.92-2.36 2.19-2.51l9.7-1.13c.99-.11 1.8.39 2.15 1.31l3.42 11.18c.49 1.13 1.66.42 1.66-.18l1.06-11.68c.14-.99.67-1.66 1.62-1.76l9.84-1.16c.99-.11 2.51.46 2.75 1.94l4.2 27.84c.14.99-.53 1.87-1.52 1.98l-4.62.49c-.99.11-1.55-.67-1.69-1.62L52.2 36.82c-.18-1.09-1.66-.99-1.94.21L48.6 48.71c-.14.99-1.06 1.87-2.05 1.98l-5.68.64c-.99.11-2.08-.56-2.43-1.48l-4.13-11.01c-.39-.92-1.8-.99-1.83.21l1.45 16.72c.07.99-.85 2.01-1.83 2.12l-4.27.56Z" />
    </svg>
)


const Navigation = () => {

    const [navActive, setNavActive] = useState(false);
    const {basket} = useBasketContext();

    return (  
        <div className={`${styles.navigation} ${navActive ? styles.active : null}`}> 

            <div className={styles.navbar}>

                <div className={styles.logo}>
                    <McDmLogo style={{fill : '#fff'}} width={'100%'} height={'100%'}></McDmLogo>
                </div>
                <div>
                    KURV ( {basket.length})
                </div>
                <div className={styles.actions} >
                    <div onClick={() => setNavActive(!navActive)}>BURGER</div>
                </div>

            </div>

            <div>
                <div className={styles.navpane}>
                    <div className={styles.lists}>
                    
                        <Link href="/">HJEM</Link>

                    </div>
                </div>
            </div>

        </div>

    )

}

export default Navigation;