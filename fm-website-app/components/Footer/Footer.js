import { Button, Grid, Image, Link, Spacer, Text } from "@nextui-org/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter, faInstagram, faFacebook, faYoutube } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
    const redirectTo = (url) => {
        window.open(url, "_blank")
    }

    return(
        <footer>
            <hr />
            <Spacer />
            <Grid.Container justify="center">
                <Grid xs={12} justify="center">
                    <Button href="https://www.instagram.com/functionalmovement" icon={<FontAwesomeIcon icon={faFacebook} size="xl" />} rounded auto bordered ghost onClick={() => redirectTo("https://www.instagram.com/_functional_movement_/")} />
                    <Spacer />
                    <Button color={"secondary"} href="https://www.instagram.com/functionalmovement" icon={<FontAwesomeIcon icon={faInstagram} size="xl" />} rounded auto bordered ghost onClick={() => redirectTo("https://www.instagram.com/_functional_movement_/")} />                    
                    <Spacer />
                    <Button href="https://www.instagram.com/functionalmovement" icon={<FontAwesomeIcon icon={faTwitter} size="xl" />} rounded auto bordered ghost onClick={() => redirectTo("https://www.instagram.com/_functional_movement_/")} />                    
                    <Spacer />
                    <Button color={"error"} href="https://www.instagram.com/functionalmovement" icon={<FontAwesomeIcon icon={faYoutube} size="xl" />} rounded auto bordered ghost onClick={() => redirectTo("https://www.instagram.com/_functional_movement_/")} />                                        
                </Grid>
                <Grid xs={12} justify="center">
                    <Text justify="center" css={{margin: "0 auto"}}>
                        {"© 2022 Functional Movement | Desarrollado por "}
                            <Link href="https://www.github.com/panchoreview" target={"_blank"} css={{display: "inline-flex"}}>Francisco Astorga</Link> 
                    </Text>
                    
                
                </Grid>
            </Grid.Container>
        </footer>        
    )
}


export default Footer