import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import  { useState, useEffect } from 'react';
import useMediaQuery from "@mui/material/useMediaQuery";

import  { DataGrid, } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataInvoices } from "../../data/mockData";
import Header from "../../components/Header";

const Invoices =()=> {
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
    {field: "id", headerName: "ID", flex: isSmallScreen ? 0.5 : 1},
   
    {
        field: "name",
        headerName: "NAME",
        flex: 1,
        cellClassName: "name-column--cell"
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
        field: "cost",
        headerName: "Cost",
        flex: isSmallScreen ? 0.5 : 1,
        renderCell: (params) => (
            <Typography color={colors.greenAccent[500]}>
                ${params.row.cost}
            </Typography>
        )
    },
    {
        field: "date",
        headerName: "Date",
        flex: 1
    },

];
const columnVisibilityModel = {
    id: !matches && !isSmallScreen,
    phone: !matches && !isSmallScreen,
    email: !matches && !isSmallScreen,
    };


    return (
        <Box m={{xs:"10px", md:"20px"}}>
            <Header title="INVOICES" subtitle="List of Invoice Balances"/>
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
                "& .MuiCheckbox-root": {
                    color: `${colors.greenAccent[200]} !important`,
                },
            }}
            >
                <DataGrid 
                checkboxSelection
                rows={mockDataInvoices} columns={columns} columnVisibilityModel={columnVisibilityModel} />

            </Box>
        </Box>
    );
};


export default Invoices;