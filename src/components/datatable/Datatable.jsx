import React from 'react'
import { DataGrid } from '@material-ui/data-grid';

import './datatable.scss'
import { userColumns, userRows } from '../../assets/source/datatablesource'

const Datatable = () => {
    const actionColumn = [{ field : 'action', headerName : 'Action', width : 200, renderCell:()=>{
        return (
            <div className="cellAction">
                <div className="viewButton">View</div>
                <div className="deleteButton">Delete</div>
            </div>
        )
    } }]


  return (
    <div className='datatable'>
        <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={5}
        checkboxSelection
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
      />
    </div>
  )
}

export default Datatable