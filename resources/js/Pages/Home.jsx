import Footer from "./footer/Footer";
import { Menu } from "./menu/Menu";
import { usePage } from '@inertiajs/inertia-react'



export default function Home({ apis }) {
    console.log(apis);
    return (
        <div className="row">
            <Menu auth={apis.auth}></Menu>

            <div className="col-12">
                <h1 className="centrar-texto titulo">Crea tus propias Apis personalizadas</h1>
                <div className="row">
                    <div className="col-4">

                    </div>
                    <div className="col-4 centrar">
                        <a href="/crearapi/">
                            <button className="boton">Crea tu api</button>
                        </a>
                    </div>
                    <div className="col-4">

                    </div>
                </div>
            </div>
            <div className="col-12">
                <h1 className="centrar-texto titulo">O puedes ver las Apis creadas por otros usuarios</h1>
                <div className="row">
                    <div className="col-4">

                    </div>
                    <div className="col-4 centrar">
                        <a href="/listaapis/">
                        <button className="boton">Ver las apis</button>
                        </a>
                    </div>
                    <div className="col-4">

                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

