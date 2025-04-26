import { Box, Heading, Text, Button, VStack } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <Box
      bgColor="#222222"
      color="white"
      borderRadius="md"
      boxShadow="lg"
      p={8}
      textAlign="center"
      maxW="600px"
      mx="auto"
    >
      <VStack spacing={6}>
        {/* Title */}
        <Heading as="h1" size="xl" color="#1DCD9F">
          Welcome to Nifty Language Learner
        </Heading>

        {/* Description */}
        <Text fontSize="lg" color="gray.300">
          Master new languages with ease using our interactive flipcards. Learn vocabulary, grammar, and more in a fun and engaging way!
        </Text>

        {/* Call to Action */}
        <Button
          variant="solid"
          bg="#1DCD9F"
          color="white"
          _hover={{ bg: "#169976" }}
          size="lg"
        >
          Get Started
        </Button>
      </VStack>
    </Box>
  );
};

export default HomePage;