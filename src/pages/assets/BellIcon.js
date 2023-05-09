import styles from "@/styles/Icon.module.css"

const BellIcon = () => {
    return (
        <svg className={styles.svg}>
            <path className={styles.path}
                d="M13.5 4.24c2.86.7 4.5 3.33 4.5 6.48v5.13l2 2.05v1.02H4V17.9l2-2.05v-5.13c0-3.16 1.63-5.79 4.5-6.48v-.7c0-.85.67-1.54 1.5-1.54s1.5.69 1.5 1.54v.7zm-1.1 17.72a2.04 2.04 0 01-2.41-2.01h4a2.04 2.04 0 01-1.59 2.01z">
            </path>
        </svg>
    )
}

export default BellIcon;