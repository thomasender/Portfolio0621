import React from "react";
import { Box, Image, Grid, GridItem, Heading, Button } from "@chakra-ui/react";

function Certificates() {
  return (
    <Grid
      h="200px"
      templateColumns="repeat(5, 1fr)"
      templateRows="repeat(2, 1fr)"
      gap={4}
      columnGap={30}
    >
      {/* FIRST ROW */}
      <GridItem></GridItem>
      <GridItem colSpan={3}>
        <Box bg="#FFFAF0" style={{ borderRadius: "10px", color: "#2D3748" }}>
          <Heading align="center">Certificates & Education</Heading>
        </Box>
      </GridItem>
      <GridItem></GridItem>
      {/* SECOND ROW */}
      <GridItem></GridItem>
      <GridItem>HTL Dornbirn Betriebsinformatik 2001 - 2004</GridItem>
      <GridItem>IoT Academy 2021</GridItem>
      <GridItem>Landeskonservatorium Feldkirch 2010 - 2016</GridItem>
      <GridItem></GridItem>
    </Grid>
  );
}

export default Certificates;
