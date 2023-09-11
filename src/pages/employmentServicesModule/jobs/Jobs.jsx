import React from "react";
import Navbar from "../../../components/navbar/Navbar";
import { Box , Text, Flex ,Button, Link} from "@chakra-ui/react";
const Jobs = () => {
  
  return (
    <>
    <Navbar/>
    <Box  border="1px solid orange" borderTop="40px solid orange" p="20px" width="1000px" margin="20px auto" position="relative">
    <Text mt={-51} p={0} fontWeight="bold" fontSize={20} position="absolute">Results</Text>
    <Box border="none" borderBottom="30px solid orange" boxShadow="0 0 10px rgba(0,0,0,0.5)" p="20px" >
    <Flex justify="space-between" align="center">
        <div>
          <Text fontWeight="bold" fontSize={20} mb="5px">Name of Post : Manager and Assistant Manager</Text>
          <Text mb="5px"><b>Place of Posting</b>: All over Punjab</Text>
          <Text mb="5px"><b>Required Qualification</b>: 10th</Text>
          <Text mb="15px"><b>Salary</b>: 8500-25000 </Text>
        </div>
        <div>
        <Button colorScheme="orange">Apply</Button>
        <Text color="orange"><Link>View details</Link></Text>
        </div>
      </Flex>
      <Text>Private organization</Text>
    </Box>
    </Box>
    </>
  )
};

export default Jobs;
