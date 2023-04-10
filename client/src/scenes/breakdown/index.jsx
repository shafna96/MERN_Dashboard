import React from "react";
import { Box } from "@mui/material";
import { BreakdownChart, Header } from "components";

const Breakdown = () => {
  return (
    <Box m="1.5rem 2.5rem">
      <Header title="BREAKDOWN" subTitle="Breakdown of Sales By Category" />
      <Box mt="40px" height="75vh">
        <BreakdownChart />
      </Box>
    </Box>
  );
};

export default Breakdown;
