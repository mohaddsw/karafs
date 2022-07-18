import styles from './Table.module.scss'
const Table = ({ headerItems, tblItems }) => {
    return (
        <div className={styles['table']}>
            <table  height="300px" >
            <thead>
                <tr>
                    {headerItems}
                </tr>
            </thead>
           <tbody>
                {tblItems}
            </tbody>
        </table >
        </div>
    )
}
export default Table