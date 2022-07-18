import styles from './users.module.scss'
import axios from '../../plugins/axios.js'
import { useEffect, useLayoutEffect, useState } from 'react'
const Users = () => {
    const [header, setHeader] = useState([])
    const [items, setItems] = useState([])
    useLayoutEffect(() => {
        axios.get('/users')
            .then(res => {
                setHeader(Object.keys(res.data[0]))
                setItems(Object.values(res.data))
            })
            .catch(err => { })
    }, [])
    const headerItems = header.map(hr => {
        return (<th key={hr}>{hr}</th>)
    })
    const tblItems = items.map(item => {
        return (
            <tr key={item.id}>
                
            </tr>
        )
    })
    return (
        <div className={styles['users']}>
            {
                items.length &&
                <table className={styles['users__table']}>
                    <thead>
                        <tr>

                            {headerItems}
                        </tr>
                    </thead>
                    <tbody>
                        {tblItems}
                    </tbody>
                </table>
            }
        </div>
    )
}
export default Users