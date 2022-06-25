import { ThemeProvider } from "styled-components";
import { Navbar } from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { Explore } from "./pages/Explore";
import { MyProfile } from "./pages/MyProfile";
import { Container } from "./components/styles/Container.styled";
import { UserPage } from "./pages/UserPage";
import { Signin } from "./pages/Signin";
import { Signup } from "./pages/Signup";
import { MakePost } from "./pages/MakePost";
import { Verification } from "./pages/Verification";

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
    
    {/* protected route */}
    <Route path="/myprofile" element={<MyProfile />}/>
    <Route path="/makepost" element={<MakePost />}/>
    <Route path="/api/auth/:id/:token" element={<Verification />}/>

     {/* public routes */}
    <Route path="/" element={<Explore />}/>
    <Route path="/explore" element={<Explore />}/>
    <Route path="/user/:id" element={<UserPage />}/>
    <Route path="/signin" element={<Signin />}/>
    <Route path="/signup" element={<Signup />}/>

    </Routes>
    </Container>
    </ThemeProvider>
    </>
  );
}

export default App;
