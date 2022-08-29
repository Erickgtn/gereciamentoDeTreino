
import Form from 'react-bootstrap/Form';

function ComponentSelect(props) {
  if(props.format=="d1"){
    
    <Form.Group>
    <Form.Label>Status</Form.Label>
    <Form.Control as="select">
      <option>Active</option>
      <option>Inactive</option>
    </Form.Control>
  </Form.Group>
  }
  

  // if(props.format=="d1"){
  //   return (
  //     <Form.Select aria-label="Default select example">
  //       <option>Objetivo</option>
  //       <option value="1">Definição</option>
  //       <option value="2">Hipertrofia</option>
  //       <option value="3">Three</option>
  //     </Form.Select>
  //   );
  // }
  // else if(props.format=="d2"){
  //   return (
  //     <Form.Select aria-label="Default select example">
  //       <option>Quantidade de dias da semana</option>
  //       <option value="1">One</option>
  //       <option value="2">Two</option>
  //       <option value="3">Three</option>
  //     </Form.Select>
  //   );
  // }
}

export default ComponentSelect;