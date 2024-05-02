import {
  Box,
  Card,
  Divider,
  Grid,
  InputAdornment,
  Paper,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Python from "/python.png";
import Java from "/java.png";
import Angular from "/ang.png";
import UIUX from "/pen.png";
import FilterListIcon from '@mui/icons-material/FilterList';




const columns = [
  {
    id: "java",
    label: "Python Developer",
    avg: "56% per month",
    total: "100",
    color: "#D9E4EF",
    textC: "#0A66C2",
    img: Python,
  },
  {
    id: "js",
    label: "Angular Developer",
    avg: "56% per month",
    total: "100",
    color: "#0A66C2",
    textC: "white",
    img: Angular,
  },
  {
    id: "php",
    label: "Java Developer",
    avg: "56% per month",
    total: "100",
    color: "#2F73A0",
    textC: "white",
    img: Java,
  },
  {
    id: "py",
    label: "UI/UX Developer",
    avg: "56% per month",
    total: "100",
    color: "#0A66C2",
    textC: "white",
    img: UIUX,
  },
];

export default function PostedJobs() {
  return (
    <Card>
      <Grid container display="flex" sx={{ p: 2 }} spacing={3}>
        <Grid item xs={12}>
          <Box
            width="100%"
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
          >
            <Stack
              display="flex"
              flexDirection="row"
              gap={6}
              justifyContent="center"
            >
              <Typography
                fontFamily={"Poppins"}
                fontSize={"28px"}
                fontWeight={600}
              >
                Posted Jobs
              </Typography>
              <Typography
                fontFamily={"Poppins"}
                fontSize={"22px"}
                fontWeight={500}
                color={'#0A66C2'}
              >
                View All
                <Divider/>
              </Typography>
            </Stack>
            <Stack display="flex" flexDirection="row" gap={2}>
              <Paper elevation={2} sx={{boxShadow: "2px 2px 16px 1px #e0e0e0;" , pt:'5px' }}>
                <TextField
                  // autoFocus={searchVal ? true : false}
                  sx={{
                    mr: "10px",
                    "& .MuiOutlinedInput-root": {
                      height: "42px",
                    },
                    "& fieldset": {
                      border: "none",
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
                  // value={searchVal}
                  // onChange={(e) => requestSearch(e)}
                />
              </Paper>
              <Paper width="100%" sx={{boxShadow: "2px 2px 16px 1px #e0e0e0;"}}>
                <Stack
                  display="flex"
                  flexDirection="row"
                  gap={3}
                  justifyContent="center"
                >
                  <FilterListIcon
                    sx={{
                      p: "8px 0px 8px 8px",
                      fontSize: "35px",
                      color: "#0A66C2",
                    }}
                  />
                  <Typography
                    fontFamily={"Poppins"}
                    fontSize={"20px"}
                    fontWeight={400}
                    sx={{ p: "8px 8px 8px 0px" }}
                  >
                    Filters
                  </Typography>
                </Stack>
              </Paper>
            </Stack>  
    
          </Box>
        </Grid>

        <Grid item xs={12} display="flex" justifyContent={"flex-start"}>
          <Box width="100%">
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs aria-label="basic tabs example">
                <Tab
                  label="Active One"
                  sx={{ fontSize: 14, fontWeight: 400 }}
                />
                <Tab
                  label="Pending Two"
                  sx={{ fontSize: 14, fontWeight: 400 }}
                />
              </Tabs>
            </Box>
          </Box>
        </Grid>

        {columns.map((c, i) => (
          <Grid item xs={3}>
            <Card key={c.id} sx={{ p: 2 }}>
              <Box sx={{ py: 2 }}>
                <Stack display="flex" flexDirection="row" gap={1}>
                  <img style={{}} src={c.img}></img>
                  <Typography
                    fontFamily={"Poppins"}
                    fontSize={"12px"}
                    fontWeight={400}
                    pt='5px'
                  >
                    {c.label}
                  </Typography>
                </Stack>
              </Box>
              <Divider />
              <Box sx={{ py: 2 }}>
                Senior Developer
                <Card
                  sx={{
                    py: 3,
                    m: 3,
                    mr: 10,
                    ml: 10,
                    bgcolor: c.color,
                    color: "#FFF",
                  }}
                >
                  <Typography
                    fontFamily={"Poppins"}
                    fontSize={"28px"}
                    fontWeight={600}
                    color={c.textC}
                  >
                    {c.total}
                  </Typography>
                </Card>
                Total Applicants
              </Box>
              <Divider />
              <Box
                sx={{ py: 2, display: "flex", justifyContent: "space-between" }}
              >
                <Stack display="flex" flexDirection="row" gap={1}>
                  <ArrowUpwardIcon sx={{ color: "#0A66C2", fontSize: "14px" }} />
                  <Typography
                    fontFamily={"Poppins"}
                    fontSize={"12px"}
                    fontWeight={400}
                  >
                    26% vs last Month
                  </Typography>
                </Stack>
                <Typography
                  fontFamily={"Poppins"}
                  fontSize={"12px"}
                  fontWeight={400}
                >
                  6 mins ago
                </Typography>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Card>
  );
}
