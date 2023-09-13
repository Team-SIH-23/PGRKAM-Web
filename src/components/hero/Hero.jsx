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
  const [selectedJob, setSelectedJob] = useState('');
  const [selectedQualification,setSelectedQualification]=useState('');
  const [selectedExperience,setSelectedExperience]=useState('');
  const [selectedPlace, setSelectedPlace] = useState('');
  const [selectedJobTitle,setSelectedJobTitle]=useState('');
  const handleOptionChange = (option) => {
    setSelectedOptions((prevState) => ({
      ...prevState,
      [option]: !prevState[option],
    }));
  };

  const handleClick = () => {
    if(selectedJobTitle)
    window.location.href='/jobs'
    else window.alert('Specify Details first')
  };
 
  const handleSelectChange = (e) => {
    setSelectedJob(e.target.value);
  }
  const handleQualificationChange = (e) => {
    setSelectedQualification(e.target.value);
  };

  const handleExperienceChange = (e) => {
    setSelectedExperience(e.target.value);
  };
  const punjabCities = ["Amritsar","Ludhiana","Jalandhar","Patiala","Bathinda","Pathankot","Mohali","Hoshiarpur","Firozpur"];

  const handlePlaceChange = (e) => {
    setSelectedPlace(e.target.value);
  };
  const handleJobTitleChange=(e)=>{
    setSelectedJobTitle(e.target.value);
  }
  return (
    <>
      <Navbar />
      <Box>
        <Marquee
          color="blue.400"
          text="Vacancies advertized by Punjab Public Service Commission are available at https://ppsc.gov.in/"
        />
      </Box>
      <Box
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth="90%"
        p={6}
        m="4px auto"
        as="form"
        backgroundImage="top-bg2.jpg"
      >
        <Heading
          w="100%"
          textAlign={"left"}
          fontWeight="normal"
          mb="3%"
          fontSize="26px"
          color="white"
        >
          Fill out the form below to search Jobs
        </Heading>
        <FormControl as={GridItem} colSpan={[3, 3]} mb={4}>
          <Flex direction={"row"} gap={4} alignItems="center">
            <Box flex="1">
            <Select
        id="jobType"
        name="jobType"
        autoComplete="jobType"
        placeholder="Select job type"
        focusBorderColor="brand.400"
        sx={{
          "&:focus": {
            backgroundColor: "white",
          }
        }}
        variant="filled"
        shadow="sm"
        size="md"
        w="full"
        rounded="md"
        value={selectedJob}
        onChange={handleSelectChange}
      >
      <option value="private">Private</option>
      <option value="government">Government</option>
    </Select>
            </Box>
            <Box flex="1">
            <Select
      id="qualification"
      name="qualification"
      autoComplete="qualification"
      placeholder="Select qualification"
      focusBorderColor="brand.400"
      sx={{
        "&:focus": {
          backgroundColor: "white",
        }
      }}
      variant="filled"
      shadow="sm"
      size="md"
      w="full"
      rounded="md"
      value={selectedQualification}
      onChange={handleQualificationChange}
    >
      <option value="No Schooling">No Schooling</option>
      <option value="10th">10th</option>
      <option value="12th">12th</option>
      <option value="Graduate">Graduate</option>
      <option value="Diploma">Diploma</option>
      <option value="PostGraduate">Post Graduate</option>
      <option value="PhD">PhD</option>
      <option value="MPhil">MPhil</option>
    </Select>
            </Box>
            <Box flex="1">
            <Select
        id="experience"
        name="experience"
        autoComplete="experience"
        placeholder="Select experience"
        focusBorderColor="brand.400"
        sx={{
          "&:focus": {
            backgroundColor: "white",
          }
        }}
        variant="filled"
        shadow="sm"
        size="md"
        w="full"
        rounded="md"
        value={selectedExperience}
        onChange={handleExperienceChange}
      >
        <option value="Fresher">Fresher</option>
        <option value="1 year">1 year</option>
        <option value="2 years">2 years</option>
        <option value="3 years">3 years</option>
        <option value="4 years">4 years</option>
        <option value="More than 4">More than 4</option>
      </Select>
            </Box>
            <Box flex="1" width="100%">
            <Select
      id="place"
      name="place"
      autoComplete="place"
      placeholder="Select a city in Punjab"
      focusBorderColor="brand.400"
      sx={{
        "&:focus": {
          backgroundColor: "white",
        }
      }}
      variant="filled"
      shadow="sm"
      size="md"
      w="full"
      rounded="md"
      value={selectedPlace}
      onChange={handlePlaceChange}
    >
      {punjabCities.map((city, index) => (
        <option key={index} value={city}>
          {city}
        </option>
      ))}
    </Select>
            </Box>
          </Flex>
        </FormControl>
        <Stack textAlign={"center"} m={4}>
          <Text fontSize="lg" color="white">---- OR ----</Text>
        </Stack>
        <Box flex="1" width="100%">
        <Select
        id="jobtitle"
        name="jobtitle"
        autoComplete="jobtitle"
        placeholder="Enter Job Title or Organization name"
        focusBorderColor="brand.400"
        sx={{
          "&:focus": {
            backgroundColor: "white",
          }
        }}
        variant="filled"
        shadow="sm"
        size="md"
        w="full"
        rounded="md"
        value={selectedJobTitle}
        onChange={handleJobTitleChange}
      >
        <option value="sde">Software Developer</option>
        <option value="back office">Back Office</option>
        <option value="php developer">PHP Developer</option>
        <option value="sales executive">Sales Executive</option>
        <option value="operator">Computer Operator</option>
        <option value="assistant manager">Assistant Manager</option>
      </Select>
        </Box>
        <Box width="100%" textAlign="center">
          <Button
            mt={5}
            onClick={handleClick}
            isLoading={isLoading}
            loadingText="Searching Jobs"
            bg=" #f27437"
            color="white"
            variant="solid"
            _hover={{ bg: 'blue.500' }}
          >
            Search Jobs
          </Button>
        </Box>
        <SimpleGrid
          spacing={2}
          templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
          mt={5}
          justifyItems="space-evenly"
          alignItems="center"
          gridGap="1rem"
          pl={180}
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
