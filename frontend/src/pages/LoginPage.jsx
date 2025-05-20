import { Box, Heading, Text, Button, VStack, Input, Stack } from "@chakra-ui/react";

const LoginPage = () => {
  return (
    <Box
      bgColor="#222222"
      color="white"
      borderRadius="md"
      boxShadow="lg"
      p={8}
      textAlign="center"
      width="440px"
      mx="auto"
    >
      <VStack spacing={6}>
        {/* Title */}
        <Heading as="h1" size="lg" color="#1DCD9F">
          Login
        </Heading>

        {/* Description */}
        <Text fontSize="md" color="gray.300">
          Welcome back! Please log in to continue.
        </Text>

        {/* Form */}
        <Stack spacing={4} width="100%">
          <Input
            type="text"
            placeholder="Email / Username"
            bg="gray.700"
            color="white"
            _placeholder={{ color: "gray.400" }}
          />
          <Input
            type="password"
            placeholder="Password"
            bg="gray.700"
            color="white"
            _placeholder={{ color: "gray.400" }}
          />
        </Stack>

        {/* Submit Button */}
        <Button
          variant="solid"
          bg="#1DCD9F"
          color="white"
          _hover={{ bg: "#169976" }}
          size="lg"
          width="100%"
        >
          Log In
        </Button>

        {/* Keep Me Logged In Option */}
        <Box width="100%" textAlign="left">
          <label>
            <input type="checkbox" style={{ accentColor: "#1DCD9F", marginRight: "8px" }} />
            Keep me logged in
          </label>
        </Box>
      </VStack>
    </Box>
  );
};

export default LoginPage;