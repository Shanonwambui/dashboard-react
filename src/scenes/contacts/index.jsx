import React from "react";
import { Box } from "@mui/material";
import  { DataGrid, GridToolbar  } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import  { useState, useEffect } from 'react';
import useMediaQuery from "@mui/material/useMediaQuery";


const Contacts =()=> {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const matches = useMediaQuery(theme.breakpoints.down("sm"));

    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 600);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 600);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const columns = [
    {field: "id", headerName: "ID", flex: 0.5},
    {field: "registrarId", headerName: "Registrar ID", flex:  1},

    {
        field: "name",
        headerName: "NAME",
        flex:  1,
        cellClassName: "name-column--cell"
    },
    {
        field: "age",
        headerName: "Age",
        type: "number",
        headerAlign: "left",
        align: "left",
    },
    {
        field: "phone",
        headerName: "Phone Number",
        flex: 1
    },
    {
        field: "email",
        headerName: "Email",
        flex: 1
    },
    {
        field: "address",
        headerName: "Address",
        flex: 1
    },
    {
        field: "city",
        headerName: "City",
        flex: 1
    },
    {
        field: "zipCode",
        headerName: "Zip Code",
        flex: isSmallScreen ? 0.5 : 1
    },
];
const columnVisibilityModel = {
    registrarId: !matches && !isSmallScreen,
    age: !matches && !isSmallScreen,
    address: !matches && !isSmallScreen,
    city: !matches && !isSmallScreen,
    email: !matches && !isSmallScreen,
    zipCode: !matches && !isSmallScreen,
    };

    return (
        <Box m={{xs:"10px", md:"20px"}}>
            <Header title="CONTACTS" subtitle="List of contatcs for future reference"/>
            <Box
            m={{ xs: "0px", md: "40px" }}
            mt={{ xs: "0px", md: "40px" }}
            height={{xs:"90vh", md:"75vh"}}
            sx={{
                "& .MuiDataGrid-root": {
                    border: "none",
                },
                "& .MuiDataGrid-cell": {
                    borderBottom: "none",
                },
                "& .name-column--cell": {
                    color: colors.greenAccent[300],
                },
                "& .MuiDataGrid-columnHeaders": {
                    backgroundColor: colors.blueAccent[700], 
                    borderBottom: "none",
                },
                "& .MuiDataGrid-virtualScroller": {
                    backgroundColor: colors.primary[400], 
                },
                "& .MuiDataGrid-footerContainer": {
                    borderTop:"none",
                    backgroundColor: colors.blueAccent[700], 
                },
                "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                    color: `${colors.grey[100]} !important`,
                },
            }}
            >
                <DataGrid rows={mockDataContacts} columns={columns}  slots={{
    toolbar: GridToolbar,}} columnVisibilityModel={columnVisibilityModel}  />

            </Box>
        </Box>
    );
};


export default Contacts;