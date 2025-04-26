import { Box, Button, Container, Flex, Text, Avatar, VStack, Image, Circle, Link } from "@chakra-ui/react";
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
          <Link href="/">
            <Circle bg="white" w="50px" h="50px" borderRadius="full" mr={2}>
              <Image src="\logo.svg" alt="Logo" boxSize="40px" borderRadius="md" />
            </Circle>
          </Link>
          <Link href="/">
            <Text fontSize="2xl" fontWeight="bold" color="#1DCD9F">
              Nifty Language Learner
            </Text>
          </Link>
          </Flex>

          {/* Buttons */}
          <Flex align="center" gap={4}>
            {!isLoggedIn ? (
              <>
                <Link href="/login">
                  <Button variant="solid" bg="#1DCD9F" color="white" _hover={{ bg: "#169976" }}>
                    Login
                  </Button>
                </Link>
                <Link href="/signUp">
                <Button variant="solid" bg="#1DCD9F" color="white" _hover={{ bg: "#169976" }}>
                  Sign Up
                </Button>
                </Link>
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