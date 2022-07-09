import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

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
    <div className={styles.container}>
      <Head>
        <title>Functional Movement</title>
        <meta
          name="description"
          content="Functional Movement"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container
        as="main"
        display="flex"
        direction="column"
        justify="center"
        alignItems="center"
        style={{ height: '100vh' }}
      >
        <Spacer />
        <Image src={isDark ? "Isotipo-blanco.svg" : "Isotipo-negro.svg"} alt="Functional Movement logo" width={200} height={200} />
        <Spacer />
        <Text h1 className={styles.title} >
          Welcome to Functional Movement &nbsp;          
        </Text>
        <Spacer />
        <Input clearable labelPlaceholder="Type something" />
        <Spacer />
        <Button>
          <a
            className={styles.button}
            href="https://github.com/nextui-org/nextui"
            target="_blank"
            rel="noopener noreferrer"
          >
            Show on Github
          </a>
        </Button>
      </Container>
    </div>
  );
}
