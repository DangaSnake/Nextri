import styles from "./IntroSection.module.css"
import ArrowIcon from "../../assets/ArrowIcon";
import HeartIcon from "../../assets/HeartIcon";
import { useEffect, useState } from "react";
import HeartIconRed from "@/pages/assets/HeartIconRed";

const IntroSection = () => {
    const [cardHearted, setCardHearted] = useState(false);
    const [currentCard, setCurrentCard] = useState(0);
    const [nextCardIndex, setNextCardIndex] = useState(1);
    const [buttonClicked, setButtonClicked] = useState("left");
    const [cardList, setCardList] = useState([
        ["Off-white Hoodie", "Third Eye Hoodies", "$29.99", "female-no-bg.png", false],
        ["Charcoal Suit", "Brixton Fabric", "$29.99", "male-no-bg.png", false],
        ["Black Joggers", "Lunar Athletics", "$34.99", "product-images/image-3.png", false],
      ]);

    useEffect(() => {console.log(cardList)}, [cardList]);

    useEffect(() => {
        if (currentCard === cardList.length - 1) {
            setNextCardIndex(0);
        } else {
            setNextCardIndex(currentCard + 1);
        }
        setCardHearted(cardList[currentCard][4]);
    }, [currentCard])


    useEffect(() => {console.log(currentCard)}, [currentCard])  

    const handleNextCard = () => {
        setButtonClicked("right");
        if (currentCard === cardList.length - 1) {
            setCurrentCard(0);
        } else {
            setCurrentCard(currentCard + 1);
        }
    }

    const handleBackCard = () => {
        setButtonClicked("left");
        if (currentCard == 0) {
            setCurrentCard(cardList.length - 1);
        } else {
            setCurrentCard(currentCard - 1);
        }
    }

    const handleCardHearted = () => {
        setCardHearted(!cardHearted)
        setCardList((prev) => {
            let array = prev;
            array[currentCard][4] = !cardHearted;
            return array;
        })
    }







    return (
        <section className={styles["intro-section"]}>
            <div className={styles["intro-left-side"]}>
                <h2 className={styles["intro-header"]}>Elevate your <br />style with the<br />latest streetware</h2>
                <button className={styles["shop-now-button"]}>Shop Now <ArrowIcon color="white" /></button>
                <h3 className={styles["brand-icon-title"]}>Brand Partners</h3>
                <div className={styles["brand-icon-box"]}>
                    <img src="nike-icon.png" />
                    <img src="adidas-icon.png" />
                    <img src="northface-icon.png" />
                    <img src="puma-icon.png" />
                    <img src="reebok-icon.png" className={styles["reebok-icon"]} />
                </div>
            </div>
            <div className={styles["intro-right-side"]}>
                <div className={styles["card-holder"]}>
                    <div className={styles.card}>
                        <img className={styles["card-image"]} src={cardList[currentCard][3]} />
                        <button onClick={handleCardHearted} className={styles["card-heart-button"]}>
                            {cardHearted ? <HeartIconRed/> : <HeartIcon />}
                        </button>
                    </div>
                    <div className={styles["card-details"]}>
                        <p className={styles["product-name"]}>{cardList[currentCard][0]}</p>
                        <p className={styles["company-name"]}>{cardList[currentCard][1]}</p>
                        <p className={styles["product-price"]}>{cardList[currentCard][2]}</p>
                    </div>
                </div>
                <div className={styles["next-card-section"]}>
                    <div className={styles["next-card-holder"]}>
                        <div className={styles["next-card"]}>
                            <img className={styles["next-card-image"]} src={cardList[nextCardIndex][3]} />
                        </div>
                        <div className={styles["card-details"]}>
                            <p className={styles["product-name"]}>{cardList[nextCardIndex][0]}</p>
                            <p className={styles["company-name"]}>{cardList[nextCardIndex][1]}</p>
                            <p className={styles["product-price"]}>{cardList[nextCardIndex][2]}</p>
                        </div>
                    </div>
                    <div className={styles["forward-back-button-holder"]}>
                        <button><img src={buttonClicked == "left" ? "arrow-button-black.png":"arrow-button-white.png"} onClick={handleBackCard} className={styles["flipped-button"]}/></button>
                        <button><img src={buttonClicked == "right" ? "arrow-button-black.png":"arrow-button-white.png"} onClick={handleNextCard} /></button>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default IntroSection;