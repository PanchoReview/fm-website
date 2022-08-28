import NavBar from '../Navbar/FunctionalMovementNavbar'

const Layout = ({ children }) => {
    return(
        <>
            <NavBar />
            {children}
        </>
    )
}

export default Layout