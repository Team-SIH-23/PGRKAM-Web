import React, { useEffect, useState } from "react";
import Navbar from "../../../components/navbar/Navbar";
import { Box, Center, Text, VStack ,Flex} from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { Avatar } from "@chakra-ui/avatar";
import { Link } from "react-router-dom";
import axios from "axios";
import posthog from "posthog-js";

posthog.init("phc_hWR3oOZKslKrvx4p2uYgJTcqLDM4AaDd1TTnfA0djxh", {
  api_host: "https://610a-103-215-237-106.ngrok-free.app",
});

const LocalServices = () => {
  const api="https://pgrkamadmin.pgrkam.com/m_api/v1/index.php/search-service/index";
  const [peopleData, setPeopleData] = useState([]);
  useEffect(()=>{
    axios
      .get(api)
      .then((response) => {
        setPeopleData(response.data.data);
        console.log(peopleData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
      posthog?.capture("Clicked Local Services")
  },[])
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 10;
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentpeopleData = peopleData.slice(indexOfFirstJob, indexOfLastJob);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
    <Navbar/>
    <Center>
      <VStack>
      <Text fontWeight="bold" fontSize="24px"> Local Services</Text>
      {currentpeopleData.map((job,index)=>(
      <Box p="auto" h="110px" w={"1000px"} border="2px" borderColor="gray">
      <Flex justify="space-between" alignItems={"center"}>
      <Box w="10%" ml="10px">
        <Avatar size="lg"/>
      </Box>
      <Box w="70%">
        <Text fontSize="18px" fontWeight="bold">{job.org_name}</Text>
        <Text fontSize="16px">Address : {job.district}</Text>
        <Text fontSize="16px">Service :{job.services_name}</Text>
        <Link><Text fontSize="14px" color="blue"> Feedback</Text></Link>
      </Box>
      <Box w="20%" >
        <Button backgroundColor="#f27437" color="white">Interested</Button>
      </Box>
    </Flex>
      </Box>
      ))}
      </VStack>
    </Center>
    <Flex mt={4} justify="center">
        {Array.from({ length: Math.ceil(peopleData.length / jobsPerPage) }).map(
          (_, index) => (
            <Button
              key={index}
              onClick={() => paginate(index + 1)}
              colorScheme={currentPage === index + 1 ? "orange" : "gray"}
              mr={2}
            >
              {index + 1}
            </Button>
          )
        )}
      </Flex>
    </>
  )
};

export default LocalServices;
