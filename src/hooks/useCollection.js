import { useEffect, useState } from 'react'
import { collection, query, where, getDocs } from 'firebase/firestore/lite'
import { db } from '../firebase/config'

export const useCollection = (name, catId) => {

    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])

    useEffect(() => {
        setLoading(true)
       
        const productosRef = collection(db, name)
        const q = catId ? query(productosRef, where('category', '==', catId)) : productosRef

        getDocs(q)
            .then((collection) => {
                const items = collection.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))

                setData(items)
            })
            .finally(() => {
                setLoading(false)
            })

    }, [catId])

    return {
        loading,
        data
    }
}