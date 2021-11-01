import React, { useState } from "react";
import { render } from "react-dom";
import '../css/Calculadora.css';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

function Calculadora() {

  const [txtNumeros, setTxtNumeros] = useState('0');

  function adicionarNumero(numero) {
    setTxtNumeros(txtNumeros + numero);
  }

  function definirOperacao(operacao) {
    setTxtNumeros(operacao);
  }

  return (
    <section className="calc-section">
      <div className="jumbotron">
        <Container>
          <Row>
            <Col xs="3">
              <Button variant="warning">C</Button>
            </Col>
            <Col xs="9">
              <Form.Control type="text" name="txtNumeros" className="text-right" readOnly="readonly" value={ txtNumeros } />
            </Col>
          </Row>

          <Row>
            <Col>
              <Button variant="light" onClick={ () => adicionarNumero('7') }>7</Button>
            </Col>
            <Col>
              <Button variant="light" onClick={ () => adicionarNumero('8') }>8</Button>
            </Col>
            <Col>
              <Button variant="light" onClick={ () => adicionarNumero('9') }>9</Button>
            </Col>
            <Col>
              <Button variant="info" onClick={ () => definirOperacao('/') }>/</Button>
            </Col>
          </Row>

          <Row>
            <Col>
              <Button variant="light" onClick={ () => adicionarNumero('4') }>4</Button>
            </Col>
            <Col>
              <Button variant="light" onClick={ () => adicionarNumero('5') }>5</Button>
            </Col>
            <Col>
              <Button variant="light" onClick={ () => adicionarNumero('6') }>6</Button>
            </Col>
            <Col>
              <Button variant="info" onClick={ () => definirOperacao('*') }>*</Button>
            </Col>
          </Row>

          <Row>
            <Col>
              <Button variant="light" onClick={ () => adicionarNumero('1') }>1</Button>
            </Col>
            <Col>
              <Button variant="light" onClick={ () => adicionarNumero('2') }>2</Button>
            </Col>
            <Col>
              <Button variant="light" onClick={ () => adicionarNumero('3') }>3</Button>
            </Col>
            <Col>
              <Button variant="info" onClick={ () => definirOperacao('-') }>-</Button>
            </Col>
          </Row>

          <Row>
            <Col>
              <Button variant="light" onClick={ () => adicionarNumero('0') }>0</Button>
            </Col>
            <Col>
              <Button variant="light">.</Button>
            </Col>
            <Col>
              <Button variant="success">=</Button>
            </Col>
            <Col>
              <Button variant="info" onClick={ () => definirOperacao('+') }>+</Button>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}

export default Calculadora;
