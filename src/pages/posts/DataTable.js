import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {useEffect, useState} from "react";
import axios from "axios";

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'title', headerName: 'Title', width: 400 },
    { field: 'userId', headerName: 'Auth', width: 130 },
    { field: 'tags', headerName: 'Tags', width: 300 },

];



export default function DataTable() {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('https://dummyjson.com/posts')
            .then(res => {
                setData(res.data.posts)
            })
    }, []);


    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={data}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
            />
        </div>
    );
}
