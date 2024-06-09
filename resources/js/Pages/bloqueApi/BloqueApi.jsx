export default function BloqueApi({ item }) {

    return (

        <div className="col-12 col-md-6 col-lg-4 magren-caja-api">
            <div className="row">
                <div className="col-12 centrar ">
                    {item.nombre}
                </div>
                <div className="col-12">
                    <div className="row">
                        <div className="caja-api ancho-completo">
                            <p>{item.descripcion}</p>
                            <a href={"/listaapis/" + item.id} className="color-link-api">
                                Ver más informacion
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

