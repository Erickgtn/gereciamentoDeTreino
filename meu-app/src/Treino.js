import React from "react";
import FormLogo from './assets/logo-transformers.JPG';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import ComponentSelect from "./componets/select/ComponentSelect";
import CheckDias from "./componets/checkbox/CheckDias";
import ButtonCadastro from "./componets/button/ButtonCadastro";
import TextControlsExample from "./componets/textArea/TextArea";
import { useState } from "react";
import './Treino.css'


function Treino(){
    function cadastrarUsuario(e){
        e.preventDefalt()
        console.log(name)
        console.log(name)
        console.log(`nobreNome${sobrenome} foi cadastrado`)
    }
    const[matricula,setMatricula] = useState()
    const[name,setName] = useState()
    const[sobrenome,setSobrenome] = useState()

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
            <img src='./assets/img-background.jpg' alt="Imagem Academia Fundo"/>
        
        <Form>
        <br></br>
        <Row>
            <Col>
                <Form.Label htmlFor="inputMatricula" format="matricula">Matricula</Form.Label>
                <Form.Control
                    type="number"
                    id="inputMatricula"
                    name="matricula"
                    placeholder="123456"
                    value={matricula}
                    onChange={(e)=> setMatricula(e.target.value)}
                />
            </Col>
        </Row>
        <Row>
            <Col>
                <Form.Label htmlFor="inputName" format="nome" >Nome</Form.Label>
                <Form.Control
                    type="text"
                    id="inputName"
                    name="name"
                    placeholder="Nome"
                    value={name}
                    onChange={(e)=> setName(e.target.value)}
                />
            </Col>
            <Col>
                <Form.Label htmlFor="inputSobrenome" >Sobrenome</Form.Label>
                <Form.Control   
                    type="text"
                    id="inputSobrenome"
                    name="sobreNome"
                    placeholder="Sobrenome" 
                    value={sobrenome} 
                    onChange={(e)=> setSobrenome(e.target.value)}
                />
            </Col>
            <Col>
                <Form.Label htmlFor="inputEmail">Endereço de Email</Form.Label>
                <Form.Control
                    type="text"
                    id="inputSobrenome"
                    placeholder="email@example.com"
                    name="email"
                />
            </Col>
            <br></br>
        </Row>
        <Row>
            <Col>
                <Form.Label htmlFor="inputIdade"className="Idade">Idade</Form.Label>
                <Form.Control
                    type="number"
                    id="inputIdade"                    
                />
            </Col>
            
            <Col>
                <Form.Label htmlFor="inputPeso"className="Peso">Peso(Kg)</Form.Label>
                <Form.Control
                    type="number"
                    id="inputPeso"                    
                />
            </Col>
            <Col>
                <Form.Label htmlFor="inputAltura" className="Altura">Altura(cm)</Form.Label>
                <Form.Control
                    type="number"
                    id="inputAltura"                    
                />
            </Col>
        </Row>
        <br></br>
        <Row>
            <Col>
                <ComponentSelect format="d1" className="Objetivo"/>
            </Col>
            <Col>
                <CheckDias format="s1" className="Sexo"></CheckDias>
            </Col>
            <Col>
                <CheckDias className="DiaSemana"></CheckDias>
            </Col>
        </Row>
            
        
        <TextControlsExample></TextControlsExample>
            
     
        <br></br>
            <ButtonCadastro onClick={cadastrarUsuario}></ButtonCadastro>
            <br></br>
        </Form>
        
        </Container>
    );
    
}

export default Treino;