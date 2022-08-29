import {
  Container,
  Row,
  Col,
  Text,
  Image,
  Grid,
  Spacer,
  Button,
} from "@nextui-org/react";
import styles from "./Section.module.css";

const Section = ({ title, text, image, action, direction = "row" }) => {
  return (
    <Grid.Container direction={direction} className={styles.fmSection} alignItems="center">
      <Grid xs={12} sm={12} md={6} xl={6}>
        <Container display="block" alignItems="center" className={styles.fmTextContainer}>
            <Text h1>{title}</Text>
            <Text>{text}</Text>
            <Spacer></Spacer>
            {action && <Button {...action.props}>{action.text}</Button>}
        </Container>        
      </Grid>
      <Grid xs={12} sm={12} md={6} xl={6}>
        <Image src={image.src} alt={image.alt} {...image.props} />
      </Grid>
    </Grid.Container>
  );
};

export default Section;
