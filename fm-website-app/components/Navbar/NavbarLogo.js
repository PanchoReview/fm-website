import styles from "./FunctionalMovementNavbar.module.css";
import { Image, Link } from '@nextui-org/react'

const NavbarLogo = ({logo}) => {
  return (
    <Link href="/">
      <Image src={logo} width={100} height={24.48} />          
    </Link>
  );
};

export default NavbarLogo;
