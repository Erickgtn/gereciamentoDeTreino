
function Fieldage(props){
    if (props.format==="p1"){
        return(
            <label >
                {props.label}
                <input value={props.value} type="text" className={props.clName} />
            </label>
    );
    }else if (props.format==="p2") {

        return(
            <label >
                {props.label}
                <input value={props.value} type="number" className={props.clName} />
            </label>
    );
    } else if(props.format ==="p3"){
        return(
            <label >
                {props.label}
                <input value={props.value} type="number" className={props.clName} />
            </label>
    );
    }
}

export default Fieldage;