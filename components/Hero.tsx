import * as React from "react";
import {
  chakra,
  Container,
  Stack,
  HStack,
  Text,
  useColorModeValue,
  Button,
  Image,
  Skeleton,
  Box,
  Link,
  Icon,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { GoChevronRight } from "react-icons/go";
import { MdBolt } from "react-icons/md";

const HeroSection = () => {
  return (
    <Container maxW="8xl" px={{ base: 6, md: 3 }} py={24}>
      <Stack
        direction={{ base: "column", md: "row" }}
        justifyContent="center"
        spacing={{ base: 0, md: 50, lg: 90 }}
      >
        <Stack
          direction="column"
          spacing={7}
          justifyContent="center"
          maxW="700px"
        >
          <HStack
            as={Link}
            p={1}
            rounded="full"
            fontSize="sm"
            w="max-content"
            bg={useColorModeValue("gray.300", "gray.700")}
            fontFamily="Inter"
          >
            <Box
              py={2}
              px={3}
              lineHeight={1}
              rounded="full"
              color="black"
              fontWeight="bold"
              bg="#FBCABF"
            >
              What&apos;s new
            </Box>
            <HStack spacing={1} alignItems="center" justifyContent="center">
              <Text lineHeight={1}>Jupiter just launched!</Text>
              <Icon as={GoChevronRight} w={4} h={4} />
            </HStack>
          </HStack>
          <chakra.h1
            fontSize="5xl"
            lineHeight={1}
            fontWeight="extrabold"
            textAlign="left"
            fontFamily="Inter Tight"
          >
            Your schedule, assignments <br />
            <chakra.span color="#FBCABF">all in one place</chakra.span>.
          </chakra.h1>
          <Text
            fontSize="1.1rem"
            textAlign="left"
            lineHeight="1.375"
            fontWeight="400"
            color="gray.500"
            fontFamily="Inter"
          >
            Jupiter is free, open-source, and privacy-focused. View your Google
            Classroom assignments and class schedules{" "}
            <strong style={{ fontFamily: "Inter Tight" }}>
              all in one simple dashboard.
            </strong>
          </Text>
          <HStack
            spacing={{ base: 0, sm: 2 }}
            mb={{ base: "3rem !important", sm: 0 }}
            flexWrap="wrap"
          >
            <Button
              bg="#FBCABF"
              px="6"
              color="black"
              _hover={{
                bg: "#F8BBAE",
              }}
            >
              Get Started
            </Button>
            <Button>Learn More</Button>
          </HStack>
        </Stack>
        <Box ml={{ base: 0, md: 5 }} pos="relative">
          <DottedBox />
          <Image
            w="100%"
            h="100%"
            minW={{ base: "auto", md: "30rem" }}
            objectFit="cover"
            alt="Hero image"
            src={`https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&q=80&
            fm=jpg&crop=entropy&cs=tinysrgb&auto=format&fit=crop&w=334&q=80`}
            style={{ borderRadius: "2rem" }}
            rounded="md"
            fallback={<Skeleton />}
          />
        </Box>
      </Stack>
    </Container>
  );
};

function DottedBox() {
  return (
    <Box
      position="absolute"
      left="-45px"
      top="-30px"
      height="full"
      maxW="700px"
      zIndex={-1}
    >
      <svg
        color={useColorModeValue("rgba(55,65,81, 0.1)", "rgba(55,65,81, 0.7)")}
        width="350"
        height="420"
        fill="none"
      >
        <defs>
          <pattern
            id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect x="0" y="0" width="4" height="4" fill="currentColor"></rect>
          </pattern>
        </defs>
        <rect
          width="404"
          height="404"
          fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
        ></rect>
      </svg>
    </Box>
  );
}

export default HeroSection;
