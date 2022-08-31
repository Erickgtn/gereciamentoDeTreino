import React from "react";
import FormLogo from './assets/logo-transformers.JPG';
//import Fieldage from "./componets/fieldage/Fieldage";
import  Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import SelectTreino from "./componets/select/SelectTreino";
import ComponentSelect from "./componets/select/ComponentSelect";
import CheckDias from "./componets/checkbox/CheckDias";
import ButtonCadastro from "./componets/button/ButtonCadastro";


import './Treino.css'




function Treino(){
    const onSubmit = (e)=>{
        e.preventDefalt();
        const data = {

        }
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

        <Form>
        <br></br>
        <Row>
            <Col>
                <Form.Label htmlFor="inputName" name="nome">Nome</Form.Label>
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
            <Row>
            <Col>
                <Form.Label htmlFor="inputIdade"className="Idade">Idade</Form.Label>
                <Form.Control
                    type="number"
                    id="inputIdade"                    
                />
            </Col>
            <Col>
                <CheckDias format="s1" clName="Sexo"></CheckDias>
            </Col>
            <Col>
                <Form.Label htmlFor="inputPeso"clName="Peso">Peso(Kg)</Form.Label>
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
        </Row>
        <br></br>
       
        {/* <Row>
            <Col>
                <Fieldage format ="p2" value=""  label="Idade" clName="idade"/>
            </Col>
            <Col>
                <Fieldage format= "p1" value=""  label="Peso (Kg)" clName="peso"/>
            </Col>
            <Col>
                <Fieldage format= "p3" value="" label="Altura (cm)" clName="altura"/>
            </Col>
        </Row> */}
        {/* <SelectTreino>

        </SelectTreino>  */}
        <Row>
        
            <Col>
                <ComponentSelect format="d1" clName="Objetivo" type=""/>
            </Col>
            <Col>
                <CheckDias clName="DiaSemana"></CheckDias>
            </Col>
        </Row>
            
            
     
        <br></br>
            <ButtonCadastro></ButtonCadastro>
            <br></br>
        </Form>
        
        </Container>
    );
    
}

export default Treino;