import './productsList.css'
import {useState} from 'react'

import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { productRows } from '../../dummyData';
import { Link } from "react-router-dom"

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';


const ProductsList = () => {

  const [data,setData] = useState(productRows);

  const handleDelete = (id) => {
    setData(data.filter(item => item.id !== id))
  }

  const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'product', headerName: 'Product', width: 200 , renderCell: (params) => {
            return (
            <div className='productListContainer'>
                <img className="productListImg" alt="productImg" src={params.row.img}/>
                {params.row.name}
            </div>
        )}
        },
        {field:'stock', headerName: 'Stock', width:180},
        {field:'status', headerName:'Status',width:90},
        {field:'price', headerName:'Price',width:150},
        {field:'action', headerName:'Action', width: 160, renderCell: (params) =>{
            return(
                <>
                    <Link to={"/products/"+params.row.id}>
                        <button className="productListEdit">Edit</button>
                    </Link>
                    <DeleteOutlineIcon 
                        className="productListDelete"
                        onClick={()=>handleDelete(params.row.id)}
                    />
                </>
              
            )
        }},

  ];




  return (
    <div className='productsList'>
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

export default ProductsList