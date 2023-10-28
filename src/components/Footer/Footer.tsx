import { Col, Container, Row } from "react-bootstrap"

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5">
      <Container>
        <Row>
          <Col md={6}>
            <h5>Our Company</h5>
            <p>Some information about your company.</p>
          </Col>
          <Col md={6}>
            <h5>Contact Us</h5>
            <ul>
              <p>Email: info@yourcompany.com</p>
              <p>Phone: (123) 456-7890</p>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>

  )
}

export default Footer