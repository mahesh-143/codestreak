import { ThemeProvider } from "styled-components";
import { Navbar } from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { Explore } from "./pages/Explore";
import { MyProfile } from "./pages/MyProfile";

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
    <Routes>
    <Route path="/explore" element={<Explore />}/>
    <Route path="/" element={<MyProfile />}/>
    </Routes>
    </ThemeProvider>
    </>
  );
}

export default App;
