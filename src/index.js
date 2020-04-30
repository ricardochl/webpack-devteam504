
import './styles.css';
import { getTalleres } from './services/http-service';
import { buildPage } from './components/app-component';

const saludar = "Hola mundo";

console.log(saludar);

buildPage();

getTalleres().then(res=>{
    console.log(res);
});
