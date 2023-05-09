import styles from "./CollectionSection.module.css";
import classNames from "classnames";

const CollectionSection = () => {

    const GridCard = ({ title, desc, price, reverse, image } ) => {
        return (
            <div className={classNames(styles["grid-card"], reverse && styles["grid-card-reverse"])}>
                <div className={styles["grid-card-text-holder"]}>
                    <h3 className={styles["card-title-text"]}>{title}</h3>
                    {price && <p className={styles["card-price"]}>${price}</p>}
                    {desc && <p className={styles["card-desc-text"]}>{desc}</p>}
                </div>
                <div className={styles["grid-card-image-holder"]}>
                    <img className={styles.image} src={image} />
                </div>
            </div>
        )
    }

    return (
        <div className={styles.card}>
            <div className={styles["title-holder"]}>
                <h2 className={styles.title}>New Collection</h2>
                <p className={styles.desc}>The best new collection of collections, we are a different kind of e-commerce. Selling only high quality products.</p>
            </div>

            <div className={styles.grid}>
                <GridCard title="Barudak Retirement Thug Style" image="collection-images/male-1.png" desc="A newly released shirt and pant combo, perfect for the ultimate streetwear look!"/>
                <GridCard title="Minimalistic Round Black Hat"  image="collection-images/male-2.png" price="29.99"/>
                <GridCard title="A New Pair of Shoes" image="collection-images/shoe-1.png" reverse="true" desc="A newly released shirt and pant combo, perfect for the ultimate streetwear look!"/>
                <GridCard title="New Couples Clothes Collection" image="collection-images/couple-1.png" reverse="true" desc="A newly released shirt and pant combo, perfect for the ultimate streetwear look!"/>

            </div>
        </div>
    )
}

export default CollectionSection;