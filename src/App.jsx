import "./styles/main.css";

import { HashRouter, Router, Route, Routes } from "react-router-dom";

import Navbar from "./parts/nav/Navbar";
import Footer from "./parts/footer/Footer";

import Home from "./pages/home/Home";
import Contacts from "./pages/contacts/Contacts";
import Projects from "./pages/projects/Projects";

function App() {
    return (
        <div className="App">
            <HashRouter>
                <Navbar />
                <Routes>
                    <Route path="*" element={<Home />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/project" element={<Projects />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contacts" element={<Contacts />} />
                </Routes>
                <Footer />
            </HashRouter>
        </div>
    );
}

export default App;
