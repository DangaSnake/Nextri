import styles from '@/styles/Header.module.css'
import BellIcon from '@/pages/assets/BellIcon';
import HeartIcon from '@/pages/assets/HeartIcon';
import CartIcon from '@/pages/assets/CartIcon';

const Header = () => {
    return (
        <div className={styles["header-div"]}>
            <div className={styles["title-logo-holder"]}>
                <img className={styles.logo} src="nextri-logo.png" />
                <h1 className={styles.title}>Nextri</h1>
            </div>
            <nav className={styles.navbar}>
                <span className={styles["nav-selected"]}>Home</span>
                <span className={styles["nav-link"]}>Man</span>
                <span className={styles["nav-link"]}>Woman</span>
                <span className={styles["nav-link"]}>Coming Soon</span>
            </nav>
            <div className={styles["profile-corner-ui"]}>
                <div>
                    <BellIcon />
                    <HeartIcon />
                    <CartIcon />
                </div>
                <div className={styles.line} />
                <img className={styles.pfp} src="profile-pic.png" />
            </div>

        </div>
    )
}

export default Header;