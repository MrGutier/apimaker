import { Menu } from "./menu/Menu";
import Footer from "./footer/Footer";
import { useState } from "react";
import BloqueApi from "./bloqueApi/BloqueApi";
import Filtro from "./Filtro";
import BloqueApiPrivada from "./bloqueApiPrivada/BloqueApiPrivada";

export default function ListaApisPrivadas({ apis }) {
    const [valor, setValor] = useState("");
    const [ValorOrganizacion, setValorOrganizacion] = useState("");
    const [apislista, setApislista] = useState(apis.apis);
    const [api, setApi] = useState(apis.apis);
    function comprobarNombre(nombre){
        if(document.getElementById("nombre").value==""){
            return true;
        }else{
            return nombre.nombre.toLowerCase().includes(document.getElementById("nombre").value.toLowerCase());
        }

    };
    function handleChange(){

        setValor(document.getElementById("nombre").value);
        setApi(apislista.filter(comprobarNombre))
        console.log(api);
    }
    const [apiOrganizacionInicial, setApiOrganizacionInicial] = useState(apis.apisorganizaciones);
    const [apiOrganizacion, setApiOrganizacion] = useState(apis.apisorganizaciones);

    function comprobarNombreOrganizacion(nombre){
        if(document.getElementById("nombreorganizacion").value==""){
            return true;
        }else{
            return nombre.nombre.toLowerCase().includes(document.getElementById("nombreorganizacion").value.toLowerCase());
        }

    };
    function handleChangeOrganizacion(){

        setValorOrganizacion(document.getElementById("nombreorganizacion").value);
        setApiOrganizacion(apiOrganizacionInicial.filter(comprobarNombreOrganizacion))
        console.log(apiOrganizacion);
    }
    return (


        <div>
            <Menu auth={apis.auth}></Menu>
            <div className="row">

                    <Filtro setApi={setApi} api={api}></Filtro>
                    <div className="col-1 d-lg-none">

                    </div>
                <div className="col-8 col-lg-9 margen50">
                    <h1 className="centrar-texto titulo">Tus APIS</h1>
                    <input className="buscador" id="nombre" onChange={handleChange} value={valor}/>
                    <div className="row">
                        {console.log(api)}{
                            api && api.map((item) => (
                        <BloqueApiPrivada item={item}></BloqueApiPrivada>
                        ))}
                    </div>
                    <h1 className="centrar-texto titulo">APIS de tus organizaciones</h1>
                    <input className="buscador" id="nombreorganizacion" onChange={handleChangeOrganizacion} value={ValorOrganizacion}/>
                    <div className="row">

                        {console.log(apiOrganizacion)}{
                            apiOrganizacion && apiOrganizacion.map((item) => (
                        <BloqueApi item={item}></BloqueApi>
                        ))}
                    </div>

                </div>
                <div className="col-1">

                </div>
            </div>
            <Footer></Footer>
        </div>

    )
}
