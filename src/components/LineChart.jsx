import React from "react";
import { useTheme } from "@mui/material";
import { tokens } from "../theme";
import { ResponsiveLine } from "@nivo/line";
import { mockLineData as data } from "../data/mockData";
import useMediaQuery from '@mui/material/useMediaQuery';


const LineChart =(isDashboard=false)=>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));


     // Adjust legend and margin based on screen size
     const legendWidth = window.innerWidth < 600 ? 50 : 80;
     const margin = {
         top: 50,
         right: window.innerWidth < 600 ? 80 : 110,
         bottom: 80,
         left: window.innerWidth < 600 ? 40 : 60,
     };


    return(
        <ResponsiveLine
        data={data}
        theme={{
            axis: {
                domain: {
                    line: {
                        stroke: colors.grey[100],
                    },
                },
                legend: {
                    text: {
                        fill: colors.grey[100],
                    },
                },
                ticks: {
                    line: {
                        stroke: colors.grey[100],
                        strokeWidth: 1,
                    },
                    text: {
                        fill: colors.grey[100],
                    },
                },
            },
            legends: {
                text: {
                    fill: colors.grey[100],
                },
            },
            tooltip: {
                container: {
                    color: colors.primary[500],
                },
            },
        
        }}
        colors={isDashboard ? {datum: "color"} : {scheme: 'nivo'}}
        margin={margin}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        yFormat=" >-.2f"
        curve="catmullRom"
        axisTop={null}
        axisRight={null}
        axisBottom={ isSmallScreen ? null : {
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: isDashboard ? undefined : 'transportation',
            legendOffset: 36,
            legendPosition: 'middle',
            truncateTickAt: 0
        }}
        axisLeft={{
            tickSize: 5,
            tickValues: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: isDashboard ? undefined : 'count',
            legendOffset: -40,
            legendPosition: 'middle',
            truncateTickAt: 0
        }}
        enableGridX={false}
        enableGridY={false}
        enablePoints= {isSmallScreen ? false : true} 
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: isSmallScreen ? 70: 100, 
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: legendWidth,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />

    )
}

export default LineChart;