import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Facebook, Github, Mail, MessageCircle, Instagram, Linkedin } from 'lucide-react';
import Navbar from './Components/Navbar';
import './App.css';
import './Styles/Navbar.css';
import RainBackground from './Components/RainBackground';
import Home from './Components/Home';
import AboutSection from './Components/About';
import Projects from './Components/Projects';
import Contacts from './Components/Contacts';

function App() {
    return (
        <Router>
            <div className="App">
                <RainBackground />
                <Navbar />

                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<AboutSection />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/contact" element={<Contacts />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;