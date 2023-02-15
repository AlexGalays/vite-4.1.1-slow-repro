import * as styles from './Button.css'


export function Button() {
    return <button className={`${styles.root} ${styles.size['large']} ${styles.text} ${styles.variant['primary']}`}>Hello</button>
}