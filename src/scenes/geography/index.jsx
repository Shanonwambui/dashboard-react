import React from "react";
import { Box , useTheme} from "@mui/material"
import Header from "../../components/Header";
import GeographyChart from "../../components/GeographyChart";
import { tokens } from "../../theme";

const Geography =()=> {
    const theme=useTheme();
    const colors = tokens(theme.palette.mode);
    
    return(
    <Box m="20px">
        <Header title="Geography" subtitle="Simple Geography Chart"/>
        <Box height="75vh"
        border={`1px solid ${colors.grey[100]}`}
        borderRadius="4px"
        width="100%"
>
            <GeographyChart/>

        </Box>

        

    </Box>
    );
};

export default Geography;