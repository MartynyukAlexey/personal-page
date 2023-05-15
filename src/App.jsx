import "./styles/main.css";

import { BrowserRouter, Router, Route, Routes } from "react-router-dom";

import Navbar from "./parts/nav/Navbar";
import Footer from "./parts/footer/Footer";

import Home from "./pages/home/Home";
import Contacts from "./pages/contacts/Contacts";
import Projects from "./pages/projects/Projects";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contacts" element={<Contacts />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
