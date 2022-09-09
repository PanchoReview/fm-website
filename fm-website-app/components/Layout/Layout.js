import FunctionalMovementNavbar from '@components/Navbar/FunctionalMovementNavbar'
import ScrollToTop from '@components/ScrollToTop/ScrollToTop'
import Footer from '@components/Footer/Footer'

const Layout = ({ children }) => {
    return(
        <>
            <FunctionalMovementNavbar />
            {children}
            <Footer />
            <ScrollToTop />
        </>
    )
}

export default Layout