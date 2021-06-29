import React from "react";
import { Box, Image, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import { FaHome, FaTelegram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { RiMailSendLine, RiPhoneLine } from "react-icons/ri";
import { AiOutlineGlobal } from "react-icons/ai";

function Contact() {
  return (
    <Grid
      h="200px"
      templateColumns="repeat(3, 1fr)"
      templateRows="repeat(3, 1fr)"
      gap={4}
      columnGap={30}
    >
      {/* FIRST ROW */}
      <GridItem></GridItem>
      <GridItem>
        <Box bg="#BEE3F8" style={{ borderRadius: "10px", color: "#234E52" }}>
          <Heading align="center">Contact</Heading>
        </Box>
      </GridItem>
      <GridItem>
        {" "}
        <Box p={20} align="center">
          <Link to="/" style={{ textDecoration: "none", color: "#234E52" }}>
            <FaHome size={35} />
          </Link>
        </Box>
      </GridItem>
      {/* SECOND ROW */}
      <GridItem></GridItem>
      <GridItem>
        <Box bg="#BEE3F8" style={{ borderRadius: "10px", color: "#234E52" }}>
          <Box
            w="100%"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            bg="#BEE3F8"
            p={4}
            style={{ borderRadius: "15px" }}
          >
            <Image
              src="https://blissofkundalini.com/PortfolioImg/portrait.jpg"
              alt="HandpanTimeline"
              width="150px"
              style={{ borderRadius: "10px", float: "right" }}
              p={4}
            />

            <Box p="6" align="center">
              <Box
                mt="1"
                fontWeight="bold"
                lineHeight="tight"
                style={{ color: "#234E52" }}
              >
                Reach out!
              </Box>
            </Box>
            <Box p={12}>
              <Box p="6" w="90%" align="center">
                <Box mt="1" lineHeight="tight" style={{ color: "#000" }}>
                  <a
                    href="https://telegram.me/thomasender"
                    style={{
                      textDecoration: "none",
                      color: "#234E52",
                    }}
                  >
                    <FaTelegram size={30} />{" "}
                    <span style={{ fontSize: "20px" }}>@ThomasEnder</span>
                  </a>
                </Box>
                <Box>
                  <a
                    href="tel:+436602673509"
                    style={{
                      textDecoration: "none",
                      color: "#234E52",
                    }}
                  >
                    <RiPhoneLine size={30} />{" "}
                    <span style={{ fontSize: "20px" }}>+43 660 2673 509</span>
                  </a>
                </Box>

                <Box mt="1" lineHeight="tight" style={{ color: "#000" }}>
                  <a
                    href="mailto:contact@frontender.at"
                    style={{
                      textDecoration: "none",
                      color: "#234E52",
                    }}
                  >
                    <RiMailSendLine size={30} />{" "}
                    <span style={{ fontSize: "20px" }}>
                      contact@frontender.at
                    </span>
                  </a>
                </Box>
                <Box mt="1" lineHeight="tight" style={{ color: "#000" }}>
                  <a
                    href="https://www.frontender.at"
                    style={{
                      textDecoration: "none",
                      color: "#234E52",
                    }}
                  >
                    <AiOutlineGlobal size={30} />{" "}
                    <span style={{ fontSize: "20px" }}>
                      https://www.frontender.at
                    </span>
                  </a>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </GridItem>
      <GridItem></GridItem>
      {/* THIRD ROW */}
      <GridItem></GridItem>
      <GridItem></GridItem>
      <GridItem></GridItem>
    </Grid>
  );
}

export default Contact;
