import {
  Container,  
  Text,
  Image,
  Grid,
  Spacer,
  Button,
} from "@nextui-org/react";
import styles from "./Section.module.css";

const Section = ({ title, text, image, action, direction = "row", renderSeparator = false }) => {
  return (
    <>
    <Grid.Container direction={direction} className={styles.fmSection} alignItems="center">
      <Grid xs={12} sm={12} md={6} xl={6} className={styles.fmSectionInner}>
        <Container display="block" alignItems="center" className={styles.fmTextContainer}>
            <Text h1>{title}</Text>
            <Text>{text}</Text>
            <Spacer></Spacer>
            {action && <Button {...action.props}>{action.text}</Button>}
        </Container>        
      </Grid>
      <Grid xs={12} sm={12} md={6} xl={6} className={styles.fmSectionInner}>
        <Image src={image.src} alt={image.alt} {...image.props} />
      </Grid>      
    </Grid.Container>
    {renderSeparator && <hr/>}
    </>    
  );
};

export default Section;
