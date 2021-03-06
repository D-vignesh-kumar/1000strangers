import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Container, Navbar, Nav, Row, Col } from "react-bootstrap";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>1000 Strangers</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{ height: "100vh" }}>
        <Navbar fixed="top" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">1000 Strangers</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About Us</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Container>bootstrap</Container>
      </main>

      <footer id="about" className={styles.footer}>
        {/* <span> Connect with us on:</span>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>
            <Image
              src="/instagram.svg"
              alt="instagram Logo"
              width={72}
              height={24}
            />
          </span>
        </a>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>
            <Image
              src="/youtube.png"
              alt="instagram Logo"
              width={22}
              height={24}
            />
          </span>
        </a> */}
        <Row className="justify-content-md-center">
          <Col xs lg="auto">
            Connect with us on:
          </Col>
          <Col md="auto" lg="auto">
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                <Image
                  src="/instagram.svg"
                  alt="instagram Logo"
                  width={24}
                  height={24}
                />
              </span>
            </a>
          </Col>
          <Col xs lg="auto">
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                <Image
                  src="/youtube.png"
                  alt="instagram Logo"
                  width={22}
                  height={24}
                />
              </span>
            </a>
          </Col>
        </Row>
      </footer>
    </div>
  );
}
