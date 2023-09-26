import React , {useState , useEffect ,useContext}from "react";
import Navbar from "../../../components/navbar/Navbar";
import { Box , Text, Flex ,Button, Link} from "@chakra-ui/react";
import axios from "axios";
import { AuthContext } from "../../../context/AuthContext";
import posthog from "posthog-js";

const Privatejobs = () => {
  const [jobsData, setJobsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 25; // Number of jobs per page
  const { sector } = useContext(AuthContext);
  const api="https://pgrkamadmin.pgrkam.com/m_api/v1/index.php/post-jobs/index"

posthog.init("phc_hWR3oOZKslKrvx4p2uYgJTcqLDM4AaDd1TTnfA0djxh", {
  api_host: "https://610a-103-215-237-106.ngrok-free.app",
});

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
      posthog?.capture("Clicked Private Jobs");
  }, []);
  
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobsData.slice(indexOfFirstJob, indexOfLastJob);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
  return (
    <>
    <Navbar/>
    <Box  border="1px solid orange" borderTop="40px solid orange" p="20px" w="50%" margin="20px auto" position="relative">
    <Text mt={-51} p={0} fontWeight="bold" fontSize={20} position="absolute">Results</Text>
    { currentJobs.map((job,index)=>(
    <Box border="none" borderBottom="30px solid orange" boxShadow="0 0 10px rgba(0,0,0,0.5)" p="20px" mb="10px" >
    <Flex justify="space-between" align="center">
        <div>
          <Text fontWeight="bold" fontSize={20} mb="5px">Name of Post : {job.org_name}</Text>
          <Text mb="5px"><b>Place of Posting</b>: All over Punjab</Text>
          <Text mb="5px"><b>Required Qualification</b>: {job.education_level}</Text>
          <Text mb="15px"><b>Salary</b>: {job.salary_min}-{job.salary_max} </Text>
        </div>
        <div>
        <Button colorScheme="orange">Apply</Button>
        <Text color="orange"><Link>View details</Link></Text>
        </div>
      </Flex>
      <Flex justify="space-between">
        <Text>Vacancies:{job.vacancies}</Text>
        <Text>Maximum Age:{job.age_preference}</Text>
        <Text>Experience:{job.min_exp}</Text>
        <Text>Gender:{job.gender_preference}</Text>
      </Flex>
    </Box>
   ))}
    </Box>
    <Flex w="50%" align-items="center" justify="center" m="auto" mb="100px">
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
  )
}

export default Privatejobs
