import { Col, Container, Row } from "react-bootstrap";
import navIcon1 from "../assets/img/icons8-linkedin.svg";
import navIcon2 from "../assets/img/icons8-telegram.svg";
import navIcon3 from "../assets/img/icons8-github.svg";

export default function Footer() {
  return (
    <footer>
      <Container>
        <Row className="align-items-center pt-5 pb-2">
          <Col sm={6} className="text-center text-sm-start">
            <h1 className="m-0">Moutaz Debbaneh</h1>
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon mb-2">
              <a href="https://linkedin.com/in/moutaz-debbaneh" target="_blank">
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              <a href="https://github.com/MoutazDebbaneh" target="_blank">
                <img src={navIcon3} alt="Github" />
              </a>
              <a href="https://t.me/Moutaz_Debbaneh" target="_blank">
                <img src={navIcon2} alt="Telegram" />
              </a>
            </div>
            <p>© Copyright 2023. Made with ❤️ by Moutaz Debbaneh.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
