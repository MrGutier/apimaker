import { Routes, Route} from 'react-router-dom'
import Home from './Home';
import ListaApis from './ListaApis';

import "./Index.css";
import { Menu } from 'react-admin';
import VistaApi from './VistaApi';
import CrerApis from './CrearApis';
import EditarApis from './EditarApis';
import ListaApisPrivadas from './ListaApisPrivadas';

function Index(apis){

    return (
        <div>

        <Routes>
            <Route path="/" element={<Home apis={apis}></Home>} />
            <Route path="/listaapis/" element={<ListaApis apis={apis}></ListaApis>} />
            <Route path="/listaapisprivadas" element={<ListaApisPrivadas apis={apis}></ListaApisPrivadas>} />
            <Route path="/listaapis/:id" element={<VistaApi apis={apis}></VistaApi>} />
            <Route path="/listaapis/:id/editar" element={<EditarApis apis={apis}></EditarApis>} />
            <Route path="/listaapis/:id/eliminar" element={<Home></Home>} />
            <Route path="/crearapi" element={<CrerApis apis={apis}></CrerApis>} />


        </Routes>
        </div>
    )

}
export default Index;
