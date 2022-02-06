
import { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetailC/ItemDetail'
import { useParams } from 'react-router-dom'
import { getFirestore, doc, getDoc } from 'firebase/firestore'
import { Spinner } from 'react-bootstrap'
const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(true);
    const { idDetalle } = useParams()
    useEffect(() => {
        const db = getFirestore()
        const queryProd = doc(db, 'items', idDetalle)
        getDoc(queryProd)
            .then(resp => setProducto({ id: resp.id, ...resp.data() }))
            setLoading(false)
    }, [idDetalle])

    return (
        <div>
            {loading ? <Spinner/> :
                <ItemDetail producto={producto} />
            }
        </div>
    )
}
export default ItemDetailContainer
