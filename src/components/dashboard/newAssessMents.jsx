import { Box, Button, Card, Grid, Typography } from "@mui/material";
import React from "react";
import Rec from "/aaa.png";
import Rec2 from "/calender.png";

export default function NewAssessments() {
  return (
    <Card
      sx={{
        background: " linear-gradient(74deg, #0A66C2 6.27%, #5994CE 90.96%)",
        p: 6,
        borderRadius: 2,
      }}
    >
      <Grid container display={"flex"} flexDirection={"row"}>
        <Grid
          xs={12}
          item
          sx={{}}
          display={"flex"}
          justifyContent={"flex-start"}
        >
          <img src={Rec}></img>
        </Grid>
        <Grid item display={"flex"} justifyContent={"flex-start"} xs={12}>
          <Typography
            fontFamily={"Poppins"}
            fontSize={"56px"}
            fontWeight={600}
            color={"#FFFFFF"}
          >
            0033
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Box
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"space-between"}
          >
            <Typography
              fontFamily={"Poppins"}
              fontSize={"22px"}
              fontWeight={500}
              color={"#FFFFFF"}
            >
              New Assessment's
            </Typography>
            <Button sx={{
              bgcolor: "white", '&:hover': {
                bgcolor: "white"
            } }} variant="outlined">
              <Typography
                fontSize={"14px"}
                fontFamily={"Poppins"}
                fontWeight={500}
                color={'black'}
              >
                View Detail
              </Typography>
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
}
