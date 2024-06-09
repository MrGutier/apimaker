import { router } from '@inertiajs/react';
import React, { useState } from 'react';
export default function Members({ miembros }) {
    const [values, setValues] = useState({ // Form fields
        id: miembros.id,
    });
    function handleSubmitDelete() {
        router.post('memberremove', values);
    }

    return (
        <div key={miembros.id} className="row">
            <div className="col-6">
                <p>{miembros.name}</p>
            </div>
            <div className="col-6">
            <form onSubmit={handleSubmitDelete}>
                <button type="submit">Eliminar</button>
            </form>
            </div>
            
            
        </div>
    )
}
