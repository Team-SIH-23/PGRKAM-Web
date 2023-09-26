import React, { useEffect } from "react";
import Navbar from "../../../components/navbar/Navbar";
import { Box, Center, Flex, Text} from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import posthog from "posthog-js";

const SkillTraining = () => {
  
  posthog.init("phc_hWR3oOZKslKrvx4p2uYgJTcqLDM4AaDd1TTnfA0djxh", {
    api_host: "https://610a-103-215-237-106.ngrok-free.app",
  });

  useEffect(()=>{
    posthog?.capture("Clicked Skill Training")
    console.log("Hello");
  },[])
  return (
    <>
    <Navbar/>
    <Box mt="10px">
    <Flex alignItems="center" justify="center" m={2}>
      <Button mr={2} bg="#f27437" color="white" _hover={{ bg: "orange.500", color: "white" }}>Courses about to start</Button>
      <Button mr={2} bg="#f27437" color="white" _hover={{ bg: "orange.500", color: "white" }}>Contact HQ and District Offices</Button>
    </Flex>
    <Box>
      <Center>
    <Flex flex="0.75" align="center" justify="space-between" w="600px">
    <Image src="skill_course.jpg" w="300px" h="200px"></Image>
    <Box  display="flex" justifyContent="center" flexDirection={"column"}>
      <Text fontWeight={"bold"} fontSize={"20px"} mt="10px" mb="10px">About us</Text>
      <Text>The Government has set up Punjab Skill Development Mission (PSDM) to bring necessary synergy, scale, oversight and effective coordination in implementation of various skill development schemes across the department. Mission will provide a single point within the Government to formulate and steer various skill development schemes in the state of Punjab. The Mission has been set up as a Society and registered under the Societies Registration Act, 1860. The Governing Council is headed by Chief Minister and comprises of other Minister and Administrative Secretaries of different departments. The State Steering Committee is headed by the Chief Secretary and comprises of Administrative Secretaries from various Departments. The State Executive Committee is headed by the Member Secretary, PSDM, and comprises of representatives from different Departments. The District Executive Committee is headed by the Deputy Commissioner of the District.</Text>
    </Box>
    </Flex>
    </Center>
    </Box>
    </Box>
    <Center>
    <Button mt={"50px"} backgroundColor="#f27437" color="white" _hover={{ bg: "orange.500", color: "white" }}>Register for Skill Training</Button>
    </Center>
    </>
  )
};

export default SkillTraining;
