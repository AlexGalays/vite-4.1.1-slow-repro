import * as styles from './Button2.css'


export function Button2() {
    return <button className={`${styles.root} ${styles.size['large']} ${styles.text} ${styles.variant['primary']}`}>Hello</button>
}