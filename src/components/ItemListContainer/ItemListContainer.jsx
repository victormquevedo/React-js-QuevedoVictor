import React from 'react'
import { useParams } from 'react-router-dom';
import Card from "../Card/Card";
import Greeting from "../Greeting/Greeting";

const ItemListContainer = () => {

    const cards = [
        {
          id: 1,
          categoria: "Conjunto Egresado",
          foto: "https://victormquevedo.github.io/MR-Store---VQ/imagenes/imagen_6.jpeg",
          nombre:
            "Conjunto De Egresado De Secundaria",
          descripcion:
            "Un conjunto hecho para usar en egresados de secundaria tanto para mujer como hombre",
          precio: 2500,
        },
        {
          id: 2,
          categoria: "Conjunto Egresado",
          foto: "https://victormquevedo.github.io/MR-Store---VQ/imagenes/imagen_7.jpeg",
          nombre: "Conjunto De Egresado De Jardin",
          descripcion:
            "Un conjunto hecho para usar cuando los niños de jardin se egresan y pasan a primaria",
          precio: 2000,
        },
        {
          id: 3,
          categoria: "Conjunto Egresado",
          foto: "https://victormquevedo.github.io/MR-Store---VQ/imagenes/imagen_3.jpeg",
          nombre: "Conjunto De Egresado De Universitario",
          descripcion:
            "Un conjunto para usar cuando los alumnos de universidades se egresan y quieran usarlo en su entrega de diplomas",
          precio: 3500,
        },
        {
          id: 4,
          categoria: "Articulos De Sublimacion",
          foto: "https://victormquevedo.github.io/MR-Store---VQ/imagenes/imagen_12.jpg",
          nombre:
            "Tazas Sublimadas",
          descripcion:
            "Unas tazas sublimadas a gusto del cliente para poder usar tanto en casa, oficina, regalo, etc.",
          precio: 900,
        },
        {
          id: 5,
          categoria: "Articulos De Sublimacion",
          foto: "https://victormquevedo.github.io/MR-Store---VQ/imagenes/imagen_13.jpg",
          nombre: "Indumentaria Sublimadas",
          descripcion:
            "Indumentaria sublimada a gusto del cliente para regalos, uso propio, empresa, etc.",
          precio: 1800,
        },
        {
          id: 6,
          categoria: "Articulos De Sublimacion",
          foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYIBy5gwRoOCeXoXsT9ypusKFKMXDB9GHNow&usqp=CAU",
          nombre: "Gorras Sublimadas",
          descripcion:
            "Gorras Sublimadas a gusto del cliente para regalos, uso propio, empresa, etc.",
          precio: 1400,
        },
        {
          id: 7,
          categoria: "Virretes",
          foto: "https://victormquevedo.github.io/MR-Store---VQ/imagenes/imagen_9.jpeg",
          nombre:
            "Virrete x Separado",
          descripcion:
            "Para las personas que solo le interesa el virrete por separado y usar para la celebracion tradicional de entrega de diplomas",
          precio: 500,
        },
        {
          id: 8,
          categoria: "Guardapolvos",
          foto: "https://victormquevedo.github.io/MR-Store---VQ/imagenes/imagen_14.jpeg",
          nombre: "Guardapolvos Jardin, Primaria y Secundaria ",
          descripcion:
            "Guardapolvos hecho a medida tanto para alumnos de jardin, primaria y secundaria (del color que prefiera el cliente)",
          precio: 2900,
        },
        {
          id: 9,
          categoria: "Retratos Recuerdos",
          foto: "https://m.media-amazon.com/images/I/816zrReS3LL._AC_SX466_.jpg",
          nombre: "Retratos e Impresion De Fotos",
          descripcion:
            "Retratos para mesitas de luz e impresion de fotos a gusto del cliente, tanto para recuerdos de escuela, trabajo, familia y demas",
          precio: 700,
        },
      ];

      const {categoria} = useParams()
      const filter = categoria ? cards.filter ((item) => item.categoria === categoria) : cards


  return (
    
    <div>
        <Greeting
        greeting={"Bienvenido a la Tienda De indumentaria y Sublimacion Variado"}
        />

    <div className="d-flex container-fluid row" style={{ margin: "auto" }}>
    {filter.map(({ nombre, descripcion, foto, precio, id }, index) => (
      <Card
        key={index}
        id={id}
        nombre={nombre}
        descripcion={descripcion}
        foto={foto}
        precio={precio}
      />
    ))}
  </div>
  </div>
  )
}

export default ItemListContainer