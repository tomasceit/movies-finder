import * as React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import theme from "./theme/Theme";
import { ThemeProvider } from '@mui/material/styles';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';
import Genre from './pages/Genre';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/genres/:genre" element={<Genre />} />
          <Route exact path="/movie/:id" element={<MovieDetail />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;