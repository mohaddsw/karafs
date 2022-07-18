import Navbar from '../Hedear/Hedear'
import Footer from '../Footer/Footer'
import styles from './container.module.scss'

export default function Layout({ children }) {
  return (
    <>
    <Navbar/>
      <main className={styles['main']}>{children}</main>
    <Footer/>
    </>
  )
}