"use client";

import Navbar from "@/components/navbar/Navbar";
import { Center, Heading } from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";
import { useContext, useState, useRef } from "react";

import {
  Button,
  FormControl,
  Flex,
  Stack,
  useColorModeValue,
  HStack,
} from "@chakra-ui/react";
import { PinInput, PinInputField } from "@chakra-ui/react";
import { AuthContext } from "@/context/AuthContext";
import { useCustomToast } from "@/hooks/useCustomToast";

export default function EmailVerification() {
  const showToast = useCustomToast();
  const { setIsAuthenticated } = useContext(AuthContext);
  const [confirmationCode, setConfirmationCode] = useState({
    value: "",
    isValid: true,
  });
  const [pinValue, setPinValue] = useState("");
  const pinInputRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [email, setEmail] = useState(
    localStorage.getItem("pending_verification_email")
  );

  const navigate = useNavigate();

  const handleConfirmUser = async () => {
    if (!confirmationCode) {
      setConfirmationCode({ value: "", isValid: false });
      return;
    }

    setIsLoading(true);

    if (typeof window === "undefined") {
      return;
    }

    const email = localStorage.getItem("pending_verification_email");

    if (!email) {
      return;
    }

    try {
      await Auth.confirmSignUp(email, confirmationCode.value);
      localStorage.removeItem("pending_verification_email");
      setIsAuthenticated(true);
      navigate("/");
    } catch (error) {
      console.error(error);
      setPinValue("");
      showToast({
        title: "Error",
        description: error.message,
        status: "error",
      });
      setConfirmationCode({ value: "", isValid: true });
    }

    setIsLoading(false);
  };

  return (
    <>
      <Navbar />
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack
          spacing={4}
          w={"full"}
          maxW={"sm"}
          bg={useColorModeValue("white", "gray.700")}
          rounded={"xl"}
          boxShadow={"lg"}
          p={6}
          my={10}
        >
          <Center>
            <Heading lineHeight={1.1} fontSize={{ base: "2xl", md: "3xl" }}>
              Verify your Email
            </Heading>
          </Center>
          <Center
            fontSize={{ base: "sm", sm: "md" }}
            color={useColorModeValue("gray.800", "gray.400")}
          >
            We have sent code to your email
          </Center>
          <Center
            fontSize={{ base: "sm", sm: "md" }}
            fontWeight="bold"
            color={useColorModeValue("gray.800", "gray.400")}
          >
            {email}
          </Center>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleConfirmUser();
            }}
          >
            <FormControl>
              <Center>
                <HStack>
                  <PinInput
                    value={pinValue}
                    onChange={(value) => {
                      setPinValue(value);
                      setConfirmationCode({ value: value, isValid: true });
                    }}
                  >
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                  </PinInput>
                </HStack>
              </Center>
            </FormControl>
            <Stack spacing={6}>
              <Button
                mt={4}
                type="submit"
                bg={"purple.400"}
                color={"white"}
                _hover={{
                  bg: "purple.500",
                }}
                isLoading={isLoading}
                // onClick={handleConfirmUser}
              >
                Verify
              </Button>
            </Stack>
          </form>
        </Stack>
      </Flex>
    </>
  );
}
