import Section from '@components/Section/Section'
import Head from 'next/head';
import { Container, useTheme } from '@nextui-org/react'

export default function Home() {
  const { isDark } = useTheme()

  return (   
    <>
      <Head>
        <title>Functional Movement</title>
      </Head>
      <Container>
        <Section title="Functional Movement"
          paragraphs={[ "Somos Functional Movement y queremos acompañarte en un viaje hacia una vida mejor.", "Sabemos que cada persona es un mundo, cada quien tiene sus objetivos y busca mejorar su          condición física o su calidad de vida. Nosotros te guiamos en tu proceso, no sólo a través de          pautas que seguir, sino que te ayudaremos a cambiar la visión de tu vida, generando el conocimiento y los hábitos que requieres para cumplir tus metas" ]}          
          image={{ src: isDark ? "Isotipo-blanco.svg" : "Isotipo-negro.svg", alt: 'Functional Movement Logo' }}          
          renderSeparator={true}            
          />        
          <Section title="Suena bien, ¿no?"
          paragraphs={[ "Ahora, en concreto. Cada sesión de entrenamiento estará diseñada considerando tu realidad, tus lesiones, enfermedades y el entorno en el que te desenvuelves, desde una perspectiva científica acuciosa para que puedas sacarle el mayor provecho." ]}
          image={{ src: "example1.png", alt: 'Functional Movement Logo' } }          
          direction="row-reverse"
          renderSeparator={true}
          />        
          <Section title="¿Ya dominas esto?, ¿eres deportista y quieres llegar más allá?"
          paragraphs={["En Functional Movement evaluaremos la biomecánica de tus patrones de movimiento con el fin de poder detectar posibles riesgos de lesiones, junto con mejorar tu performance deportiva para llevarla al siguiente nivel. Desde el fútbol, hasta las artes marciales mixtas o incluso, si tu meta es escalar el Everest, juntos podemos lograrlo.", 
            "Ahora, si tu objetivo se centra en el fitness, tomamos estas mismas herramientas y las aplicamos a una concepción estética, logrando de manera saludable una reducción del tejido adiposo y/o aumento de la masa muscular, que te permita verte como quieres sin culpas y sin dietas extremas"]}
          image={{ src: "example2.png", alt: 'Functional Movement Logo' } }          
          renderSeparator={true}            
          />        
    </Container>
    </>     
  );
}
