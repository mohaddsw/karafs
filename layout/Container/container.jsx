import Navbar from '../Hedear/Hedear'
import Footer from '../Footer/Footer'

export default function Layout({ children }) {
  return (
    <>
    <Navbar/>
      <main>{children}</main>
    <Footer/>
    </>
  )
}