import "./Footer.css";
export const Footer = () => {

    return (

        <div className="col-12 menu-fondo fixed-bottom">
            <div className="row">
                <div className="col-1 centrar">

                </div>
                <div className="col-5">
                    <h1 className=""><a href="/" className="menu-lista link-menu">ApiMaker</a></h1>
                </div>
                <div className="col-2 centrar">
                    <a href="/listaapis/" className="menu-lista link-menu">Listado de apis</a>
                </div>
                <div className="col-2 centrar">
                    <a href="/crearapi/" className="menu-lista link-menu">Crear apis</a>
                </div>
                <div className="col-2 centrar">

                </div>

            </div>
        </div>
    )
}
export default Footer;
