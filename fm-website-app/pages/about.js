import { Container } from "@nextui-org/react"
import Head from "next/head"
import Section from "@components/Section/Section"

const About = () => {
    return(
        <>
            <Head>
                <title>Functional Movement - Quiénes somos</title>
            </Head>    
            <Container>
                <Section 
                    title={"¿Quiénes somos?"}
                    text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                    image={{ src: "/example1.png", alt: 'Functional Movement Logo' } }   
                    direction="row-reverse"
                />
            </Container>
        </>        
    )
}

export default About