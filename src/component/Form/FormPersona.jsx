import React from 'react'
import { useForm } from 'react-hook-form'

function FormPersona() {
    const { register, handleSubmit } = useForm({ defaultValues: { nombre:'', apelldo: '',fecha_nacimiento:'',dni:''}})
 
    const getPersona = async (e) => {
      e.preventDefault()
      const response = await fetch(`${process.env.REACT_APP_URLBACKEND}/games`)
      const data = await response.json();
      console.log(data)
    }
  
    const postPersona = (dataPersona) => {
      fetch(`http://localhost:8080/persona`,{
        method: 'POST',
        body:JSON.stringify({
          nombre: dataPersona.nombre,
          apellido: dataPersona.apellido,
          fecha_nacimiento:dataPersona.fecha_nacimiento,
          dni:dataPersona.dni
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        }
      })
        .then(res => res.json())
        .then(response => {
  
          alert(response.msg)
          window.location.replace('')
        })
    }
  
  return (
    <div>
         <form className='col-10 col-md-5 col-lg-4 mt-3' onSubmit={handleSubmit(postPersona)}>
            <section className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre </label>
                <input type="text" className="form-control" name='name' id="nombre" {...register("nombre")}/>
            </section>
            <section className="mb-3">
                <label htmlFor="apellido" className="form-label">Apellido</label>
                <input type="text" className="form-control" name='apellido' id="apellido" {...register("apellido")}/>
            </section>
            <section className="mb-3">
                <label htmlFor="fecha_nacimiento" className="form-label">Fecha Nacimiento</label>
                <input type="text" className="form-control" name='fecha_nacimiento' id="fecha_nacimiento" {...register("fecha_nacimiento")}/>
            </section>
            <section className="mb-3">
                <label htmlFor="dni" className="form-label">DNI</label>
                <input type="text" className="form-control" name='dni' id="dni" {...register("dni")}/>
            </section>
            <button type="submit" className="btn btn-success me-2" onClick={ (e) =>  getPersona(e) }>Obtener</button>
            <input type="submit" className="btn btn-primary ms-2" value='Enviar'/>
        </form>
    </div>
  )
}

export default FormPersona