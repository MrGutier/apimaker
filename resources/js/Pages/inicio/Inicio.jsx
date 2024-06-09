import Footer from "../footer/Footer";
import { Menu } from "../menu/Menu";

export const Inicio = () => {

    return (
        <div className="row">
            <Menu></Menu>

            <div className="col-12">
                <h1 className="centrar-texto titulo">Crea tus propias Apis personalizadas</h1>
                <div className="row">
                    <div className="col-4">

                    </div>
                    <div className="col-4 centrar">
                    <button className="boton">Crea tu api</button>
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
                    <button className="boton">Ver las apis</button>
                    </div>
                    <div className="col-4">

                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}
export default Inicio;
