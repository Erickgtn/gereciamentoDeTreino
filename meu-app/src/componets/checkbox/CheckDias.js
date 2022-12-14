import Form from 'react-bootstrap/Form';

function CheckIDias(props) {
    if(props.format=="s1"){
        return(
            <div>
                <label>Sexo</label>
                {['radio'].map((type) => (
                    <div key={`inline-${type}`} >
                        <Form.Check
                            onChange={props.funcao}
                            inline
                            label="M"
                            name="sexo"
                            type={type}
                            value="M"
                            id={`inline-${type}-1`}
                            
                        />
                        <Form.Check
                            onChange={props.funcao}
                            inline
                            label="F"
                            value ="F"
                            name="sexo"
                            type="radio"
                            id={`inline-${type}-2`}
                        />
                    </div>
                ))}
            </div>
         );
    }
    if(props.format=="s2"){
      return (
      <div>
      <label> Dias de treino por semana</label>
        {['radio'].map((type) => (
          <div key={`inline-${type}`}  onChange={props.funcao}>
            <Form.Check 
              inline
              disabled
              label="2 (disabled)"
              name="group1"
              type={type}
              value="2"
              id={`inline-${type}-1`}
              
            />
            <Form.Check
              inline
              label="3"
              value ="3"
              name="group1"
              type="radio"
              id={`inline-${type}-2`}
            />
            <Form.Check
              inline
              label="4"
              name="group1"
              type="radio"
              value="4"
              id={`inline-${type}-3`}
            />
            <Form.Check
              inline
              label="5"
              name="group1"
              type="radio"
              value="5"
              id={`inline-${type}-3`}
            />
            <Form.Check
              inline
              label="6"
              value="6"
              name="group1"
              type="radio"
              id={`inline-${type}-3`}
            />
          </div>
        ))}
      </div>
      );
    }
}

export default CheckIDias;