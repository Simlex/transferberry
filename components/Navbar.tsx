import { FunctionComponent, ReactElement } from "react";
import styles from '@/styles/navbar.module.scss';

interface NavbarProps {
    
}
 
const Navbar: FunctionComponent<NavbarProps> = ():ReactElement => {
    return ( 
        <div className={styles.navContainer}>
            <p className={styles.title}>Transferberry</p>
            <div className={styles.navContainer__navLinks}>
                <p className={styles.active}>Home</p>
                <p>About</p>
                <p>Resource hub</p>
                <p>Support group</p>
                <p>Contact</p>
            </div>
            <div className={styles.navContainer__cta}>
                <button>Login</button>
                <button>Sign up</button>
            </div>
        </div>
     );
}
 
export default Navbar;