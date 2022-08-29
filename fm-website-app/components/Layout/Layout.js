import FunctionalMovementNavbar from '../Navbar/FunctionalMovementNavbar'
import ScrollToTop from '../ScrollToTop/ScrollToTop'

const Layout = ({ children }) => {
    return(
        <>
            <FunctionalMovementNavbar />
            {children}
            <ScrollToTop />
        </>
    )
}

export default Layout