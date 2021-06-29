import React from "react";
import { Box, Image, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GiMusicalNotes } from "react-icons/gi";
import { RiMailSendLine, RiPhoneLine } from "react-icons/ri";

export const Projects = () => {
  return (
    <>
      <Grid
        h="200px"
        templateColumns="repeat(5, 1fr)"
        templateRows="repeat(4, 1fr)"
        gap={4}
        columnGap={30}
      >
        {/* FIRST ROW */}
        <GridItem></GridItem>
        <GridItem colSpan={3}>
          <Box bg="#BEE3F8" style={{ borderRadius: "10px", color: "#234E52" }}>
            <Heading align="center">Projects</Heading>
          </Box>
        </GridItem>
        <GridItem>
          <Box p={20} align="center">
            <Link to="/" style={{ textDecoration: "none", color: "#234E52" }}>
              <FaHome size={35} />
            </Link>
          </Box>
        </GridItem>

        {/* SECOND ROW */}
        <GridItem></GridItem>
        <GridItem>
          <Link
            to={{
              pathname: "https://handpantimeline.netlify.app",
            }}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "#234E52" }}
          >
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
                src="https://blissofkundalini.com/PortfolioImg/TimelineThumb.png"
                alt="HandpanTimeline"
                width="300px"
                style={{ borderRadius: "10px" }}
                p={4}
              />

              <Box p="6" align="center">
                <Box
                  mt="1"
                  fontWeight="bold"
                  lineHeight="tight"
                  style={{ color: "#234E52" }}
                >
                  Crowdsourcing Handpan Timeline
                </Box>
              </Box>
              <Box p="6" w="90%" align="center">
                <Box mt="1" lineHeight="tight" style={{ color: "#000" }}>
                  This platform is currently under construction and will serve
                  as the uploading portal for the upcoming Handpan Timeline
                  Crowdsourcing project. It already provides user login, post
                  uploads, voting and realtime UI updates for create, delete and
                  update events. Realized using ReactJS and Moralis for the
                  backend. Try it out! It is in BETA an open for registration. I
                  am happy to receive your feedback!
                </Box>
              </Box>
            </Box>
          </Link>
        </GridItem>
        <GridItem>
          <Link
            to={{
              pathname: "https://motdmoralis.netlify.app",
            }}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "#234E52" }}
          >
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
                src="https://blissofkundalini.com/PortfolioImg/MOTDThumb.png"
                alt="HandpanTimeline"
                width="300px"
                style={{ borderRadius: "10px" }}
                p={4}
              />

              <Box p="6" align="center">
                <Box
                  mt="1"
                  fontWeight="bold"
                  lineHeight="tight"
                  style={{ color: "#234E52" }}
                >
                  Meme of the Day MVP
                </Box>
              </Box>
              <Box p="6" w="90%" align="center">
                <Box mt="1" lineHeight="tight" style={{ color: "#000" }}>
                  Meme of the Day is a fun social platform in the making. It
                  will be deployed on the Polygon Blockchain and has full Web3
                  integration utilizing Metamask as Crypto Wallet provider,
                  ReactJS for frontend and Moralis for the backend. I was
                  responsible for developing the MVP: User Login, Wallet
                  Integration, Meme Upload, Voting System and Live Queries. Try
                  it out!
                </Box>
              </Box>
            </Box>
          </Link>
        </GridItem>
        <GridItem>
          <Link
            to={{
              pathname: "https://react-to-do-manager.netlify.app",
            }}
            target="_blank"
            style={{ textDecoration: "none", color: "#234E52" }}
          >
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
                src="https://blissofkundalini.com/PortfolioImg/todoThumb.png"
                alt="HandpanTimeline"
                width="300px"
                style={{ borderRadius: "10px" }}
                p={4}
              />

              <Box p="6" align="center">
                <Box
                  mt="1"
                  fontWeight="bold"
                  lineHeight="tight"
                  style={{ color: "#234E52" }}
                >
                  Simple To Do List Manager
                </Box>
              </Box>
              <Box p="6" w="90%" align="center">
                <Box mt="1" lineHeight="tight" style={{ color: "#000" }}>
                  This simple To Do Manager lets you organize Tasks for your Dev
                  Team. Sign up, Log in and create Tasks for your Backend,
                  Frontend or Design Team. I choose ReactJS for the frontend and
                  utilized Firebase for the backend. I hope to find some time
                  soon to continue implementing some more useful features, such
                  as live reload and e-mail notifications in the near future.
                </Box>
              </Box>
            </Box>
          </Link>
        </GridItem>
        <GridItem></GridItem>

        {/* THIRD ROW */}
        <GridItem></GridItem>
        <GridItem>
          <Link
            to={{
              pathname: "https://pan-lab-vienna.at/player1",
            }}
            target="_blank"
            style={{ textDecoration: "none", color: "#234E52" }}
          >
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
                src="https://blissofkundalini.com/PortfolioImg/PlayerThumb.jpg"
                alt="HandpanTimeline"
                width="300px"
                style={{ borderRadius: "10px" }}
                p={4}
              />

              <Box p="6" align="center">
                <Box
                  mt="1"
                  fontWeight="bold"
                  lineHeight="tight"
                  style={{ color: "#234E52" }}
                >
                  PAN LAB Vienna Handpan Player
                </Box>
              </Box>
              <Box p="6" w="90%" align="center">
                <Box mt="1" lineHeight="tight" style={{ color: "#000" }}>
                  In this fun little side project I created a Handpan Scales
                  player for PAN LAB Vienna. Up to 2 hammers go ping-pong inside
                  a circle of Handpans which will play back a random sound
                  sample every time hit by a hammer. Over 50 different scales
                  await you, just press play and relax <GiMusicalNotes />
                  <br></br>This project included sound engineering with Presonus
                  Studio One and WebGL Development with Unity3d.
                </Box>
              </Box>
            </Box>
          </Link>
        </GridItem>
        <GridItem>
          <Link
            to={{
              pathname: "https://pan-lab-vienna.at/explorer1",
            }}
            target="_blank"
            style={{ textDecoration: "none", color: "#234E52" }}
          >
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
                src="https://blissofkundalini.com/PortfolioImg/ExplorerPLVThumb.jpg"
                alt="HandpanTimeline"
                width="300px"
                style={{ borderRadius: "10px" }}
                p={4}
              />

              <Box p="6" align="center">
                <Box
                  mt="1"
                  fontWeight="bold"
                  lineHeight="tight"
                  style={{ color: "#234E52" }}
                >
                  Meme of the Day Web3 Platform
                </Box>
              </Box>
              <Box p="6" w="90%" align="center">
                <Box mt="1" lineHeight="tight" style={{ color: "#000" }}>
                  The second project for PAN LAB Vienna is the PLV Scales
                  Explorer. A fun little app that let's you play over 50
                  distinct Handpan Scales inside your browser, either via mouse
                  click or keyboard controls. This app is intended to help
                  people find their favorite scale and shall serve as a compact
                  source of information and educational purposes. Realized
                  utilizing Unity3D, Presonus Studio One and WebGL.
                </Box>
              </Box>
            </Box>
          </Link>
        </GridItem>
        <GridItem>
          <Link
            to={{
              pathname: "https://solidityservices.netlify.app",
            }}
            target="_blank"
            style={{ textDecoration: "none", color: "#234E52" }}
          >
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
                src="https://blissofkundalini.com/PortfolioImg/upgradesafe.jpg"
                alt="HandpanTimeline"
                width="300px"
                style={{ borderRadius: "10px" }}
                p={4}
              />

              <Box p="6" align="center">
                <Box
                  mt="1"
                  fontWeight="bold"
                  lineHeight="tight"
                  style={{ color: "#234E52" }}
                >
                  Solidity Services
                </Box>
              </Box>
              <Box p="6" w="90%" align="center">
                <Box mt="1" lineHeight="tight" style={{ color: "#000" }}>
                  Besides my focus on frontend development, I love to learn
                  about Web3 and Blockchain development. I learn how to write
                  Smart Contracts with Solidity, where my speciality lies in
                  Upgrade Safe Contract Designs and I do Web3 Frontend
                  integrations for existing contracts. A recent project where I
                  redesigned the complete codebase for upgradeability was Meme
                  of the Day, soon to go Live on the Polygon Blockchain.
                </Box>
              </Box>
            </Box>
          </Link>
        </GridItem>
        <GridItem></GridItem>
        {/* FOOTER ROW */}
        <GridItem></GridItem>
        <GridItem colSpan={3} p={8}>
          <Box bg="#BEE3F8" style={{ borderRadius: "10px", color: "#234E52" }}>
            <Box align="center">
              <a
                href="mailto:contact@frontender.at"
                style={{
                  textDecoration: "none",
                  color: "#234E52",
                  paddingRight: "40px",
                }}
              >
                <RiMailSendLine size={30} />{" "}
                <span style={{ fontSize: "20px" }}>contact@frontender.at</span>
              </a>
              <a
                href="tel:+436602673509"
                style={{
                  textDecoration: "none",
                  color: "#234E52",
                  paddingLeft: "40px",
                }}
              >
                <RiPhoneLine size={30} />{" "}
                <span style={{ fontSize: "20px" }}>+43 660 2673 509</span>
              </a>
            </Box>
          </Box>
        </GridItem>
        <GridItem>
          <Box p={20} align="center">
            <Link to="/" style={{ textDecoration: "none", color: "#234E52" }}>
              <FaHome size={35} />
            </Link>
          </Box>
        </GridItem>
        {/* FOURTH ROW
        <GridItem></GridItem>
        <GridItem>
          <Link
            to={{
              pathname: "https://erc20dex.netlify.app",
            }}
            target="_blank"
            style={{ textDecoration: "none", color: "#234E52" }}
          >
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
                src="https://blissofkundalini.com/PortfolioImg/dex.png"
                alt="HandpanTimeline"
                width="300px"
                style={{ borderRadius: "10px" }}
                p={4}
              />

              <Box p="6" align="center">
                <Box
                  mt="1"
                  fontWeight="bold"
                  lineHeight="tight"
                  style={{ color: "#234E52" }}
                >
                  My ERC20 DEX on Ropsten Network
                </Box>
              </Box>
              <Box p="6" w="90%" align="center">
                <Box mt="1" lineHeight="tight" style={{ color: "#000" }}>
                  Part of the curriculum at the DAPP University was building a
                  decentralized trading platform for ERC20 Tokens. The
                  application let's you trade DAUT, my ERC20 Token on the
                  Ropsten Testnet, against rETH, Ropsten Testnet Ether. Simply
                  install{" "}
                  <a
                    href="https://metamask.io"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Metamask
                  </a>
                  , <a href="https://faucet.ropsten.be/">get some rETH</a> from
                  the Ropsten Faucet and start trading. Note! You need Metamask
                  installed in your Browser! Created using ReactJS, Solidity and
                  Web3.js!
                </Box>
              </Box>
            </Box>
          </Link>
        </GridItem>
        <GridItem>
          <Link
            to={{
              pathname: "https://erc20guessnumber.netlify.app",
            }}
            target="_blank"
            style={{ textDecoration: "none", color: "#234E52" }}
          >
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
                src="https://blissofkundalini.com/PortfolioImg/MTNT.png"
                alt="HandpanTimeline"
                width="300px"
                style={{ borderRadius: "10px" }}
                p={4}
              />

              <Box p="6" align="center">
                <Box
                  mt="1"
                  fontWeight="bold"
                  lineHeight="tight"
                  style={{ color: "#234E52" }}
                >
                  Meme of the Day Web3 Platform
                </Box>
              </Box>
              <Box p="6" w="90%" align="center">
                <Box mt="1" lineHeight="tight" style={{ color: "#000" }}>
                  MTNT is my ERC20 Token deployed on Mumbai Network (Polygon
                  Testnet). The frontend is fully integrated with Metamask.
                  Every wallet has 1 free request for 1000 MTNT Tokens. Also,
                  you can win additional Tokens in the Coin Flip game and win
                  Test Matic (Testnet Ether) when guessing the correct number!
                  Further, the UI let's you transfer tokens and shows your
                  balances. Created using plain JS, HTML and CSS.
                </Box>
              </Box>
            </Box>
          </Link>
        </GridItem>
        <GridItem>
          <Link
            to={{
              pathname: "https://wwtstakingv2.netlify.app",
            }}
            target="_blank"
            style={{ textDecoration: "none", color: "#234E52" }}
          >
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
                src="https://blissofkundalini.com/PortfolioImg/wwt.jpg"
                alt="HandpanTimeline"
                width="300px"
                style={{ borderRadius: "10px" }}
                p={4}
              />

              <Box p="6" align="center">
                <Box
                  mt="1"
                  fontWeight="bold"
                  lineHeight="tight"
                  style={{ color: "#234E52" }}
                >
                  Solidity Services
                </Box>
              </Box>
              <Box p="6" w="90%" align="center">
                <Box mt="1" lineHeight="tight" style={{ color: "#000" }}>
                  A recent project where I set up frontend functionality for the
                  WWT staking Smart Contract. My job was to build and set up the
                  UI and connect the Smart Contract functions with a website and
                  integrate wallet authentication with Metamask. This project is
                  live on the Ethereum and Binance Smartchain Network. Realized
                  using JS, HTML, Bootstrap, JQuery and CSS.
                </Box>
              </Box>
            </Box>
          </Link>
        </GridItem>
        <GridItem></GridItem> */}
      </Grid>
    </>
  );
};

export default Projects;
