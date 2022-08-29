import Section from '../components/Section/Section';

import {
  Container,
  Button,
  Input,
  Spacer,
  Text,
  Link,
  useTheme
} from '@nextui-org/react';

export default function Home() {
  const { isDark } = useTheme()

  return (    
    <Container>
      <Section title="Functional Movement"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        image={{ src: isDark ? "Isotipo-blanco.svg" : "Isotipo-negro.svg", alt: 'Functional Movement Logo' }}
        action={{ text: "Check it out", goto: "", props: { shadow: true, color: "primary" } }}    
        renderSeparator={true}            
        />        
        <Section title="Functional Movement"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        image={{ src: "example1.png", alt: 'Functional Movement Logo' } }
        action={{ text: "Check it out", goto: "", props: { shadow: true, color: "primary" } }}        
        direction="row-reverse"
        renderSeparator={true}
        />        
        <Section title="Functional Movement"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        image={{ src: "example2.png", alt: 'Functional Movement Logo' } }
        action={{ text: "Check it out", goto: "", props: { shadow: true, color: "primary" } }}    
        renderSeparator={true}            
        />        
        <Section title="Functional Movement"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        image={{ src: "example3.png", alt: 'Functional Movement Logo' } }
        action={{ text: "Check it out", goto: "", props: { shadow: true, color: "primary" } }}        
        direction="row-reverse"
        />
    </Container>
  );
}
