import React from "react";
import { Box } from "@mui/material"
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";

const Pie =()=> {
    return(
    <Box m={{ xs: "10px", md: "20px" }} mt="40px">
        <Header title="Pie Chart" subtitle="Simple Pie Chart"/>
        <Box height="75vh" mt="40px" ml={{xs: "0px", md: "20px"}}>
            <PieChart/>

        </Box>

        

    </Box>)
}

export default Pie;