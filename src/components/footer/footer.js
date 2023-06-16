import Link from 'next/link';
import styles from './footer.module.css';

const Footer = () => {

    return <div className={styles.footer}>
            <div>&copy; Webudvilker <Link href={'https://mcdm.dk'} target={'_blank'}>MCDM</Link> 2023</div>
    </div>

};

export default Footer;