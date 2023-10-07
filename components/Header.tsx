import styles from '../styles/header.module.css'
import Link from 'next/link'

export default function NavBar(){
    return (
        <div className={styles.header}>
            <div className={styles.wrap}>
                <a href='/' className={styles.title}> Nikki Taylor </a>
                <ul className={styles.menu}>
                    <li><Link href='/fun-stuff'>fun stuff</Link></li>
                    <li><Link href='/projects'>projects</Link></li>
                    <li><Link href='/resume'>resume</Link></li>
                </ul>
            </div>
       </div>
    )
}