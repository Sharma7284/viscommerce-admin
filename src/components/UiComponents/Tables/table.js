import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Button, Select, MenuItem, CircularProgress } from "@mui/material";
import SelectDropdown from "../SelectDropdown/selectDropdown";

const TableComponent = ({ data, emailTemplates }) => {
  const columns = [
    {
      field: `userId`,
      headerName: `User ID`,
      flex: 1,
    },
    {
      field: `email`,
      headerName: `Email`,
      flex: 1,
    },
    {
      field: `isSubscribe`,
      headerName: `Status`,
      valueGetter: (params) => `${params ? "Subscribed" : "Not Subscribed"}`,
    },
    {
      field: `created_at`,
      headerName: `Date & Time`,
      flex: 1,
      valueGetter: (params) =>
        `${params?.split("T")[0]?.replace(/-/g, "/")} - ${
          params?.split("T")[1]?.split(`${"." || "+"}`)[0]
        }`,
    },
    {
      field: `Select Template`,
      headerName: `Select Template`,
      flex: 1,
      renderCell: (parmas) => <SelectDropdown></SelectDropdown>,
    },
    {
      field: `send`,
      headerName: `Mail Button`,
      renderCell: (parmas) => (
        <Button
          variant="contained"
          color="primary"
          onClick={() => handelAction(parmas.row.id)}
        >
          Send
        </Button>
      ),
    },
  ];
  const [rows, setRows] = useState(null);
  const [selectedRows, setSelectedRows] = useState([]);
  const [loading, setLoading] = useState(true);

  const handelAction = (item) => {
    console.log(item);
  };

  const handleStatusChange = (event, id) => {
    const newStatus = event.target.value;
    setRows((prevRows) =>
      prevRows.map((row) =>
        row.userId === id ? { ...row, status: newStatus } : row
      )
    );
  };

  const handleSelectAll = () => {
    const allRowIds = rows.map((row) => row.email);
    console.log(allRowIds);
    setSelectedRows(allRowIds);
  };

  useEffect(() => {
    if (data) {
      setRows(
        data?.data?.map((item, index) => ({ ...item, id: item?.userId }))
      );
      setLoading(false);
    }
  }, [data]);

  return (
    <Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Button variant="container" color="primary" onClick={handleSelectAll}>
          Select All
        </Button>
        <SelectDropdown></SelectDropdown>
      </Box>
      {rows && (
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          loading={loading}
          rowsPerPageOptions={[5]}
          checkboxSelection
          // disableSelectionOnClick
        ></DataGrid>
      )}
    </Box>
  );
};

export default TableComponent;
