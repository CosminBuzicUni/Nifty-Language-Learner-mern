import { Box } from "@chakra-ui/react";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import CreateUserPage from "./pages/CreateUserPage";
import Navbar from "./components/Navbar";

function App() {

  return (
    <Box minH="100vh" width="100%">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/createUser" element={<CreateUserPage />} />
      </Routes>
    </Box>
  )
}

export default App
