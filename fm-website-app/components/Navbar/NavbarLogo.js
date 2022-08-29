import styles from "./FunctionalMovementNavbar.module.css";
import { Image, Link } from '@nextui-org/react'

const NavbarLogo = ({logo}) => {

  return (
    <div className={styles.navbarLogoContainer}>
      <div>
        <Link href="/">
          <div>
            <Image src={logo} width={100} height={24.48} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NavbarLogo;
