import React from "react";
import { Box } from "@mui/material";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";


const Bar =()=> {
    return(
        <Box m={{ xs: "10px", md: "20px" }} mt="20px">
            <Header title="Bar Chart" subtitle="Simple Bar Chart" />
            <Box height="75vh" mt="40px" ml={{xs: "0px", md: "20px"}}>
                <BarChart/>

            </Box>

        </Box>
    );
};

export default Bar;