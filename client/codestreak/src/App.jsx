import { ThemeProvider } from "styled-components";
import { Navbar } from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { Explore } from "./pages/Explore";
import { MyProfile } from "./pages/MyProfile";
import { Container } from "./components/styles/Container.styled";
import { UserPage } from "./pages/UserPage";

function App() {
  const theme = { 
      color : {
        nav : '#C5D06E',
        card :  '#FBF8CC',
        btn : '#8C9733',
        primary : '#000000'
      }
  }

  return (
    <>
    <ThemeProvider theme={theme}>
    <Navbar />
    <Container>
    <Routes>
    <Route path="/explore" element={<Explore />}/>
    <Route path="/" element={<MyProfile />}/>
    <Route path="/user/:id" element={<UserPage />}/>
    </Routes>
    </Container>
    </ThemeProvider>
    </>
  );
}

export default App;
