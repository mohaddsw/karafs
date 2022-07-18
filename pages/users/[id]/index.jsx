import { useRouter } from "next/router"
import { useLayoutEffect, useState } from "react"
import Table from '../../../components/DataTbl/Table.jsx'
import axios from '../../../plugins/axios.js'
import styles from './userId.module.scss'
import generateData from '../../../utils/generateTableData.js'



const UserId = () => {
    const router = useRouter()
    const { id } = router.query
    const [userDetail, setUserDetail] = useState({})
    const [posts, setPosts] = useState([])
    const [header, setHeader] = useState([])
    useLayoutEffect(() => {
        axios.get('/users/' + id)
            .then(res => {
                setUserDetail(res.data)
            })
            .catch(err => {
                alert(`لود دیتا با خطا مواجه شد.${err}`)
            })
    }, [id])
    useLayoutEffect(() => {
        axios.get('/posts?userId=' + id)
            .then(res => {
                console.log(res)
                let newRes = generateData(res.data, ["title","body"])
                setHeader(Object.keys(newRes[0]))
                setPosts(Object.values(newRes))
            })
            .catch(err => {
                alert(`لود دیتا با خطا مواجه شد.${err}`)
            })
    }, [id])
    const headerItems = header.map(hr => {
        return (<th key={hr}>{hr}</th>)
    })
    const tblTd = (item) => Object.entries(item).map((val, key) => {
        return (
            <td key={val[0]}>{val[1]}</td>
        )
    })

    const tblItems = posts.map(item => {
        return (
            <tr key={item.id} >
                {tblTd(item)}
            </tr>
        )
    })


    return (       

        <div div className={styles['user']}>
            <div className={styles['user__row']}>
                <div><span>id:</span><span>{userDetail.id}</span></div>
                <div><span>name:</span><span>{userDetail.name}</span></div>
                <div><span>username:</span><span>{userDetail.username}</span></div>
            </div>
            <div className={styles['user__row']}>
                <div><span>email:</span><span>{userDetail.email}</span></div>
                <div><span>phone:</span><span>{userDetail.phone}</span></div>
                <div><span>website:</span><span>{userDetail.website}</span></div>
            </div>
            <div className={styles['user__row']}>
                <div><span>company:</span><span>{userDetail?.company?.name}</span></div>

            </div>
            <div className={styles['user__tbl']}>
                {
                    posts.length &&
                    <Table headerItems={headerItems} tblItems={tblItems} />
                }
            </div>
        </div>

    )
}
export default UserId