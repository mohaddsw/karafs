import Link from 'next/link'
import styles from './Hedear.module.scss'

const Hedear = () => {
    return (
        <nav className={styles['nav']}>
            <div className={styles['nav__container']}>
                <ul>
                    <li>
                        <Link href="/">
                            <a>
                                Dashboard
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href={`/users`}>
                            <a >
                            users
                            </a>
                        </Link>
                </li>
            </ul>
        </div>
        </nav >
    )
}
export default Hedear