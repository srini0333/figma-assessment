import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Box, Button, Card, Divider, Grid, InputAdornment, Stack, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from '@mui/icons-material/FilterList';
const columns = [
  { id: "name", label: "Name", minWidth: 170 },
  { id: "code", label: "ISO\u00a0Code", minWidth: 100 },
  {
    id: "population",
    label: "Population",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "size",
    label: "Size\u00a0(km\u00b2)",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "density",
    label: "Density",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
  createData("India", "IN", 1324171354, 3287263),
  createData("China", "CN", 1403500365, 9596961),
  createData("Italy", "IT", 60483973, 301340),
  createData("United States", "US", 327167434, 9833520),
  createData("Canada", "CA", 37602103, 9984670),
  createData("Australia", "AU", 25475400, 7692024),
  createData("Germany", "DE", 83019200, 357578),

];

export default function CandidateStatus() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Card elevation={0}>
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
                fontSize={"22px"}
                fontWeight={500}
              >
                Candidate Status
              </Typography>
              <Typography
                fontFamily={"Poppins"}
                fontSize={"22px"}
                fontWeight={500}
                color={"#0A66C2"}
              >
                View All
                <Divider />
              </Typography>
            </Stack>

            <Stack display="flex" flexDirection="row" gap={2}>
              <Paper
                elevation={2}
                sx={{ boxShadow: "2px 2px 16px 1px #e0e0e0;", pt: "5px" }}
              >
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
              <Paper
                width="100%"
                sx={{ boxShadow: "2px 2px 16px 1px #e0e0e0;" }}
              >
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
        <Grid item xs={12}>
          <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <TableContainer sx={{ maxHeight: 440 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth }}
                      >
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={row.code}
                        >
                          {columns.map((column) => {
                            const value = row[column.id];
                            return (
                              <TableCell key={column.id} align={column.align}>
                                {column.format && typeof value === "number"
                                  ? column.format(value)
                                  : value}
                              </TableCell>
                            );
                          })}
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
      </Grid>
    </Card>
  );
}
