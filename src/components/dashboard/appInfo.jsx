import { Box, Card, Divider, Stack, Typography, useTheme } from "@mui/material";
import merge from "lodash.merge";
import Chart from "react-apexcharts";
import { baseChartOptions } from "../../utils/baseChartOptions";
import { format } from "../../utils/currency";
import R1 from "/R1.png";
import R2 from "/R2.png";



const TopSellingCategories = () => {
  const theme = useTheme(); // REACT CHART DATA SERIES

  const chartSeries = [{
    name: "Sales",
    data: [30000, 20000, 45000, 40000, 48000, 25000, 40000]
  }]; // REACT CHART CATEGORIES LABEL

  const chartCategories = ["70% ECR", "FGI 50%", "EOQ 80%", "FMG 75%", "PLG 90%", "OLX 60%", "FCR 70%"]; // REACT CHART OPTIONS

  const chartOptions = merge(baseChartOptions(theme), {
    stroke: {
      width: 0
    },
    colors: [theme.palette.primary.main, theme.palette.divider],
    grid: {
      show: true,
      strokeDashArray: 3,
      borderColor: theme.palette.divider
    },
    xaxis: {
      crosshairs: {
        show: true
      },
      categories: chartCategories,
      labels: {
        show: true,
        style: {
          colors: theme.palette.text.secondary
        }
      }
    },
    yaxis: {
      min: 0,
      show: true,
      max: 50000,
      tickAmount: 5,
      labels: {
        formatter: value => format(value),
        style: {
          colors: theme.palette.text.secondary
        }
      }
    },
    plotOptions: {
      bar: {
        borderRadius: 15,
        distributed: true,
        columnWidth: "30",
        borderRadiusApplication: "end"
      }
    },
    tooltip: {
      y: {
        formatter: function (val, {
          dataPointIndex,
          w
        }) {
          return `${w.globals.labels[dataPointIndex]} : $${format(val)}`;
        }
      }
    },
    responsive: [{
      breakpoint: theme.breakpoints.values.sm,
      options: {
        plotOptions: {
          bar: {
            borderRadius: 10,
            horizontal: true
          }
        },
        xaxis: {
          labels: {
            formatter: value => format(value)
          }
        },
        yaxis: {
          show: true,
          labels: {
            style: {
              fontWeight: 500,
              colors: theme.palette.text.secondary,
              fontFamily: theme.typography.fontFamily
            }
          }
        }
      }
    }]
  });
  return (
    <Card
      sx={{
        pt: 3,
        px: 2,
        pb: 1,
      }}
    >
      <Box px={2} display={"flex"} justifyContent={"space-between"}>
        <Stack
          display="flex"
          flexDirection="row"
          gap={6}
          justifyContent="center"
        >
          <Typography fontFamily={"Poppins"} fontSize={"22px"} fontWeight={500}>
            Application's Info
          </Typography>
          <Stack
            display="flex"
            flexDirection="row"
            gap={6}
            pt='7px'
            justifyContent="center"
          >
            <Stack
              display="flex"
              flexDirection="row"
              gap={1}
              justifyContent="center"
            >
              <img height={'20px'} width={'20px'} src={R1}></img>
              <Typography fontFamily={'Poppins'}>Received</Typography>
            </Stack>
            <Stack
              display="flex"
              flexDirection="row"
              gap={1}
              justifyContent="center"
            >
              <img height={'20px'} width={'20px'} src={R2}></img>
              <Typography fontFamily={'Poppins'}>Processed</Typography>
            </Stack>
          </Stack>
        </Stack>

        {/* <MoreButton size="small" /> */}
      </Box>

      <Chart
        type="bar"
        height={265}
        series={chartSeries}
        options={chartOptions}
      />
    </Card>
  );
};

export default TopSellingCategories;