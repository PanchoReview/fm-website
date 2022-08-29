import FunctionalMovementNavbar from '../Navbar/FunctionalMovementNavbar'

const Layout = ({ children }) => {
    return(
        <>
            <FunctionalMovementNavbar />
            {children}
        </>
    )
}

export default Layout