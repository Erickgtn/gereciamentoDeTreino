import Form from 'react-bootstrap/Form';

function Menu (){
    return(
        <nav className="nav nav-pills nav-fill">
        <a className="nav-link active" aria-current="page" href="./Login.js">Active</a>
        <a className="nav-link" href="./Treino.js">Much longer nav link</a>
        <a className="nav-link" href="#">Link</a>
        <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </nav>
    );
}
export default Menu;