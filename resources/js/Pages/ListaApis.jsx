import { Menu } from "./menu/Menu";
import Footer from "./footer/Footer";
import { useState } from "react";
import BloqueApi from "./bloqueApi/BloqueApi";
import Filtro from "./Filtro";
import { useEffect } from 'react';
export default function ListaApis({ apis }) {
    const [valor, setValor] = useState("");
    const [apislista, setApislista] = useState([apis.apis]);
    const [api, setApi] = useState([apis.apis]);
    function comprobarNombre(nombre) {
        if (document.getElementById("nombre").value == "") {
            return true;
        } else {
            return nombre.nombre.toLowerCase().includes(document.getElementById("nombre").value.toLowerCase());
        }

    };
    function handleChange() {

        setValor(document.getElementById("nombre").value);
        setApi(apislista[0].filter(comprobarNombre))
        console.log(api);
    }
    useEffect(() => {
        setApi(apislista[0].filter(comprobarNombre));
    }, [])
    return (


        <div >
            <Menu auth={apis.auth}></Menu>
            <div className="row">
                    <Filtro setApi={setApi} api={api}></Filtro>
                    <div className="col-1 d-lg-none">

                    </div>
                <div className="col-8 col-lg-9 margen50">
                <h1 className="centrar-texto titulo">Todas las APIS</h1>
                    <div className="row">
                        <div className="col-12">
                            <input className="buscador" id="nombre" onChange={handleChange} value={valor} />
                        </div>
                        <div className="col-12">
                            <div className="row">
                                {console.log(api)}{
                                    api.length>0 ? (
                                        api.map((item) => (
                                            <BloqueApi item={item}></BloqueApi>
                                        ))) : <div className="col-10">
                                            <p>No se han encotrado coincidencias</p>
                                </div>}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-1">

                </div>
            </div>
            <Footer></Footer>
        </div>

    )
}
