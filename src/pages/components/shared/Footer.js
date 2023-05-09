import ArrowIcon from "@/pages/assets/ArrowIcon";
import styles from "@/styles/Footer.module.css";
import { useState } from "react";

const Footer = () => {
    const [userEmail, setUserEmail] = useState("");

    return (
        <footer className={styles.section}>
            <div className={styles["title-section"]}>
                <div className={styles["title-logo-holder"]}>
                    <img className={styles.logo} src="nextri-logo-white.png" alt="Nextri Logo" />
                    <h1 className={styles.title}>Nextri</h1>
                </div>
                <p className={styles.tagline}>Take Your Fashion Game to the Next Level with Our Streetware Collection</p>
            </div>
            <div className={styles["links-section"]}>
                <ul className={styles["link-column"]}>
                    <li>About</li>
                    <li>Company</li>
                    <li>Contact</li>
                </ul>
                <ul className={styles["link-column"]}>
                    <li>Discover</li>
                    <li>Collaboration</li>
                    <li>Coming Soon</li>
                </ul>
                <ul className={styles["link-column"]}>
                    <li>FAQ</li>
                    <li>Term of Service</li>
                    <li>Policy Service</li>
                </ul>
            </div>
            <div className={styles["signup-section"]}>
                <h2 className={styles["mail-list-text"]}>Join our mailing list:</h2>
                <div className={styles["email-input-holder"]}>
                    <input className={styles.email} type="text" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} placeholder="Enter your email" />
                    <div onClick={() => setUserEmail("")} style={{transform: "scale(.9)"}}>
                        <ArrowIcon color="white" />
                    </div>

                </div>
            </div>
        </footer>
    )
};

export default Footer;