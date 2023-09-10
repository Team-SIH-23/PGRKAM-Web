"use client";

import { useCustomToast } from "@/hooks/useCustomToast";

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const showToast = useCustomToast();
  const [firstName, setFirstName] = useState({ value: "", isValid: true });
  const [lastName, setLastName] = useState({ value: "", isValid: true });
  const [email, setEmail] = useState({ value: "", isValid: true });
  const [password, setPassword] = useState({ value: "", isValid: true });

  const [isLoading, setIsLoading] = useState(false);

  const setInput = (setter) => (e) => {
    setter({ value: e.target.value, isValid: true });
  };

  const handleSignUp = async () => {
    if (!firstName.value) {
      setFirstName({ value: "", isValid: false });
      return;
    }

    if (!lastName.value) {
      setLastName({ value: "", isValid: false });
      return;
    }

    if (!email.value) {
      setEmail({ value: "", isValid: false });
      return;
    }

    if (!password.value) {
      setPassword({ value: "", isValid: false });
      return;
    }

    setIsLoading(true);

    try {
      navigate("/accountVerification");
    } catch (error) {
      console.error(error);
      const errorMessage =
        error instanceof Error ? error.message : "An unknown error occurred";
      showToast({
        title: "Error",
        description: errorMessage,
        status: "error",
      });
    }

    setIsLoading(false);
  };

  return (
    <>
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"} textAlign={"center"}>
              Create a new account
            </Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              to enjoy all of our cool{" "}
              <Text color={"purple.400"} as="span">
                features ✌️
              </Text>
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input
                      type="text"
                      value={firstName.value}
                      onChange={setInput(setFirstName)}
                      isInvalid={!firstName.isValid}
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>Last Name</FormLabel>
                    <Input
                      type="text"
                      value={lastName.value}
                      onChange={setInput(setLastName)}
                      isInvalid={!lastName.isValid}
                    />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  value={email.value}
                  onChange={setInput(setEmail)}
                  isInvalid={!email.isValid}
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    value={password.value}
                    onChange={setInput(setPassword)}
                    isInvalid={!password.isValid}
                  />
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  type="submit"
                  isLoading={isLoading}
                  loadingText="Submitting"
                  size="lg"
                  bg={"purple.400"}
                  color={"white"}
                  _hover={{
                    bg: "purple.500",
                  }}
                  onClick={() => {
                    handleSignUp();
                  }}
                >
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={"center"}>
                  Already a user?{" "}
                  <Link
                    color={"purple.400"}
                    onClick={() => navigate("/signin")}
                  >
                    Signin
                  </Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </>
  );
};

export default Signup;
