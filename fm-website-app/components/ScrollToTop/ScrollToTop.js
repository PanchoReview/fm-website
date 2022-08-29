import { useEffect, useState } from "react"
import { ChevronUp } from "react-iconly"
import { Button } from "@nextui-org/react"
import classNames from "../../utils/classNames"
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
                icon={<ChevronUp set="bold" filled className={styles.icon} />} 
                onClick={scrollToTop}
                className={classNames(isVisible ? styles.show : styles.hide, styles.scrollToTopBtn)} />            
        </div>
    )
}

export default ScrollToTop