import React from "react";
import { Box, keyframes } from "@chakra-ui/react";

const slide = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const Marquee = ({ text }) => {
  return (
    <Box as="div" w="100%" overflow="hidden" bg="gray.200" position="relative">
      <Box
        as="div"
        whiteSpace="nowrap"
        display="inline-block"
        py={2}
        px={4}
        fontSize="lg"
        animation={`${slide} 10s linear infinite`}
        color="blue.500"
      >
        {text}
      </Box>
    </Box>
  );
};

export default Marquee;
