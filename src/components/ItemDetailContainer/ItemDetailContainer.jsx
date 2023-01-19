import React from 'react'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

  const cards = [
    {
      id: 1,
      categoria: "Conjunto Egresado",
      foto: "https://victormquevedo.github.io/MR-Store---VQ/imagenes/imagen_6.jpeg",
      nombre: "Conjunto De Egresado De Secundaria",
      descripcion: 
      "Un conjunto hecho para usar en egresados de secundaria tanto para mujer como hombre",
          precio: 3349,
    },
    {
      id: 2,
          categoria: "Conjunto Egresado",
          foto: "https://victormquevedo.github.io/MR-Store---VQ/imagenes/imagen_7.jpeg",
          nombre: "Conjunto De Egresado De Jardin",
          descripcion:
            "Un conjunto hecho para usar cuando los niños de jardin se egresan y pasan a primaria",
          precio: 2149,
    },
    {
      id: 3,
          categoria: "Conjunto Egresado",
          foto: "https://victormquevedo.github.io/MR-Store---VQ/imagenes/imagen_3.jpeg",
          nombre: "Conjunto De Egresado De Universitario",
          descripcion:
            "Un conjunto para usar cuando los alumnos de universidades se egresan y quieran usarlo en su entrega de diplomas",
          precio: 1099,
    },
    {
      id: 4,
          categoria: "Articulos De Sublimacion",
          foto: "https://victormquevedo.github.io/MR-Store---VQ/imagenes/imagen_12.jpg",
          nombre:
            "Tazas Sublimadas",
          descripcion:
            "Unas tazas sublimadas a gusto del cliente para poder usar tanto en casa, oficina, regalo, etc.",
          precio: 1399,
    },
    {
      id: 5,
          categoria: "Articulos De Sublimacion",
          foto: "https://victormquevedo.github.io/MR-Store---VQ/imagenes/imagen_13.jpg",
          nombre: "Indumentaria Sublimadas",
          descripcion:
            "Indumentaria sublimada a gusto del cliente para regalos, uso propio, empresa, etc.",
          precio: 3599,
    },
    {
      id: 6,
          categoria: "Articulos De Sublimacion",
          foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYIBy5gwRoOCeXoXsT9ypusKFKMXDB9GHNow&usqp=CAU",
          nombre: "Gorras Sublimadas",
          descripcion:
            "Gorras Sublimadas a gusto del cliente para regalos, uso propio, empresa, etc.",
          precio: 4310,
    },
    {
      id: 7,
      categoria: "Virretes",
      foto: "https://victormquevedo.github.io/MR-Store---VQ/imagenes/imagen_9.jpeg",
      nombre:
        "Virrete x Separado",
      descripcion:
        "Para las personas que solo le interesa el virrete por separado y usar para la celebracion tradicional de entrega de diplomas",
      precio: 1849,
    },
    {
      id: 8,
          categoria: "Guardapolvos",
          foto: "https://victormquevedo.github.io/MR-Store---VQ/imagenes/imagen_14.jpeg",
          nombre: "Guardapolvos Jardin, Primaria y Secundaria ",
          descripcion:
            "Guardapolvos hecho a medida tanto para alumnos de jardin, primaria y secundaria (del color que prefiera el cliente)",
          precio: 689,
    },
    {
      id: 9,
          categoria: "Retratos Recuerdos",
          foto: "https://m.media-amazon.com/images/I/816zrReS3LL._AC_SX466_.jpg",
          nombre: "Retratos e Impresion De Fotos",
          descripcion:
            "Retratos para mesitas de luz e impresion de fotos a gusto del cliente, tanto para recuerdos de escuela, trabajo, familia y demas",
          precio: 549,
    },
  ];

  const {id} = useParams()

  return (
    <div>
    <h1 style={{margin: "50px"}}>Mas informacion acerca de {cards[id-1].nombre}</h1>
    <div style={{ margin: "auto" }} className="col-sm-8 col-md-5">
    <img className="card-img-top" src={cards[id-1].foto} alt="Card image"/>
    <div className="card-body">
        <h4 className="card-title" style={{margin: "50px"}}>{cards[id-1].nombre}</h4>
        <p className="card-text">{cards[id-1].descripcion}</p>
        <h5 className="card-text">$ {cards[id-1].precio} ARS</h5>
        <button id={cards[id-1].id} className="btn btn-primary">Comprar</button>
    </div>
    </div>
  </div>
  )
}

export default ItemDetailContainer