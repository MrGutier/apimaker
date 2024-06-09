import React, { useState, useEffect } from 'react';
import { router } from '@inertiajs/react' // We need to import this router for making POST request with our form
import Menu from './menu/Menu';
import Footer from './footer/Footer';
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools"

export default function CrerApis(apis) {
    const [values, setValues] = useState({ // Form fields
        nombre: "",
        descripcion: "",
        archivo: "",
        publica: 0,
        publicada: 0,

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

    const [text, setText] = useState('{"Api":{}}');
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
    // store function of PostContoller
    function handleSubmit(e) {
        e.preventDefault()
        router.post('/apistore', values)
    }


    console.log(apis);
    useEffect(() => {
        handleFileChange(text);
    }, [])
    return (
        <div className='row margen100'>
            <div className='col-1'></div>
            <div className='col-11'>
                <div className='row'>
                    <h1>Crear Apis</h1>


                </div>





                <hr />
                <Menu auth={apis.apis.auth}></Menu>
                <form onSubmit={handleSubmit}>
                    <div className='row'>
                        {/* Pay attention how we create here input fields */}
                        <div className='col-12 col-lg-6'>
                            <label htmlFor="nombre">Nombre:</label>
                            <input required className='campo-nombre' id="nombre" value={values.nombre} onChange={handleChange} />
                            <br />
                            <label htmlFor="descripcion">Descripcion:</label><br />
                            <textarea required className='campo' id="descripcion" value={values.descripcion} onChange={handleChange}></textarea>
                        </div>
                        {/*<label htmlFor="archivo">Archivo:</label>
                <input id="archivo" value={values.archivo} onChange={handleChange} />*/}
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
                            <button className='boton' type="submit">Crear</button>
                        </div>
                    </div>
                </form>
            </div>
            <Footer></Footer>
        </div>
    )
}
