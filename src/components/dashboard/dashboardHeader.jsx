import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import React from "react";

export default function DashboardHeader() {
    return (
      <Box
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        width={"100%"}
      >
        <Stack
          display={"flex"}
          direction={"column"}
          gap={1}
          alignItems={"flex-start"}
        >
          <Typography fontFamily={'Poppins'} fontSize={'36px'} fontWeight={500}>
            {" "}
            HR Employee
          </Typography>
          <Typography fontFamily={'Poppins'}  fontSize={'20px'} fontWeight={400} >
            {" "}
            Enjoy your selecting potential candidates Tracking and Management
            System.
          </Typography>
        </Stack>

            <Button sx={{ height: '40px' }} variant="contained"><Typography padding ='10px' fontFamily={'Poppins'}  fontSize={'14px'}>
            Task Details</Typography></Button>
      </Box>
    );
}
