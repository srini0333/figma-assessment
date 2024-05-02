import { Box, Card, Grid, InputAdornment, Paper, TextField, Typography } from "@mui/material";
import React from "react";
import Logo from "/logo.png";
import sideContent from "/Group2.png";
import search from "/Group1.png";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
export default function AppBar() {
  return (
    <Card sx={{ px: 2, py: 2 }}>
      <Grid
        container
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent={"flex-start"}
      >
        <Grid item xs={3} display="flex" justifyContent={"flex-start"}>
          <img src={Logo} alt="Imgg" style={{ width: 160 }}></img>
        </Grid>
        <Grid item xs={5} display="flex" justifyContent={"flex-start"}>
          {/* <img src={search} alt="Imgg" style={{ width: 350 }}></img> */}
          <Card elevation={1} sx={{  boxShadow: "2px 2px 16px 1px #e0e0e0;" }}>
            <TextField
              // autoFocus={searchVal ? true : false}
              sx={{
                mr: "10px",
                "& .MuiOutlinedInput-root": {
                  height: "42px",
                },
                "& fieldset": {
                  border: "none",
                  borderRadius: 5,
                },
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              placeholder="Search"
             
            />
          </Card>
        </Grid>
        <Grid item xs={4}>
          <img src={sideContent} style={{ width: 350 }}></img>
        </Grid>
      </Grid>
    </Card>
  );
}
