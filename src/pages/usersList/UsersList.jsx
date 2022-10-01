import {useState} from 'react'
import './usersList.css'
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { userRows } from '../../dummyData';
import { Link } from "react-router-dom"

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const UsersList = () => {

    const [data, setData] = useState(userRows);

    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id))
    }

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'username', headerName: 'Username', width: 200 , renderCell: (params) => {
            return (
            <div className='userListUser'>
                <img className="userListImg" alt="avatar" src={params.row.avatar}/>
                {params.row.username}
            </div>
        )}
        },
        {field:'email', headerName: 'Email', width:180},
        {field:'status', headerName:'Status',width:90},
        {field:'transaction', headerName:'Transaction Volume',width:150},
        {field:'action', headerName:'Action', width: 160, renderCell: (params) =>{
            return(
                <>
                     <Link to={"/users/"+params.row.id}>
                        <button className="userListEdit">Edit</button>
                     </Link>
                     <DeleteOutlineIcon 
                        className="userListDelete"
                        onClick={()=>handleDelete(params.row.id)}
                    />
                </>
               
            )
        }},

    ];



    const DataTable = () =>{
        return (
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={data}
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[10]}
                    checkboxSelection
                    disableSelectionOnClick
                    
                />
            </div>
        )
    }

  return (
    <div className='usersList'>
        <DataTable/>
    </div>
  )
}

export default UsersList