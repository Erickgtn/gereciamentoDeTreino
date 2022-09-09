import React from "react";
import Form from 'react-bootstrap/Form';


function ComponentSelect(props) {

if(props.format=="d1"){
    return(
      <Form.Group>
        <Form.Label>Objetivo</Form.Label>
        <Form.Control as="select" name="objetivo" onChange={props.funcao}>
          <option></option>
          <option>Definição</option>
          <option>Hipertrofia</option>
        </Form.Control>
      </Form.Group>
    );
} else if(props.format=="d2"){
  return(
    <Form.Group>
      <Form.Label>Dias da Semana</Form.Label>
      <Form.Control as="select">
        <option></option>
        <option>Definição</option>
        <option>Hipertrofia</option>
      </Form.Control>
    </Form.Group>
  );
}

}

export default ComponentSelect;