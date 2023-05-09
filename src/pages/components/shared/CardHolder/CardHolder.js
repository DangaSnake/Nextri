import HeartIcon from "@/pages/assets/HeartIcon";
import styles from "./CardHolder.module.css";
import HeartIconRed from "@/pages/assets/HeartIconRed";
import { useState } from "react";


const CardHolder = ({ image, company, product, price }) => {
    const [hearted, setHearted] = useState(false);


    return (
        <div className={styles["card-holder"]}>
            <div className={styles.card}>
                <img className={styles["card-image"]} src={image} />
                <button onClick={() => {setHearted(!hearted)}} className={styles["card-heart-button"]}>
                    {hearted? <HeartIconRed /> : <HeartIcon />}
                </button>
            </div>
            <div className={styles["card-details"]}>
                <p className={styles["product-name"]}>{product}</p>
                <p className={styles["company-name"]}>{company}</p>
                <p className={styles["product-price"]}>{price}</p>
            </div>
        </div>
    )
}

export default CardHolder;