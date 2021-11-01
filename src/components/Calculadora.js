import React, { Component } from "react";
import { render } from "react-dom";
import '../css/Calculadora.css';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

class Calculadora extends Component {
  render() {
    return (
      <section className="calc-section">
        <div className="jumbotron">
          <Container>
            <Row>
              <Col xs="3">
                <Button variant="warning">C</Button>
              </Col>
              <Col xs="9">
                <Form.Control type="text" name="txtNumeros" className="text-right" readOnly="readonly" />
              </Col>
            </Row>

            <Row>
              <Col>
                <Button variant="light">7</Button>
              </Col>
              <Col>
                <Button variant="light">8</Button>
              </Col>
              <Col>
                <Button variant="light">9</Button>
              </Col>
              <Col>
                <Button variant="info">/</Button>
              </Col>
            </Row>

            <Row>
              <Col>
                <Button variant="light">4</Button>
              </Col>
              <Col>
                <Button variant="light">5</Button>
              </Col>
              <Col>
                <Button variant="light">6</Button>
              </Col>
              <Col>
                <Button variant="info">*</Button>
              </Col>
            </Row>

            <Row>
              <Col>
                <Button variant="light">3</Button>
              </Col>
              <Col>
                <Button variant="light">2</Button>
              </Col>
              <Col>
                <Button variant="light">1</Button>
              </Col>
              <Col>
                <Button variant="info">-</Button>
              </Col>
            </Row>

            <Row>
              <Col>
                <Button variant="light">0</Button>
              </Col>
              <Col>
                <Button variant="light">.</Button>
              </Col>
              <Col>
                <Button variant="success">=</Button>
              </Col>
              <Col>
                <Button variant="info">+</Button>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    );
  }
}

export default Calculadora;
