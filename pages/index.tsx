import type { NextPage } from "next";
import { Heading, Box } from "@chakra-ui/react";
import Nav from "../components/Navigation";
import Hero from "../components/Hero";
import Features from "../components/main/Features";

const Home: NextPage = () => {
  return (
    <>
      <Box mx={{ base: 0, md: 10, lg: 95 }} px={{ base: 2, md: 0, lg: 0 }}>
        <Nav />
        <Hero />
        <Features />
      </Box>
    </>
  );
};

export default Home;
