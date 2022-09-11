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
        e.preventDefault()
        console.log(dados)
        // console.log(name)
        //console.log(`nomeNome ${sobrenome} foi cadastrado`)
    }
    const initDados = {"matricula":"","name":"","sobrenome":"","group1":"",
    "email":"","idade":"","peso":"","altura":"","sexo":"","diaSemana":""}

    const [dados,setDados] = useState(initDados)
    const atualizaDados = (e)=>{
        setDados({...dados,[e.target.name] : e.target.value})
        console.log(e.target.name,e.target.value)
    }

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
        
        <Form onSubmit={cadastrarUsuario}>
        <br></br>
        <Row>
            <Col>
                <Form.Label htmlFor="inputMatricula" format="matricula">Matricula</Form.Label>
                <Form.Control
                    type="number"
                    id="inputMatricula"
                    name="matricula"
                    placeholder="123456"
                    value={dados.matricula}
                    onChange={atualizaDados}
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
                    value={dados.name}
                    onChange={atualizaDados}
                />
            </Col>
            <Col>
                <Form.Label htmlFor="inputSobrenome" >Sobrenome</Form.Label>
                <Form.Control   
                    type="text"
                    id="inputSobrenome"
                    name="sobrenome"
                    placeholder="Sobrenome" 
                    value={dados.sobrenome} 
                    onChange={atualizaDados}
                />
            </Col>
            <Col>
                <Form.Label htmlFor="inputEmail">Endereço de Email</Form.Label>
                <Form.Control
                    type="text"
                    id="inputSobrenome"
                    placeholder="email@example.com"
                    name="email"
                    value={dados.email}
                    onChange={atualizaDados}
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
                    name="idade"  
                    value={dados.idade}
                    onChange={atualizaDados}                  
                />
            </Col>
            
            <Col>
                <Form.Label htmlFor="inputPeso"className="Peso">Peso(Kg)</Form.Label>
                <Form.Control
                    type="number"
                    id="inputPeso"  
                    name="peso"  
                    value={dados.peso}
                    onChange={atualizaDados}                   
                />
            </Col>
            <Col>
                <Form.Label htmlFor="inputAltura" className="Altura">Altura(cm)</Form.Label>
                <Form.Control
                    type="number"
                    id="inputAltura" 
                    name="altura"  
                    value={dados.altura}
                    onChange={atualizaDados}                    
                />
            </Col>
        </Row>
        <br></br>
        <Row>
            <Col>
                <ComponentSelect format="d1" className="Objetivo" funcao={atualizaDados}/>
            </Col>
            <Col>
                <CheckDias format="s1" className="sexo" name="sexo" funcao={atualizaDados}></CheckDias>
            </Col>
            <Col>
                <CheckDias format="s2" className="DiaSemana" name="diaSemana" value={dados.diaSemana} onChange={atualizaDados}></CheckDias>
            </Col>
        </Row>
            
        
        <TextControlsExample></TextControlsExample>
            
     
        <br></br>
            <ButtonCadastro ></ButtonCadastro>
            <br></br>
        </Form>
        
        </Container>
    );
    
}

export default Treino;