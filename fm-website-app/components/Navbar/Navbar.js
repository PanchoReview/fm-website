import styles from './Navbar.module.css'
import { useTheme } from '@nextui-org/react'
import NavbarLogo from './NavbarLogo';
import NavbarThemeSwitch from './NavbarThemeSwitch';

const Navbar = () => {    
    const { isDark, type } = useTheme();
    const logo = isDark ? "Isotipo-blanco.svg" : "Isotipo-negro.svg"

    return(
        <nav id="navbar-container" className={styles.navbar}>
            <div className={styles.navbarBackdrop}>
                <nav className={styles.navbarElementsContainer}>
                    <NavbarLogo logo={logo} />
                    <NavbarThemeSwitch isDark={isDark} type={type} />
                </nav>
            </div>
        </nav>
    )
}

export default Navbar