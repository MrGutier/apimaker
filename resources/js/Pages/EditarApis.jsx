import React, { useState } from 'react';
import { router } from '@inertiajs/react' // We need to import this router for making POST request with our form
import Menu from './menu/Menu';
import Footer from './footer/Footer';
import AceEditor from "react-ace";
import { useParams } from "react-router-dom";
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools"

export default function CrerApis(apis) {

    console.log(apis.apis.apis);
    const id = useParams('id');
    const [values, setValues] = useState({ // Form fields
        nombre: apis.apis.apis.nombre,
        descripcion: apis.apis.apis.descripcion,
        archivo: apis.apis.file,
        publica: apis.apis.apis.publica,
        publicada: apis.apis.apis.publicada,
        id: id.id,

    });

    // We will use function below to get
    // values from form inputs
    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value
        setValues(values => ({
            ...values,
            [key]: value,
        }))
    }

    const [text, setText] = useState(apis.apis.file);
    console.log(apis.apis.file);
    function handleFileChange(text, event) {
        try {

            setText(text);
            console.log(text);
            setValues(values => ({
                ...values,
                ["archivo"]: text,
            }))
            console.log(values);
        } catch (error) {
            // pass, user is editing
        }
    }
    // This function will send our form data to
    // store function of ApiContoller
    function handleSubmit(e) {
        e.preventDefault();
        router.post('/apiupdate', values);
    }
    function handleSubmitDelete(e) {
        router.post('/apidelete', values);
        window.location.href="/listaapisprivadas/";
    }

    console.log(apis);
    return (
        <div className='row margen100'>
            <div className='col-1'></div>
            <div className='col-11'>
                <div className='row'>
                    <div className='col-12'>
                        <h1 className=''>Editar Api</h1>
                    </div>
                </div>


                <div className='col-6'>

                </div>
                <hr />
                <Menu auth={apis.apis.auth}></Menu>
                <form onSubmit={handleSubmit}>
                    <div className='row'>
                        <div className='col-12 col-lg-6'>
                            <label htmlFor="nombre">Nombre:</label>
                            <input className='campo-nombre' id="nombre" value={values.nombre} onChange={handleChange} />
                            <br />
                            <label htmlFor="descripcion">Descripción:</label><br />
                            <textarea className='campo' id="descripcion" value={values.descripcion} onChange={handleChange}></textarea>
                            <div className='row'>
                                <div className='col-12 margen100'>
                                    <select className='selector' id="publica" value={values.publica} onChange={handleChange}>
                                        <option value="1">Publica</option>
                                        <option value="0">Privada</option>
                                    </select>
                                    <select className='selector' id="publicada" value={values.publicada} onChange={handleChange}>
                                        <option value="1">Publicada</option>
                                        <option value="0">No Publicada</option>
                                    </select>
                                </div>

                            </div>
                            <div>
                            <a href="/listaapisprivadas/">
                            <button className='boton' onClick={handleSubmitDelete} type="submit">Eliminar</button>
                            </a>
                            </div>
                        </div>
                        <div className='col-12 col-lg-6'>
                            <AceEditor
                                id="archivo"
                                mode="json"
                                theme="github"
                                onChange={handleFileChange}
                                name="archivo"
                                editorProps={{ $blockScrolling: true }}
                                value={text}
                                setOptions={{
                                    enableBasicAutocompletion: true,
                                    enableLiveAutocompletion: true,
                                    enableSnippets: true
                                }}
                            />
                            <button className="boton" type="submit">Aplicar cambios</button>
                        </div>

                    </div>
                </form>


            </div>
            <Footer></Footer>

        </div>
    )
}
