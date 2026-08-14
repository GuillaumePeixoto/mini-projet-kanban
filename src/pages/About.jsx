import avatar from "../assets/images/avatar.png";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card';


function About() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
        <h2 className="fs-1">About</h2>
        <Row xs={1} md={2} className="g-4">
        <Col >
          <Card>
            <Card.Img variant="top" src={avatar} />
            <Card.Body>
              <Card.Title>Guillaume Peixoto</Card.Title>
              <Card.Text>
               Description :
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
         <Col >
          <Card>
            <Card.Img variant="top" src={avatar} />
            <Card.Body>
              <Card.Title>Emmanuel Lethiec</Card.Title>
              <Card.Text>
                Description :
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
    </Row>

      
      
       
    </div>
  );
}

export default About;
