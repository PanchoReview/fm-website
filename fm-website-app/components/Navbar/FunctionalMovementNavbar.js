import { useTheme, Navbar, Text, Button, Link } from "@nextui-org/react";
import NavbarLogo from "./NavbarLogo";
import NavbarThemeSwitch from "./NavbarThemeSwitch";

const FunctionalMovementNavbar = () => {
  const { isDark, type } = useTheme();
  const logo = isDark ? "Isotipo-blanco.svg" : "Isotipo-negro.svg";

  return (
    <Navbar isBordered={isDark} variant="sticky">
      <Navbar.Brand>
        <NavbarLogo logo={logo} />
        <Text b color="inherit" hideIn="xs">
          Functional Movement
        </Text>
      </Navbar.Brand>
      <Navbar.Content hideIn="xs">
        <Navbar.Link isActive href="#">Home</Navbar.Link>
        <Navbar.Link href="#">
          Quiénes somos
        </Navbar.Link>
        <Navbar.Link href="#">Contacto</Navbar.Link>        
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
