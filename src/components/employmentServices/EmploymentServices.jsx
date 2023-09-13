"use client";

import { useContext } from "react";

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
  Center,
} from "@chakra-ui/react";

import {
  FcAssistant,
  FcCollaboration,
  FcDonate,
  FcManager,
  FcBusinesswoman,
  FcApprove,
} from "react-icons/fc";

import { FaWheelchair } from "react-icons/fa";
import { GiStarMedal } from "react-icons/gi";
import { Link } from "react-router-dom";
import {
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Card = ({ heading, icon, route, onClick }) => {
  return (
    <Link
      to={route}
      style={{ width: "200px" }}
      onClick={heading === "Jobs" ? onClick : undefined}
    >
      <Box
        maxW={{ base: "full", md: "200px" }}
        w={"full"}
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        boxShadow="xl"
        rounded="md"
        bg="white"
        p={8}
        _hover={{ bg: useColorModeValue("gray.100", "gray.700") }}
      >
        <Stack align={"start"} spacing={2}>
          <Flex
            w={16}
            h={16}
            align={"center"}
            justify={"center"}
            color={"white"}
            rounded={"full"}
            bg={useColorModeValue("gray.100", "gray.700")}
            transition="transform 0.4s"
            _hover={{ transform: "rotate(360deg)" }}
          >
            {icon}
          </Flex>
          <Box mt={2}>
            <Text fontSize={"16px"} fontWeight={"bold"} size="md">
              {heading}
            </Text>
          </Box>
        </Stack>
      </Box>
    </Link>
  );
};

export default function EmploymentServices() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const { setSector } = useContext(AuthContext);

  const cardData = [
    {
      heading: "Jobs",
      icon: <Icon as={FcAssistant} w={10} h={10} />,
      route: "/jobs",
    },
    {
      heading: "Skill Training",
      icon: <Icon as={FcCollaboration} w={10} h={10} />,
      route: "/skillTraining",
    },
    {
      heading: "Self Employment",
      icon: <Icon as={FcDonate} w={10} h={10} />,
      route: "/selfEmployment",
    },
    {
      heading: "Local Services",
      icon: <Icon as={FcManager} w={10} h={10} />,
      route: "/localServices",
    },
    {
      heading: "Jobs For Women",
      icon: <Icon as={FcBusinesswoman} w={10} h={10} />,
      route: "/jobsForWomen",
    },
    {
      heading: "Jobs For P.W.D",
      icon: <Icon as={FaWheelchair} w={10} h={10} />,
      route: "/jobsForPwd",
    },
    {
      heading: "Armed Forces",
      icon: <Icon as={GiStarMedal} w={10} h={10} />,
      route: "/armedForces",
    },
    {
      heading: "Counselling",
      icon: <Icon as={FcApprove} w={10} h={10} />,
      route: "/councelling",
    },
  ];

  const handleModal = () => {
    onOpen();
  };

  return (
    <>
      <Stack mt={20} spacing={4} as={Container} maxW={"3xl"} textAlign={"left"}>
        <Heading fontSize={{ base: "xl", sm: "3xl" }} fontWeight={"bold"}>
          Employment Services
        </Heading>
        <Text color={"gray.600"} fontSize={{ base: "sm", sm: "lg" }}>
          Explore all the employment services offered.
        </Text>
      </Stack>
      <Modal onClose={onClose} size={"xl"} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Flex
              direction="row"
              justifyContent="space-between"
              mt={4}
              pb={6}
              pt={6}
            >
              <Box
                width="45%"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                boxShadow="xl"
                p={4}
                bg="white"
              >
                <Text fontWeight="bold" mb={2}>
                  View All Government Jobs
                </Text>
                <Button
                  onClick={() => {
                    setSector("Government");
                    navigate("/jobs");
                  }}
                  mt={2}
                  variant="solid"
                  bg="blue.400"
                  color="white"
                >
                  View
                </Button>
              </Box>

              <Box
                width="45%"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                boxShadow="xl"
                p={4}
                bg="white"
              >
                <Text fontWeight="bold" mb={2}>
                  View All Private Jobs
                </Text>
                <Button
                  onClick={() => {
                    setSector("Private");
                    navigate("/privatejobs");
                  }}
                  mt={2}
                  variant="solid"
                  bg="blue.400"
                  color="white"
                >
                  View
                </Button>
              </Box>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>

      <Box>
        <Box
          p={5}
          pt={0}
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "flex-start",
            flex: 3,
          }}
        >
          <Box
            sx={{
              mt: 10,
            }}
          >
            <Container
              maxW={"5xl"}
              p={4}
              sx={{
                borderRadius: "15px",
              }}
            >
              <Flex flexWrap="wrap" gridGap={3} justify="center">
                {cardData.map((data, index) => (
                  <Card
                    key={index}
                    heading={data.heading}
                    icon={data.icon}
                    border="2px"
                    borderColor="gray.300"
                    route={data.heading === "Jobs" ? "" : data.route}
                    onClick={data.heading === "Jobs" ? handleModal : undefined}
                  />
                ))}
              </Flex>
              <Center mt={6}>
                <Link to="">
                  <Text color="blue.500">
                    View more employment services &rarr;
                  </Text>
                </Link>
              </Center>
            </Container>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box
              p={6}
              mt={10}
              boxShadow="lg"
              rounded="md"
              bg="white"
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                flex: 1,
              }}
            >
              <Box
                boxShadow="md"
                p={2}
                width={"100%"}
                rounded="md"
                bg=" #f27437"
                mb={4}
              >
                <Heading
                  fontSize={{ base: "xl", sm: "xl" }}
                  fontWeight={"bold"}
                  color="white"
                  textAlign={"center"}
                >
                  Notifications
                </Heading>
              </Box>
              <Box>
                <Text>Lorem ipsum dolor sit amet.</Text>
                <Text>Lorem ipsum dolor sit amet.</Text>
                <Text>Lorem ipsum dolor sit amet.</Text>
                <Text>Lorem ipsum dolor sit amet.</Text>
                <Text>Lorem ipsum dolor sit amet.</Text>
                <Text>Lorem ipsum dolor sit amet.</Text>
                <Text>Lorem ipsum dolor sit amet.</Text>
              </Box>
            </Box>
            <Box
              p={6}
              mt={10}
              boxShadow="lg"
              rounded="md"
              bg="white"
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                flex: 1,
              }}
            >
              <Box
                boxShadow="md"
                p={2}
                width={"100%"}
                rounded="md"
                bg=" #f27437"
                color="white"
                mb={4}
              >
                <Heading
                  fontSize={{ base: "xl", sm: "xl" }}
                  fontWeight={"bold"}
                  color={"white"}
                  textAlign={"center"}
                >
                  Downloads
                </Heading>
              </Box>
              <Box>
                <Text>Lorem ipsum dolor sit amet.</Text>
                <Text>Lorem ipsum dolor sit amet.</Text>
                <Text>Lorem ipsum dolor sit amet.</Text>
                <Text>Lorem ipsum dolor sit amet.</Text>
                <Text>Lorem ipsum dolor sit amet.</Text>
                <Text>Lorem ipsum dolor sit amet.</Text>
                <Text>Lorem ipsum dolor sit amet.</Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
