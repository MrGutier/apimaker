export default function BloqueApiPrivada({ item }) {


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
                            <br />
                            <a href={"/listaapis/" + item.id+"/editar"} className="color-link-api">
                                Editar
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

