import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTheme, Navbar, Text, Image, Link as NextUiLink } from "@nextui-org/react";
import NavbarThemeSwitch from "./NavbarThemeSwitch";
import styles from './FunctionalMovementNavbar.module.css'

const isActiveLink = (href) => {
  const router = useRouter()
  return router.asPath === href  
}

const routes = [
  { title: "Home", href: "/" },
  { title: "Quiénes somos", href: "/about/" },
  { title: "Contacto", href: "/contact/" },
]

const FunctionalMovementNavbar = () => {  
  const { isDark, type } = useTheme();
  const logo = isDark ? "/Isotipo-blanco.svg" : "/Isotipo-negro.svg";

  return (
    <Navbar isBordered={isDark} variant="sticky" id={styles.fmNavbar}>
      <Navbar.Brand>
        <Link href="/">
          <NextUiLink color="inherit">
            <Image src={logo} width={100} height={24.48} />    
            <Text b color="inherit" hideIn="xs">
              Functional Movement
            </Text>  
          </NextUiLink>
        </Link>    
      </Navbar.Brand>
      <Navbar.Content>
        {routes.map(route => 
          <Link href={route.href} key={route.title}>
            <Navbar.Link isActive={isActiveLink(route.href)}>{route.title}</Navbar.Link>
          </Link>     
        )}
      </Navbar.Content>
      <Navbar.Content>
        <Navbar.Item>
          <NavbarThemeSwitch isDark={isDark} type={type} />
        </Navbar.Item>      
      </Navbar.Content>
    </Navbar>
  );
};

export default FunctionalMovementNavbar;
