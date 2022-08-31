import Form from 'react-bootstrap/Form';

function CheckIDias(props) {
    if(props.format=="s1"){
        return(
            <Form>
                <label>Sexo</label>
                {['radio'].map((type) => (
                    <div key={`inline-${type}`} className="mb-3">
                        <Form.Check
                            inline
                            label="M"
                            checked
                            name="group1"
                            type={type}
                            id={`inline-${type}-1`}
                        />
                        <Form.Check
                            inline
                            label="F"
                            value ="opção1"
                            name="group1"
                            type="radio"
                            for="exampleRadios1"
                            id={`inline-${type}-2`}
                        />
                    </div>
                ))}
            </Form>
         );
    }
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
            value ="opção1"
            name="group1"
            type="radio"
            for="exampleRadios1"
            id={`inline-${type}-2`}
          />
          <Form.Check
            inline
            label="4"
            name="group1"
            type="radio"
            id={`inline-${type}-3`}
          />
          <Form.Check
            inline
            label="5"
            name="group1"
            type="radio"
            id={`inline-${type}-3`}
          />
          <Form.Check
            inline
            label="6"
            name="group1"
            type="radio"
            id={`inline-${type}-3`}
          />
        </div>
      ))}
    </Form>
  );
}

export default CheckIDias;