
import { AuthContext, AuthError, Authenticated, useAuthProvider, useAuthState, useCheckAuth } from "react-admin";
import "./Menu.css";
import axios from "axios";
export const Menu = (auth) => {

    const handleLogout = async (event) => {
        event.preventDefault(); // Previene la recarga de la página
        try {
            const response = await axios.post('/logout');
            if (response.status === 200) {
                // Realiza las acciones necesarias después de un logout exitoso
                // Por ejemplo, redireccionar al usuario o actualizar el estado de autenticación
                console.log('Logout successful');
                // Redirigir a la página de inicio o login
                window.location.href = '/'; // Cambia a la URL que desees
            }
        } catch (error) {
            console.error('Logout failed', error);
            // Maneja el error de logout
        }
    }
    let autorizado = true;
    if (window.location.pathname != "/profile") {
        if (auth.auth.user == null) {
            autorizado = false;
        }
        console.log(auth);
    }
    return (

        <div className="col-lg-12 menu-fondo fixed-top">

            <div className="row ancho-completo">
                <div className="col-0 col-lg-1">

                </div>
                <div className="col-12 col-lg-5">
                    <h1 className=""><a href="/" className="menu-lista link-menu">ApiMaker</a></h1>
                </div>
                {
                    autorizado ?
                <div className="col-12 col-lg-2 centrar">
                    <div className="row ancho-completo ">
                        <div className="col-6 centrar">

                            <a href="/listaapis/" className="menu-lista link-menu">Listado de apis</a>

                        </div>

                        <div className="col-6 centrar">

                            <a href="/listaapisprivadas/" className="menu-lista link-menu">Mis apis</a>

                        </div>
                    </div>
                </div>:
                <div className="col-12 col-lg-2  centrar">
                        <a href="/listaapis/" className="menu-lista link-menu">Listado de apis</a>
                </div>
                }


                <div className="col-12 col-lg-1 centrar">
                    <a href="/crearapi/" className="menu-lista link-menu">Crear apis</a>
                </div>
                <div className="col-12 col-lg-3 centrar">{
                    autorizado ? (<div className="row ancho-completo">
                        <div className="col-6 col-lg-4 centrar">
                            <a className="link-menu" href={route('profile.edit')}><button >Perfil</button></a>
                        </div>
                        <div className="col-6 col-lg-8 centrar">
                            <form onSubmit={handleLogout}>
                                <button type="submit" className="link-menu">
                                    Cerrar sesión
                                </button>
                            </form>
                        </div>
                    </div>) : (
                        <div className="row ancho-completo">
                            <div className="col-6 col-lg-8">
                                <a href={route('login')} className="link-menu"><button >Iniciar sesión</button></a>
                            </div>
                            <div className="col-6 col-lg-4">
                                <a href={route('register')} className="link-menu"><button >Registrarse</button></a>
                            </div>
                        </div>)

                }


                </div>

            </div>
        </div>
    )
}
export default Menu;
