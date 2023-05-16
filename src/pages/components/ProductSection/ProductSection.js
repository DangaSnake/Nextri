import classNames from "classnames";
import CardHolder from "../shared/CardHolder/CardHolder";
import styles from "./ProductSection.module.css";
import {useState} from "react";

const ProductSection = () => {
    const [selectedButton, setSelectedButton] = useState("All");
    const [searchInput, setSearchInput] = useState("");

    const productArray = [
        ["Off-white Hoodie", "Third Eye Hoodies", "$29.99"],
        ["Black Jacket", "Infinite Tees", "$19.99"],
        ["Black Joggers", "Lunar Athletics", "$34.99"],
        ["Blue Sweatshirt", "Galactic Gear", "$39.99"],
        ["Green Tank Top", "Nature's Outfitters", "$24.99"],
        ["White Shorts", "Cloud Nine Clothing", "$27.99"],
        ["Purple Hoodie", "Mystical Apparel", "$44.99"],
        ["Gray T-Shirt", "Urban Style Co.", "$21.99"]
      ];

    const buttonArray = ["All", "T-Shirt", "Jacket", "Shirt", "Pants", "Shoes", "Glasses", "Watches", "Hats"];
   
    return (
        <div className={styles["product-section"]}>
            <div className={styles["search-section"]}>
                <div className={styles.search}>
                    <img onClick={() => setSearchInput("")} src="search-icon.png" className={styles["search-icon"]} />
                    <input type="text" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} placeholder="Search" className={styles["search-input"]}></input>
                </div>
                <button className={styles["filter-button"]}>
                    <img src="filter-icon.png" className={styles["filter-icon"]} />
                    <span className={styles["filter-button-text"]}>Filter</span>
                </button>

            </div>
            <div className={styles["product-type-bar"]}>
                {/* <button className={styles.button}>All</button>
                <button className={styles["button-off"]}>T-Shirt</button> */}
                {buttonArray.map((buttonText, index) => {
                    return (
                    <button key={index} onClick={() => setSelectedButton(buttonText)} className={classNames(styles.button, buttonText != selectedButton && styles["button-off"] )}>{buttonText}</button>)
                })}
                    
            </div>
            <div className={styles["card-grid"]}>
                {productArray.map((productInfo, index) => (
                    <CardHolder key={index} price={productInfo[2]} company={productInfo[1]} product={productInfo[0]} image={`product-images/image-${index + 1}.png`} />
                ))}
            </div>
        </div>
    )
}

export default ProductSection;