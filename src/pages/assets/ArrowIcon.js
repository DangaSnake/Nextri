import styles from "@/styles/Icon.module.css"

const ArrowIcon = ({ color }) => {
    if (color == "white") {
        return (
            <svg className={styles.arrow} fill="#fff" width="25px" height="25px" viewBox="0 0 36 36">
                <path d="M27.66,15.61,18,6,8.34,15.61A1,1,0,1,0,9.75,17L17,9.81V28.94a1,1,0,1,0,2,0V9.81L26.25,17a1,1,0,0,0,1.41-1.42Z" class="clr-i-outline clr-i-outline-path-1"></path>
                <rect x="0" y="0" width="36" height="36" fill-opacity="0" />
            </svg>
        )
    } else if (color == "black") {
        return (
            <svg className={styles.arrow} fill="#000000" width="25px" height="25px" viewBox="0 0 36 36">
                <path d="M27.66,15.61,18,6,8.34,15.61A1,1,0,1,0,9.75,17L17,9.81V28.94a1,1,0,1,0,2,0V9.81L26.25,17a1,1,0,0,0,1.41-1.42Z" class="clr-i-outline clr-i-outline-path-1"></path>
                <rect x="0" y="0" width="36" height="36" fill-opacity="0" />
            </svg>
        )
    }

}

export default ArrowIcon;