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

  useEffect(() => {
    axios
      .get("https://pgrkamadmin.pgrkam.com/m_api/v1/index.php/govt-job/index")
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
        {sector} JOBS
      </Text>
      <Container maxW="xl" centerContent>
        <SimpleGrid columns={1} spacing={4}>
          {currentJobs.map((job, index) => (
            <Box
              key={index}
              borderWidth="2px"
              borderRadius="lg"
              borderColor="orange"
              p={6}
            >
              <Text fontWeight="bold">Name Of Post:</Text>
              <Text>{job.job_title}</Text>

              <Text fontWeight="bold" mt={2}>
                Name Of Employer:
              </Text>
              <Text>{job.company_name}</Text>

              <Text fontWeight="bold" mt={2}>
                Place Of Posting:
              </Text>
              <Text>{job.location}</Text>

              <Text fontWeight="bold" mt={2}>
                Required Qualification:
              </Text>
              <Text>{job.display_qualification}</Text>

              <Text fontWeight="bold" mt={2}>
                Vacancies:
              </Text>
              <Text>{job.vacancy}</Text>

              <Text fontWeight="bold" mt={2}>
                Last Date To Apply:
              </Text>
              <Text>{job.last_date}</Text>

              <Text fontWeight="bold" mt={2}>
                Exp. (in years):
              </Text>
              <Text>{job.experience}</Text>

              <Text fontWeight="bold" mt={2}>
                Gender:
              </Text>
              <Text>{job.gender_preference}</Text>

              <Text fontWeight="bold" mt={2}>
                Minimum Age(in years):
              </Text>
              <Text>{job.min_age}</Text>

              <Text fontWeight="bold" mt={2}>
                Maximum Age(in years):
              </Text>
              <Text>{job.max_age}</Text>

              <Text fontWeight="bold" mt={2}>
                Apply Here:
              </Text>
              <Link href={job.apply_link} isExternal>
                Click Here
              </Link>

              <Text fontWeight="bold" mt={2}>
                Read Notification:
              </Text>
              <Link href={job.pdf_link} isExternal>
                Click Here
              </Link>

              <Text fontWeight="bold" mt={2}>
                Where To Apply:
              </Text>
              <Text>{job.apply_mode}</Text>
            </Box>
          ))}
        </SimpleGrid>

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
      </Container>
    </>
  );
};

export default Jobs;
