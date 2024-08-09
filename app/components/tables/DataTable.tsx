"use client";
import {
    DataGrid,
    GridColDef,
    GridToolbar,
} from "@mui/x-data-grid";
import Image from "next/image";

type Props = {
    columns: GridColDef[];
    rows: object[];
    slug: string;
};

const DataTable = (props: Props) => {
    const columns = Array.isArray(props.columns) ? props.columns : [];

    const actionColumn: GridColDef = {
        field: "action",
        headerName: "Action",
        width: 150,
        renderCell: (params) => {
            return (
                <div className="flex gap-4 items-center">
                        <Image src="/view.svg" alt="View" className="w-5 h-5 cursor-pointer" width={100} height={100} />
                    <div className="cursor-pointer">
                        <Image src="/delete.svg" alt="Delete" className="w-5 h-5" width={100} height={100} />
                    </div>
                </div>
            );
        },
    };

    return (
        <div className="p-5 bg-white rounded-lg shadow-md">
            <DataGrid
                className="bg-white"
                rows={props.rows}
                columns={[...columns, actionColumn]}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 10,
                        },
                    },
                }}
                components={{ Toolbar: GridToolbar }}
                componentsProps={{
                    toolbar: {
                        showQuickFilter: true,
                        quickFilterProps: { debounceMs: 500 },
                    },
                }}
                pageSizeOptions={[10]}
                checkboxSelection
                disableRowSelectionOnClick
                disableColumnFilter
                disableDensitySelector
                disableColumnSelector
            />
        </div>
    );
};

export default DataTable;