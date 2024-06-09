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
        <div key={miembros.id}>
            <p>{miembros.name}</p>
            <form onSubmit={handleSubmitDelete}>
                <button type="submit">Eliminar</button>
            </form>
        </div>
    )
}
