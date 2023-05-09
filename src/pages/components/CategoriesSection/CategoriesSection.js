import ArrowIcon from "@/pages/assets/ArrowIcon";
import styles from "./CategoriesSection.module.css";

const CategoriesSection = () => {
    return (
        <div className={styles.card}>
            <div className={styles["title-bar"]}>
                <h2>Our Categories</h2>
                <button className={styles["see-all-button"]}>See All <ArrowIcon color="white" /></button>
            </div>
            <div className={styles.grid}>
                <div className={`${styles["grid-card"]} ${styles["first-grid-card"]}`}>
                    <img src="female-2-no-bg.png" className={styles["grid-image"]} />
                    <button className={styles["grid-button"]}>Tops <ArrowIcon color="white" /></button>
                </div>
                <div className={styles["grid-card"]}>
                    <button className={styles["grid-button"]}>Bottoms <ArrowIcon color="white" /></button>
                    <img src="pants-photo.png" className={`${styles["grid-image"]} ${styles.pants}`} />
                </div>
                <div className={styles["grid-card"]}>
                    <button className={styles["grid-button"]}>Accessories <ArrowIcon color="white" /></button>
                    <img src="hat-photo.png" className={`${styles["grid-image"]} ${styles.hat}`} />
                </div>
                <div className={styles["grid-card"]}>
                    <button className={styles["grid-button"]}>Footwear <ArrowIcon color="white" /></button>
                    <img src="shoe-photo.png" className={`${styles["grid-image"]} ${styles.shoe}`} />
                </div>
            </div>

        </div>
    )
}

export default CategoriesSection;