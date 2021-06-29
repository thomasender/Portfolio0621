import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { DiReact, DiJsBadge } from "react-icons/di";
import { RiMailSendLine } from "react-icons/ri";

import { Heading, Text, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import "./homepage.css";

function Homepage() {
  return (
    <Box spacing={6} align="center" marginTop="10%">
      <Heading size="lg" fontSize="50px" color="#fff">
        Thomas Ender
      </Heading>
      <Heading size="lg" fontSize="40px" color="#fff">
        Front-end Developer
      </Heading>
      {/* Projects Link */}
      <Link to="/projects" style={{ textDecoration: "none", color: "#fff" }}>
        <Text fontSize="35px">
          <DiJsBadge size={25} />
          <DiReact size={25} />
          Projects
        </Text>
      </Link>
      {/* Github Link */}
      <Link
        to={{
          pathname: "https://github.com/thomasender",
        }}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none", color: "#fff" }}
      >
        <Text fontSize="35px">
          <FaGithub size={25} />
          Repos
        </Text>
      </Link>
      <Link
        to={{
          pathname: "https://www.linkedin.com/in/thomasender/",
        }}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none", color: "#fff" }}
      >
        <Text fontSize="35px">
          <FaLinkedin size={30} />
          LinkedIn
        </Text>
      </Link>
      <Link to="/contact" style={{ textDecoration: "none", color: "#fff" }}>
        <Text fontSize="35px">
          <RiMailSendLine size={30} />
          Contact
        </Text>
      </Link>
    </Box>
  );
}

export default Homepage;
