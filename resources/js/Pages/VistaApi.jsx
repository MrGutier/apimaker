import { Menu } from "./menu/Menu";
import Footer from "./footer/Footer";
import { useParams } from "react-router-dom";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";
import { useState } from "react";

export default function VistaApi({ apis }) {
    const [text, setText] = useState(apis.file);
    const id = useParams('id');
    const api = apis.apis;
    console.log(apis);
    return (
        <div className="row margen-general">

            <div className="col-12">
                <div className="row">
                    <Menu auth={apis.auth}></Menu>
                    {console.log(id)}
                    <div className="col-12">
                        <div className="row margen-general ">
                            <div className="col-1"></div>
                            <div className="col-4">
                                <p className="titulo">{api.nombre}</p>
                                <p>{
                                    api.descripcion
                                }</p>
                                <br></br>
                                <p>{
                                    api.privada = 1 ? "Publica" : "Privada"
                                }</p>
                                <br />
                                <p>Ruta de la api: <a href={"/api/apidata/"+api.id}>/api/apidata/{api.id}</a></p>
                            </div>
                            <div className="col-7 margen100">

                                <AceEditor

                                    id="archivo"
                                    mode="json"
                                    theme="github"
                                    name="archivo"
                                    editorProps={{ $blockScrolling: true }}
                                    value={text}
                                    setOptions={{
                                        enableBasicAutocompletion: true,
                                        enableLiveAutocompletion: true,
                                        enableSnippets: true
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <Footer></Footer>
                </div>
            </div>
        </div>
    )
}
