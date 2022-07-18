import styles from './users.module.scss'
import axios from '../../plugins/axios.js'
import { useLayoutEffect, useState } from 'react'
import generateData from '../../utils/generateTableData.js'
const clickedRow=()=>{
    alert('test')
}
const Users = () => {
    const [header, setHeader] = useState([])
    const [items, setItems] = useState([])
    useLayoutEffect(() => {
        axios.get('/users')
            .then(res => {
                let newRes=generateData(res.data,['email' , 'username' , 'name'])
                setHeader(Object.keys(newRes[0]))
                setItems(Object.values(newRes))
            })
            .catch(err => {
                alert(`لود دیتا با خطا مواجه شد.${err}`)
             })
    }, [])
    const headerItems = header.map(hr => {
        return (<th key={hr}>{hr}</th>)
    })
    const tblTd=(item)=>Object.entries(item).map((val,key)=>{  
        return (
            <td key={val[0]}>{val[1]}</td>
        )
    })
    const tblItems = items.map(item => {
        return (
            <tr key={item.id} onClick={clickedRow}>
                {tblTd(item)}
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