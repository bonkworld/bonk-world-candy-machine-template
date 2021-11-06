import React from "react";
import { Button, Link, Heading, Center, VStack } from "@chakra-ui/react";

import { secondaryCTA } from "../utils/styles";

const WalletConnectionArea = ({
  title,
  subTitle,
  cta,
  backgroundImage,
  ...rest
}) => {
  return (
    <Center
      id="cta"
      p={[8, 8, 20, 20]}
      w="100%"
      minH="70vh"
      position="relative"
      overflowX="hidden"
      sx={{ backgroundImage: `url(${"/static/bonk-world.svg"})` }}
    >
      <VStack
        p={[8, 8, 20, 20]}
        w="100%"
        maxW="900px"
        borderRadius="1rem"
        borderColor="gray.200"
        borderWidth=".25rem"
        bg="#CA9CE1"
        color="white"
        textAlign="center"
        _hover={{ transform: "scale(1.005)" }}
        transition="transform 0.5s ease-out"
        spacing={8}
        position="relative"
        backgroundSize="20px 20px"
      >
        <VStack>
          <Heading
            as="h2"
            size="lg"
            fontWeight={800}
            maxW="500px"
            lineHeight="tall"
          >
            {title}
          </Heading>
          <Heading
            as="h3"
            fontSize={["sm", "sm", "lg", "lg"]}
            fontWeight={600}
            maxW="500px"
            lineHeight="1.7"
          >
            {subTitle}
          </Heading>
        </VStack>

        <VStack spacing={4}>
          <Link href={cta.href}>
            <Button {...secondaryCTA}>{cta.text}</Button>
          </Link>
        </VStack>
      </VStack>
    </Center>
  );
};

export default WalletConnectionArea;