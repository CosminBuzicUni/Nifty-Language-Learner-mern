import { Box, Button, Container, Flex, Text, Avatar, VStack } from "@chakra-ui/react";
import { useState } from "react";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Simulate login state
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Dropdown state

  return (
    <Box
      bgColor={"#222222"}
      py={4}
      boxShadow="sm"
      width="100%"
    >
      <Container maxW="100%" px={6}>
        <Flex justify="space-between" align="center">
          {/* Logo and Title */}
          <Flex align="center">
            <Box bg="blue.500" w="40px" h="40px" borderRadius="md" mr={2}></Box>
            <Text fontSize="lg" fontWeight="bold" color="#1DCD9F">
              Nifty Language Learner
            </Text>
          </Flex>

          {/* Buttons */}
          <Flex align="center" gap={4}>
            {!isLoggedIn ? (
              <>
                <Button variant="solid" bg="#1DCD9F" color="white" _hover={{ bg: "#169976" }}>
                  Login
                </Button>
                <Button variant="solid" bg="#1DCD9F" color="white" _hover={{ bg: "#169976" }}>
                  Sign Up
                </Button>
              </>
            ) : (
              <>
                <Button colorScheme="blue" variant="solid" bg="blue.600" color="white" _hover={{ bg: "blue.700" }}>
                  History
                </Button>
                <Box position="relative">
                  <Avatar
                    size="sm"
                    cursor="pointer"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  />
                  {isDropdownOpen && (
                    <VStack
                      position="absolute"
                      top="100%"
                      right="0"
                      bg="white"
                      boxShadow="md"
                      borderRadius="md"
                      p={2}
                      spacing={1}
                      zIndex="10"
                    >
                      <Button
                        size="sm"
                        variant="ghost"
                        color="red.500"
                        _hover={{ bg: "red.100" }}
                        onClick={() => {
                          setIsLoggedIn(false);
                          setIsDropdownOpen(false);
                        }}
                      >
                        Log Out
                      </Button>
                    </VStack>
                  )}
                </Box>
              </>
            )}
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;