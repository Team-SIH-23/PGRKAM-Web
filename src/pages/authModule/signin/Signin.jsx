"use client";
import { Link as ReactRouterLink, useNavigate } from "react-router-dom";
import { AuthContext } from "@/context/AuthContext";
import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  Center,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import { useCustomToast } from "@/hooks/useCustomToast";

const Signin = () => {
  const navigate = useNavigate();
  const showToast = useCustomToast();
  const { setIsAuthenticated, setUserEmail } = useContext(AuthContext);
  const [email, setEmail] = useState({ value: "", isValid: true });
  const [password, setPassword] = useState({ value: "", isValid: true });

  const [isLoading, setIsLoading] = useState(false);

  const setInput = (setter) => (e) => {
    setter({ value: e.target.value, isValid: true });
  };
  const handleSignIn = async () => {
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
      setIsAuthenticated(true);
      setUserEmail(email.value);
      navigate("/");
      showToast({
        title: `Welcome ${email.value}`,
        description: "Signin successful",
        status: "success",
      });
    } catch (error) {
      console.log(error.code);
      const errorMessage =
        error instanceof Error ? error.message : "An unknown error occurred";

      if (error.code === "UserNotConfirmedException") {
        showToast({
          title: "Verification Required",
          description:
            "Your email is not verified. We're sending you another verification code. Please check your email.",
          status: "info",
        });

        // Resend the confirmation code
        await Auth.resendSignUp(email.value);

        // Store email in localStorage for use in account verification page
        if (typeof window !== "undefined") {
          localStorage.setItem("pending_verification_email", email.value);
        }

        // Navigate to confirmation page
        navigate("/accountVerification");
      } else {
        showToast({
          title: "Error",
          description: errorMessage,
          status: "error",
        });
      }
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
            <Heading fontSize={"4xl"}>Let's get you signed in</Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              to use all of our{" "}
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
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  value={email.value}
                  onChange={setInput(setEmail)}
                  isInvalid={!email.isValid}
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  value={password.value}
                  onChange={setInput(setPassword)}
                  isInvalid={!password.isValid}
                />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox>Remember me</Checkbox>
                  <Link
                    as={ReactRouterLink}
                    to="/forgotPassword"
                    color={"purple.400"}
                  >
                    Forgot password?
                  </Link>
                </Stack>
                <Stack>
                  <Button
                    isLoading={isLoading}
                    onClick={handleSignIn}
                    bg={"purple.400"}
                    color={"white"}
                    _hover={{
                      bg: "purple.500",
                    }}
                  >
                    Sign in
                  </Button>
                  <Button
                    w={"full"}
                    maxW={"md"}
                    variant={"outline"}
                    leftIcon={<FcGoogle />}
                  >
                    <Center>
                      <Text>Sign in with Google</Text>
                    </Center>
                  </Button>
                </Stack>
                <Link color={"purple.400"} onClick={() => navigate("/signup")}>
                  Create an account
                </Link>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </>
  );
};

export default Signin;
