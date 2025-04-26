import { Box, Flex } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
// Importing pages
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
// Importing components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Flex direction="column" minH="100vh" width="100%" backgroundColor={"black"}>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <Box flex="1" 
        display="flex"
        justifyContent="center"
        width="100%"
        padding={"40px"}
        >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signUp" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Box>

      {/* Footer */}
      <Footer />
    </Flex>
  );
}

export default App;
