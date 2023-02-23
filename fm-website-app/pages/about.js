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
                    title={"Misión"}                    
                    paragraphs={[
                        "Deporte, salud, fitness, en Functional Movement abordamos de manera integral los distintos aspectos del rendimiento humano.",
                        "Un claro ejemplo es el factor de riesgo que presenta la obesidad en nuestro país. Después de México, Chile es la nación con las tasas más altas de sobrepeso de la OCDE, llegando a un 74,2% según el último estudio “Health at Glance 2021”, realizado por la Organización",
                        "Esta realidad, junto con los problemas multifactoriales que afectan a la salud y bienestar de las personas, son la razón por la que estamos aquí.",
                        "En Functional Movement te enseñaremos a analizar tus hábitos y condiciones de vida para que logres tu máximo rendimiento, independiente de la actividad que realices. Siempre estarás acompañado y acompañada de una guía tanto en tu alimentación como en tu entrenamiento e iremos midiendo y viendo cada uno de tus resultados en conjunto."
                    ]}
                    image={{ src: "/example1.png", alt: 'Functional Movement Logo' } }   
                    direction="row-reverse"                    
                />
                <Section 
                    title={"Visión"}                    
                    paragraphs={[
                        "Entregar una atención integral y personalizada, es nuestro principal objetivo. Contamos con la infraestructura necesaria para realizar las mediciones corporales que necesitarás para ir avanzando en tu camino.",
                        "Con esta base, Functional Movement busca integrarse tanto en las distintas comunidades deportivas, como en las organizaciones orientadas a la salud del país, ofreciendo atención individual enfocada en la persona",
                        "Más a largo plazo, la meta es establecernos como un centro de formación integral deportiva saludable, entregando servicios tanto presenciales como virtuales, alrededor del globo."
                    ]}
                    image={{ src: "/example1.png", alt: 'Functional Movement Logo' } }                       
                />
                <Section 
                    title={"¿Qué nos diferencia?"}                    
                    paragraphs={[
                        "Creamos programas de preparación física integral, con los cuales ayudamos a nuestras y nuestros usuarios, mediante el ejercicio físico sistematizado y estructurado, a lograr sus objetivos de manera eficiente y segura.",
                        "Junto con esto, desde Functional Movement, tomamos metodologías y tecnologías de vanguardia y las ponemos a disposición del ciudadano común. Esto con el fin de democratizar el acceso a estas herramientas, generando accesibilidad de modo transversal y de calidad.",
                        "Contamos con Encoder para realizar velocity based training (VBT), tensiómetro para evaluar tus niveles de presión arterial, plataforma de contacto para realizar evaluaciones neuromusculares, dinamómetro para realizar test de fuerza, glucómetro para medir los niveles de azúcar en la sangre y mucho más a tu disposición."
                    ]}
                    image={{ src: "/example1.png", alt: 'Functional Movement Logo' } }   
                    direction="row-reverse"                    
                />
            </Container>
        </>        
    )
}

export default About