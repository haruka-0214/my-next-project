import Link from 'next/link';
import styles from "./index.module.css";

export default function Footer(){
    return(
        <footer className={styles.Footer}>
            <nav className={styles.nav}>
                <ul className={styles.items}>
                    <li className={styles.items}>
                       <Link href="/members">ニュース</Link>
                    </li>
                    <li className={styles.items}>
                        <Link href="/members">メンバー</Link>
                    </li>
                    <li className={styles.items}>
                        <Link href="/members">お問い合わせ</Link>
                    </li>
                </ul>
            </nav>
            <p className={styles.cr}>© SIMPLE.ALL Rigths Reserved 2024</p>
        </footer>
    );
}
        
            