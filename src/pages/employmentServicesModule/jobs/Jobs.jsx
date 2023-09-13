import React, { useEffect, useState, useContext } from "react";
import Navbar from "../../../components/navbar/Navbar";
import {
  Box,
  Text,
  Flex,
  Button,
  Link,
  Container,
  SimpleGrid,
} from "@chakra-ui/react";
import axios from "axios";
import { AuthContext } from "../../../context/AuthContext";

const Jobs = () => {
  const [jobsData, setJobsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 5; // Number of jobs per page
  const { sector } = useContext(AuthContext);
  const api="https://pgrkamadmin.pgrkam.com/m_api/v1/index.php/govt-job/index"
             

  useEffect(() => {
    axios
      .get(api)
      .then((response) => {
        console.log(response.data);
        setJobsData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // Calculate the index of the first and last job on the current page
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobsData.slice(indexOfFirstJob, indexOfLastJob);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Navbar />
      <Text
        fontWeight="bold"
        fontSize="3xl"
        textShadow="2px 2px 4px rgba(0, 0, 0, 0.2)"
        textAlign="center"
      >
        Government Jobs
      </Text>
      <Box  border="1px solid orange" p="20px" w="70%" margin="20px auto" position="relative" borderRadius="lg">
        <SimpleGrid columns={1} spacing={4}>
          {currentJobs.map((job, index) => (
            <Box
              key={index}
              borderWidth="2px"
              borderRadius="lg"
              borderColor="orange"
              p={6}
              w="100%"
            >
              <Text fontWeight="bold">Name Of Post: {job.job_title}</Text>

              <Text fontWeight="bold" mt={2}>Name Of Employer:{job.company_name}</Text>

              <Text mt={2}>
                <Text as="span" fontWeight="bold">Place Of Posting</Text>:{job.location}</Text>

              <Text mt={2}>
                Required Qualification: {job.display_qualification}</Text>
              <Flex justify="space-between" alignItems="center">
              <Text  flex="1" mt={2}>
              <Text as="span" fontWeight="bold">Vacancies</Text>: {job.vacancy}</Text>

              <Text  flex="1" mt={2}>
              <Text as="span" fontWeight="bold">Last Date To Apply</Text>: {job.last_date}</Text>

              <Text  flex="1" mt={2}>
              <Text as="span" fontWeight="bold">Exp. (in years)</Text>:{job.experience}</Text>

              <Text flex="1" mt={2}>
              <Text as="span" fontWeight="bold">Gender</Text>:{job.gender_preference}</Text>
              </Flex>
              
              <Flex justify="space-between" alignItems="center">
              <Text flex="1" mt={2}>
              <Text as="span" fontWeight="bold">Minimum Age(in years):
              </Text>{job.min_age}</Text>

              <Text flex="1" mt={2}>
              <Text as="span" fontWeight="bold">Maximum Age(in years):
              </Text>
              {job.max_age}</Text>

              <Text flex="1" mt={2}>
              <Text as="span" fontWeight="bold"> Apply Here:</Text>
              <Link href={job.apply_link} isExternal>
                Click Here
              </Link></Text>
              
              <Text flex="1" mt={2}>
              <Text as="span" fontWeight="bold">
                Read Notification:</Text>
              <Link href={job.pdf_link} isExternal>
                Click Here
              </Link>
              </Text>
              </Flex>
              <Flex justifyContent="space-between" justify="flex-start">
              <Text mt={2}>
              <Text as="span" fontWeight="bold">
                Where To Apply:
              </Text> {job.apply_mode}</Text>
              <Text></Text>
              </Flex>
            </Box>
            
          ))}
        </SimpleGrid>
        </Box>
        {/* Pagination */}
        <Flex mt={4} justify="center">
          {Array.from({ length: Math.ceil(jobsData.length / jobsPerPage) }).map(
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
  );
};

export default Jobs;
