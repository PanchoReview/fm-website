import NavBar from '../Navbar/Navbar'

const Layout = ({ children }) => {
    return(
        <>
            <NavBar />
            {children}
        </>
    )
}

export default Layout