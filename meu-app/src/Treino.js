import React from "react";
import FormLogo from './assets/logo-transformers.JPG';
import Fieldage from "./componets/fieldage/Fieldage";
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';


//import './Treino.css'




function Treino(){
    return(
        <Container >
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={FormLogo}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval="50000">
                    <img
                    className="d-block w-100"
                    src={FormLogo}
                    alt="First slide"
                    />
                </Carousel.Item>
            </Carousel>

        <Form>
        <Row>
            <Col>
                <Form.Label htmlFor="inputName">Nome</Form.Label>
                <Form.Control
                    type="text"
                    id="inputName"
                    placeholder="Nome"
                />
            </Col>
            <Col>
                <Form.Label htmlFor="inputSobrenome">Sobrenome</Form.Label>
                <Form.Control
                    type="text"
                    id="inputSobrenome"
                    placeholder="Sobrenome"
                    
                />
            </Col>
            <Col>
                <Form.Label htmlFor="inputEmail">Email</Form.Label>
                <Form.Control
                    type="text"
                    id="inputSobrenome"
                    placeholder="email@example.com"
                    
                />
            </Col>
        </Row>
        <br></br>
        <Row>
            <Col>
                <Fieldage format ="p2"value=""  label="Idade" clName="idade"/>
            </Col>
            <Col>
                <Fieldage format= "p1" value=""  label="Peso (Kg)" clName="peso"/>
            </Col>
            <Col>
                <Fieldage format= "p3" value="" label="Altura (cm)" clName="altura"/>
            </Col>
        </Row>
      
        {/* <Form.Select aria-label="Default select example">
            <option>Objetivo</option>
            <option value="1">Definição</option>
            <option value="2">Hipertrofia</option>
            <option value="3">Three</option>
        </Form.Select> */}
        
            
            <button type="submit">Cadastrar</button>
        </Form>
        </Container>
    );
}

export default Treino;