import React, { FC } from 'react';
import { AccountPagesState, IDataTable } from '../types';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetPagramsValue } from '../hooks/useGetPagramsValue';
import { useSelector } from 'react-redux';
import { TablePagination } from '@mui/material';

export const Table: FC<IDataTable> = ({ arr }) => {
  const rowArrays = useSelector((state: AccountPagesState | any) => state.globalState.globalArrayAccount);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const columns: GridColDef[] = [
    {
      field: 'id',
      headerName: 'ID',
      flex: 1,
      align: 'right',
    },
    {
      field: 'thumbnail',
      headerName: 'Thumbnail',
      sortable: false,
      flex: 1,
      renderCell: (params) => <img src={params.value} alt="Thumbnail" style={{ width: '100px' }} />,
    },
    { field: 'title', headerName: 'Title', flex: 1, editable: true },
    { field: 'description', headerName: 'Description', flex: 4, editable: true },
    { field: 'price', headerName: 'Price', flex: 1, editable: true },
    { field: 'discountPercentage', headerName: 'Discount %', flex: 1, editable: true },
    { field: 'rating', headerName: 'Rating', flex: 1, editable: true },
    { field: 'stock', headerName: 'Stock', flex: 1, editable: true },
    { field: 'brand', headerName: 'Brand', flex: 1, editable: true },
    { field: 'category', headerName: 'Category', flex: 1, editable: true },
  ];

  const { updateArray } = useGetPagramsValue(rowArrays);

  console.log('paramsUpdate', updateArray);

  return (
    <>
      <DataGrid
        rows={updateArray || []}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={updateArray.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
};
