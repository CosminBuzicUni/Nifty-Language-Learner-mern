import { Box, Heading, Text, Button, VStack, Input, Stack, IconButton, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);

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
          Sign Up
        </Heading>

        {/* Description */}
        <Text fontSize="md" color="gray.300">
          Create an account to start learning languages today!
        </Text>

        {/* Form */}
        <Stack spacing={4} width="100%">
          <Input
            type="text"
            placeholder="Username"
            bg="gray.700"
            color="white"
            _placeholder={{ color: "gray.400" }}
          />
          <Input
            type="text"
            placeholder="Email"
            bg="gray.700"
            color="white"
            _placeholder={{ color: "gray.400" }}
          />
          <Flex align="center" position="relative">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              bg="gray.700"
              color="white"
              _placeholder={{ color: "gray.400" }}
              pr="3rem" // Add padding to the right for the button
            />
            <IconButton
              aria-label={showPassword ? "Hide password" : "Show password"}
              onClick={() => setShowPassword(!showPassword)}
              variant="ghost"
              _hover={{ bg: "gray.600" }}
              size="sm"
              position="absolute"
              right="0.5rem"
            >
              {showPassword ? <FaEyeSlash color="white" /> : <FaEye color="white" />}
            </IconButton>
          </Flex>
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
          Sign Up
        </Button>
      </VStack>
    </Box>
  );
};

export default SignUpPage;