import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'

export const ItemDetailContainer = () => {
    const {id} = useParams()

    const [producto, setProductos] = useState([])
    useEffect(() => {
        fetch('../json/productos.json')
        .then(response => response.json())
        .then(products => {
            const item = products.find(prod => prod.id === parseInt(id))
            setProductos(item)
        })
    }, [])
    return (
        <div >
            <ItemDetail item= {producto}/>
        </div>
    )
}
