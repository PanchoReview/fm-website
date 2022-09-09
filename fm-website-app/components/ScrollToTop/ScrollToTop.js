import { useEffect, useState } from "react"
import { Button } from "@nextui-org/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUp } from "@fortawesome/free-solid-svg-icons"
import classNames from "@utils/classNames"
import styles from "./ScrollToTop.module.css"

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false)

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true)
        }
        else{
            setIsVisible(false)
        }
    }

    const scrollToTop = () => {
        if (isVisible) {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        }        
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility)

        return () => {
            window.removeEventListener("scroll", toggleVisibility)
        }
    }, [])

    return(
        <div className={styles.scrollToTopContainer}>
            <Button rounded auto
                icon={<FontAwesomeIcon icon={faArrowUp} className={styles.icon} />} 
                onClick={scrollToTop}
                className={classNames(isVisible ? styles.show : styles.hide, styles.scrollToTopBtn)} />            
        </div>
    )
}

export default ScrollToTop