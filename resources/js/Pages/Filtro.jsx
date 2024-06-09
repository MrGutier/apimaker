
import { useEffect } from 'react';

export default function Filtro({api, setApi}) {
    function sortZA(p1, p2) {
        if (p1.nombre > p2.nombre) return -1;
        if (p1.nombre < p2.nombre) return 1;
        return 0;
      }
      function sortAZ(p1, p2) {
        if (p1.nombre < p2.nombre) return -1;
        if (p1.nombre > p2.nombre) return 1;
        return 0;
      }
    function cambiarOrden(event){

          console.log(api+"entra");
        event.target.value === 'asc' ? setApi([...api].sort(sortZA)) : setApi([...api].sort(sortAZ));
        console.log(event.target.value);
      };
        useEffect(()=>{
            setApi([...api].sort(sortAZ));
        }, [])

    return (
        <div className='col-2'>
        <div className='filtro sticky-top'>
            <div className='row'>
            <div className='col-12'>
                <h2>Ordenación</h2>
                <br />
            </div>
            <div className='col-12'>
                <label htmlFor="tiutlo">Alfabético</label>
            </div>
            <div className='col-12'>
                <select className='color-texto-filtro' name="titulo" id="titulo" onChange={cambiarOrden} defaultValue="desc">
                    <option value="desc" className='color-texto-filtro'>A-Z</option>
                    <option value="asc" className='color-texto-filtro'>Z-A</option>
                </select>
            </div>
            <div className='col-12'>

            </div>
            </div>
        </div>
        </div>
    )
}
