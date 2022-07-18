import styles from './users.module.scss'
import axios from '../../plugins/axios.js'
import { useLayoutEffect, useState } from 'react'
import generateData from '../../utils/generateTableData.js'
import Table from '../../components/DataTbl/Table.jsx'
import { useRouter } from 'next/router'


const Users = () => {
    const [header, setHeader] = useState([])
    const [items, setItems] = useState([])
    const router = useRouter()
    useLayoutEffect(() => {
        axios.get('/users')
            .then(res => {
                let newRes = generateData(res.data, ['email', 'username', 'name', 'id'])
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
    const tblTd = (item) => Object.entries(item).map((val, key) => {
        return (
            <td key={val[0]}>{val[1]}</td>
        )
    })
    const clickedRow = (id) => {
        router.push({
            pathname: '/users/[id]',
            query: { id: id },
          })
    }
    const tblItems = items.map(item => {
        return (
            <tr key={item.id} onClick={()=>{clickedRow(item.id)}}>
                {tblTd(item)}
            </tr>
        )
    })


    return (
        <div className={styles['users']}>
            {
                items.length &&
                <Table headerItems={headerItems} tblItems={tblItems} />
            }
        </div>
    )
}
export default Users