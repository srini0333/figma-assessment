import { Grid } from "@mui/material";
import React from "react";
import DashboardHeader from "./dashboardHeader";
import TopSellingCategories from "./appInfo";
import NewAssessments from "./newAssessMents";
import CandidateStatus from "./candidateStatus";
import AppBar from "./appBar";
import PostedJobs from "./PostedJobs";

export default function PageView() {
  return (
    <Grid container display={"flex"} flexDirection={"row"} spacing={5}>
      <Grid item xs={12}>
        <AppBar />
      </Grid>
      <Grid item xs={12}>
        <DashboardHeader />
      </Grid>
      <Grid item xs={7}>
        <TopSellingCategories />
      </Grid>
      <Grid item xs={5}>
        <NewAssessments />
      </Grid>
      <Grid item xs={12}>
        <CandidateStatus />
      </Grid>
      <Grid item xs={12}>
        <PostedJobs />
      </Grid>
    </Grid>
  );
}
