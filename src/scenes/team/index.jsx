import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import  { useState, useEffect } from 'react';

import  { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import  AdminPanelSettingsOutlinedIcon  from "@mui/icons-material/AdminPanelSettingsOutlined";
import  LockOpenOutlinedIcon  from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";
import useMediaQuery from "@mui/material/useMediaQuery";

const Team =()=> {
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
    {field: "id", headerName: "ID",  flex: isSmallScreen ? 0.5 : 1},
    {
        field: "name",
        headerName: "NAME",
        flex: 1,
        cellClassName: "name-column--cell"
    },
    {
        field: "age",
        headerName: "Age",
        type: "number",
        headerAlign: "left",
        align: "left",
        flex: 1,
    
        
    },
    {
        field: "email",
        headerName: "Email",
        flex: 1,
        
    },
    {
        field: "accessLevel",
        headerName: "Access Level",
        flex: 1,
        renderCell: ({row: {access}}) => {
            return(
                <Box
                width="60%"
                m="0 auto"
                p="5px"
                display="flex"
                justifyContent="center"
                backgroundColor={
                    access=== "admin"
                    ? colors.greenAccent[600]
                    : access === "manager"
                    ? colors.greenAccent[700]
                    : colors.greenAccent[700]
                }
                borderRadius="4px"
                >
                    {access ==="admin" && <AdminPanelSettingsOutlinedIcon/>}
                    {access ==="manager" && <SecurityOutlinedIcon/>}
                    {access ==="user" && <LockOpenOutlinedIcon/>}
                    {!isSmallScreen && (
                    <Typography color={colors.grey[100]} sx={{ml: "5px"}}>
                        {access}
                    </Typography>
            )}

                </Box>
            );
        },

    },
    
    ];

    const columnVisibilityModel = {
    age: !matches && !isSmallScreen,
    email: !matches && !isSmallScreen,
    };



    return (
        <Box m={{xs:"10px", md:"20px"}}>
            <Header title="TEAM" subtitle="Managing the Team Members"/>
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
                <DataGrid checkboxSelection rows={mockDataTeam} columns={columns} columnVisibilityModel={columnVisibilityModel}/>

            </Box>
        </Box>
    );
};


export default Team;