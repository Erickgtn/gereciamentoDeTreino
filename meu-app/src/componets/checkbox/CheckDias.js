import Form from 'react-bootstrap/Form';

function CheckIDias() {
  return (
    <Form>
    <label> Dias de treino por semana</label>
      {['radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline
            disabled
            label="2 (disabled)"
            name="group1"
            type={type}
            id={`inline-${type}-1`}
            
          />
          <Form.Check
            inline
            label="3"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
            autocomplete="on"
          />
          <Form.Check
            inline
            label="4 "
            type={type}
            id={`inline-${type}-3`}
          />
          <Form.Check
            inline
            label="5 "
            type={type}
            id={`inline-${type}-3`}
          />
          <Form.Check
            inline
            label="6 "
            type={type}
            id={`inline-${type}-3`}
          />
        </div>
      ))}
    </Form>
  );
}

export default CheckIDias;