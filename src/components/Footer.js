import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import img1 from "../assets/img/J1.jpg";
import img2 from "../assets/img/K1.jpg";
import img3 from "../assets/img/KC1.jpg";
import img4 from "../assets/img/K2.jpg";
//import { MailchimpForm } from "./MailchimpForm";


export const Footer = () => {
  return (
    
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
         
          <Col size={12} sm={6}>
           <h1 className="footer-text">Developers and Researchers</h1>
          </Col>
         
        </Row>
    </Container>
      <Container className="text-center">
      <Row className="justify-content-center">
        <Col md={3} className="mb-4">
          <Image
            src={img1}
            alt="profile picture"
            className="rounded-circle"
          />
          <h3 className="mt-3 mb-0">Jarl Sarmiento</h3>
        </Col>
        <Col md={3} className="mb-4">
          <Image
            src={img2}
            alt="profile picture"
            className="rounded-circle"
          />
          <h3 className="mt-3 mb-0">Kent Estiamba</h3>
        </Col>
        <Col md={3} className="mb-4">
          <Image
            src={img3}
            alt="profile picture"
            className="rounded-circle"
          />
          <h3 className="mt-3 mb-0">Karr Balbin</h3>
        </Col>
        <Col md={3} className="mb-4">
          <Image
            src={img4}
            alt="profile picture"
            className="rounded-circle"
          />
          <h3 className="mt-3 mb-0">Kean Canaria</h3>
        </Col>
      </Row>
    </Container>
      <Container>
        <Row className="align-items-center">
         
        
          <Col size={15} sm={7} className="text-right text-sm-end">
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
    </Container>
    </footer>
  )
}
