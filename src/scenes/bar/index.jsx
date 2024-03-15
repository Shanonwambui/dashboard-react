import React from "react";
import { Box } from "@mui/material";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";

const Bar =()=> {
    return(
        <Box m="20px" mt="20px">
            <Header title="Bar Chart" subtitle="Simple Bar Chart" />
            <Box height="75vh" mt="40px">
                <BarChart/>

            </Box>

        </Box>
    );
};

export default Bar;