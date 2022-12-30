import { Container } from "react-bootstrap";
import MoviesList from "./Components/MoviesList";
import NavBar from "./Components/NavBar";
import axios from "axios";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieDetails from "./Components/MovieDetails";

function App() {
  return (
    <div className="font color-body">
      <NavBar />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MoviesList />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
