"use client";

import { useState } from "react";
import Marquee from "@/components/marquee/Marquee";
import {
  Box,
  Heading,
  Flex,
  FormControl,
  GridItem,
  Select,
  SimpleGrid,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuOptionGroup,
  MenuItemOption,
  Button,
  Stack,
  Card,
  CardHeader,
  Center,
} from "@chakra-ui/react";

import Navbar from "../../components/navbar/Navbar";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);

  const [selectedOptions, setSelectedOptions] = useState({
    option1: false,
    option2: false,
    option3: false,
  });

  const handleOptionChange = (option) => {
    setSelectedOptions((prevState) => ({
      ...prevState,
      [option]: !prevState[option],
    }));
  };

  const handleClick = () => {
    setIsLoading(true);

    // Simulate a network request with a timeout
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2000ms (2 seconds) delay
  };

  return (
    <>
      <Navbar />
      <Box>
        <Marquee
          color="blue.400"
          text="This is moving text created with React and Chakra UI"
        />
      </Box>
      <Box
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth="70%"
        p={6}
        m="10px auto"
        as="form"
      >
        <Heading
          w="100%"
          textAlign={"left"}
          fontWeight="normal"
          mb="3%"
          fontSize="26px"
        >
          Fill out the form below to search Jobs
        </Heading>
        <FormControl as={GridItem} colSpan={[3, 3]} mb={4}>
          <Flex direction={"row"} gap={4} alignItems="center">
            <Box flex="1">
              <Select
                id="country1"
                name="country1"
                autoComplete="country1"
                placeholder="Select job type"
                focusBorderColor="brand.400"
                variant="filled"
                shadow="sm"
                size="md"
                w="full"
                rounded="md"
              >
                <option>United States</option>
                <option>Canada</option>
                <option>Mexico</option>
              </Select>
            </Box>
            <Box flex="1">
              <Select
                id="country2"
                name="country2"
                autoComplete="country2"
                placeholder="Select qualification"
                focusBorderColor="brand.400"
                variant="filled"
                shadow="sm"
                size="md"
                w="full"
                rounded="md"
              >
                <option>United States</option>
                <option>Canada</option>
                <option>Mexico</option>
              </Select>
            </Box>
            <Box flex="1">
              <Select
                id="country3"
                name="country3"
                autoComplete="country3"
                placeholder="Experience (in years)"
                focusBorderColor="brand.400"
                variant="filled"
                shadow="sm"
                size="md"
                w="full"
                rounded="md"
              >
                <option>United States</option>
                <option>Canada</option>
                <option>Mexico</option>
              </Select>
            </Box>
            <Box flex="1" width="100%">
              <Menu closeOnSelect={false}>
                <MenuButton
                  as={Button}
                  colorScheme="blue"
                  variant="outline"
                  width="100%"
                >
                  Select place of posting
                </MenuButton>
                <MenuList width="100%">
                  <MenuOptionGroup title="Place" type="checkbox">
                    <MenuItemOption value="sde">Bangalore</MenuItemOption>
                    <MenuItemOption value="sre">Mysuru</MenuItemOption>
                    <MenuItemOption value="sdet">Hyderabad</MenuItemOption>
                  </MenuOptionGroup>
                </MenuList>
              </Menu>
            </Box>
          </Flex>
        </FormControl>
        <Stack textAlign={"center"} m={4}>
          <Text fontSize="lg">----OR----</Text>
        </Stack>
        <Box flex="1" width="100%">
          <Menu closeOnSelect={false}>
            <MenuButton
              as={Button}
              colorScheme="blue"
              variant="outline"
              width="100%"
            >
              Select Job title/Organisation Name
            </MenuButton>
            <MenuList width="100%">
              <MenuOptionGroup title="Job Title" type="checkbox">
                <MenuItemOption value="sde">SDE</MenuItemOption>
                <MenuItemOption value="sre">SRE</MenuItemOption>
                <MenuItemOption value="sdet">SDET</MenuItemOption>
              </MenuOptionGroup>
              <MenuOptionGroup title="Organisation" type="checkbox">
                <MenuItemOption value="google">Google</MenuItemOption>
                <MenuItemOption value="apple">Apple</MenuItemOption>
                <MenuItemOption value="microsoft">Microsoft</MenuItemOption>
              </MenuOptionGroup>
            </MenuList>
          </Menu>
        </Box>
        <Box width="100%" textAlign="center">
          <Button
            mt={5}
            onClick={handleClick}
            isLoading={isLoading}
            loadingText="Searching Jobs"
            colorScheme="blue"
            variant="solid"
          >
            Search Jobs
          </Button>
        </Box>
        <SimpleGrid
          spacing={2}
          templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
          mt={5}
          justifyItems="center"
          alignItems="center"
          gridGap="1rem"
        >
          {cardData.map((data, index) => (
            <Card key={index} border="2px" borderColor="gray.300">
              <Center>
                <CardHeader textAlign={"center"}>
                  <Heading size="md">{data.title}</Heading>
                  <Button mt={4} colorScheme={data.buttonColorScheme}>
                    {data.buttonText}
                  </Button>
                </CardHeader>
              </Center>
            </Card>
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
}

const cardData = [
  {
    title: "27719",
    buttonText: "Available Govt. Jobs",
    buttonColorScheme: "teal",
  },
  {
    title: "63864",
    buttonText: "Available Private Jobs",
    buttonColorScheme: "yellow",
  },
  {
    title: "1970290",
    buttonText: "Registered Job Seekers",
    buttonColorScheme: "green",
  },
  {
    title: "17023",
    buttonText: "Registered Employers",
    buttonColorScheme: "purple",
  },
];
