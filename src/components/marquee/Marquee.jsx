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
    <Box as="div" w="100%" overflow="hidden" bg=" #bee9c7" position="relative">
      <Box
        as="div"
        whiteSpace="nowrap"
        display="inline-block"
        py={2}
        px={4}
        fontSize="ls"
        animation={`${slide} 10s linear infinite`}
        color="black"
      >
        {text}
      </Box>
    </Box>
  );
};

export default Marquee;
