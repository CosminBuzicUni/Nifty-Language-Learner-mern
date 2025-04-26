import { Box, Text, Flex, Link, Icon } from "@chakra-ui/react";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <Box bg="gray.800" color="white" py={4} mt={8}>
      <Flex justify="space-between" align="center" maxW="1140px" mx="auto" px={6}>
        {/* Copyright */}
        <Text fontSize="sm">
          © {new Date().getFullYear()} Nifty Language Learner. All rights reserved.
        </Text>

        {/* Social Media Links */}
        <Flex gap={4}>
          <Link href="https://github.com/CosminBuzicUni/" isExternal>
            <Icon as={FaGithub} boxSize={5} />
          </Link>
          <Link href="https://www.linkedin.com/in/cosmin-buzic-b96142362/" isExternal>
            <Icon as={FaLinkedin} boxSize={5} />
          </Link>
        </Flex>

        {/* Contact Us */}
        <Link href="mailto:your-email@example.com" fontSize="sm" _hover={{ textDecoration: "underline" }}>
          Contact Us
        </Link>

        
        {/* About Us */}
        <Link href="mailto:your-email@example.com" fontSize="sm" _hover={{ textDecoration: "underline" }}>
          About Us
        </Link>
      </Flex>
    </Box>
  );
};

export default Footer;