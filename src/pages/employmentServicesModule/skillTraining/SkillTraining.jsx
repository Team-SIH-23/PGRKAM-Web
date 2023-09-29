import React, { useEffect } from "react";
import Navbar from '../../../components/navbar/Navbar';
import { Box, Image, Heading, Text } from "@chakra-ui/react";
const AboutUs = () => {
  return (
    <Box className="box" p={4} display="flex">
      <Box flex="1">
        <Image
          src="https://www.pgrkam.com/images/skill_course.jpg"
          alt="Skill Course"
          className="image"
          width="300px"  // Set the desired width here
          height="300px"
        />
      </Box>
      <Box flex="2">
        <Heading as="h2">About Us</Heading>
        <Text className="description">
          The Government has set up Punjab Skill Development Mission (PSDM) to
          bring necessary synergy, scale, oversight and effective coordination
          in implementation of various skill development schemes across the
          department. Mission will provide a single point within the Government
          to formulate and steer various skill development schemes in the state
          of Punjab. The Mission has been set up as a Society and registered
          under the Societies Registration Act, 1860. The Governing Council is
          headed by Chief Minister and comprises of other Minister and
          Administrative Secretaries of different departments. The State
          Steering Committee is headed by the Chief Secretary and comprises of
          Administrative Secretaries from various Departments. The State
          Executive Committee is headed by the Member Secretary, PSDM, and
          comprises of representatives from different Departments. The District
          Executive Committee is headed by the Deputy Commissioner of the
          District.
        </Text>
      </Box>
    </Box>
  );
};

const Introduction = () => {
  return (
    <Box className="box" p={4} display="flex">
      <Box flex="1">
        <Image
          src="https://www.pgrkam.com/images/org_structure.jpg"
          alt="Skill Course"
          className="image"
          width="300px"  // Set the desired width here
          height="300px"
        />
      </Box>
      <Box flex="2">
        <Heading as="h2">Introduction</Heading>
        <Text className="description">
          Punjab Skill Development Mission provides free employment linked skill
          development trainings to the Youth in the age group of 18-35 years
          across the state under the various state and centrally sponsored
          schemes. These nationally certified trainings are provided through
          empanelled training partners at centres in urban and rural areas
          across the state in over 40+ different sectors like Healthcare, Media
          & Entertainment, Green Jobs, Domestic Workers, Retail, Beauty,
          Construction, Electronics and Hardware, Food Processing, Health Care,
          IT ITES, Leather, Logistics etc. PSDM closely networks with a host of
          other key institutions and stakeholders in the skill development
          space, thus creating a knowledge network for skill development. PSDM
          leverages this network to provide candidates of Punjab with placement
          support or career related information.
        </Text>
      </Box>
    </Box>
  );
};

const Objectives = () => {
  return (
    <Box className="box" p={4}>
      <Box>
        <Heading as="h2">Objectives:</Heading>
        <Text className="description">
          The primary objective of Punjab Skill Development Mission is to enable
          a large number of youth to take up industry-relevant skill training
          that will improve their theoretical as well as practical knowledge and
          help them in securing a better livelihood by bringing necessary
          synergy, oversight and effective coordination. Punjab Skill
          Development Mission is bridging the gap between the skilled people
          required in Industry and the unemployed youth by ensuring that the
          right candidate with passion for a particular job chooses the right
          course according to his/her academic background, aptitude and skill-set.
        </Text>
      </Box>
    </Box>
  );
};
posthog.init("phc_hWR3oOZKslKrvx4p2uYgJTcqLDM4AaDd1TTnfA0djxh", {
  api_host: "https://610a-103-215-237-106.ngrok-free.app",
});
const SkillTraining = () => {

  useEffect(() => {
    posthog?.capture("Clicked Skill Training");
  }, [])
  return (
    <>
      <Navbar />
      <AboutUs />
      <Introduction />
      <Objectives />
    </>
  );
};

export default SkillTraining;
