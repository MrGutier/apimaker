import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import { Head } from '@inertiajs/react';
import { useState } from 'react';
import { router } from '@inertiajs/react';
import Members from '../Members';

export default function Edit({ auth, mustVerifyEmail, status , miembros}) {
    const [values, setValues] = useState({ // Form fields
        nombreMiembro: "",
    });
    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value
        setValues(values => ({
            ...values,
            [key]: value,
        }))
        console.log(values);
    }
    function handleSubmit(e) {
        e.preventDefault();
        router.post('/profile/add/member', values);
    }
    console.log(miembros);
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Profile</h2>}
        >
            <Head title="Profile" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                            className="max-w-xl"
                        />
                    </div>

                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <UpdatePasswordForm className="max-w-xl" />
                    </div>

                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <DeleteUserForm className="max-w-xl" />
                    </div>
                    {auth.user.type == "organization" ?
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <div className='row'>
                            <div className='col-6'>
                                <p><strong>Añadir miembros a la organización</strong></p>
                            <form onSubmit={handleSubmit}>
                                <label htmlFor="nombreMiembro">Nombre:</label>
                                <input  className='campo-miembro' id="nombreMiembro" value={values.nombreMiembro} onChange={handleChange} />
                                <button className='boton' type="submit">Añadir Miembro</button>
                            </form>
                            </div>
                            <div className='col-6'>
                            <p><strong>Miembros</strong></p>
                            {miembros.map((miembro) => (
                                <Members miembros={miembro}></Members>
                            ))}
                            </div>
                        </div>
                    </div>:<></>
                    }



                </div>
            </div>
        </AuthenticatedLayout>
    );
}
