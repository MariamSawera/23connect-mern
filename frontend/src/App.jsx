import { useEffect } from "react";
import api from "./lib/axios.js";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import { Routes, Route } from "react-router-dom";

//import pages
import HomePage from "./pages/HomePage.jsx";
import AnnouncementsPage from "./pages/AnnouncementsPage.jsx";
import SemesterPage from "./pages/SemesterPage.jsx";
import BooksPage from "./pages/BooksPage.jsx";
import AssignmentsPage from "./pages/AssignmentsPage.jsx";
import QAPage from "./pages/QAPage.jsx";
import ResourcesPage from "./pages/ResourcesPage.jsx";
import ExamsPage from "./pages/ExamsPage.jsx";
import GalleryPage from "./pages/GalleryPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import AdminPage from "./pages/AdminPage.jsx";


function App() {
  useEffect(() => {
    api.get("/api/health")
      .then(res => console.log(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <>
      {/* Navbar at the top */}
      <Navbar />
      <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/announcemnts" element={<AnnouncementsPage/>}/>
      <Route path="/semesters" element={<SemesterPage/>}/>
      <Route path="/books" element={<BooksPage/>}/>
      <Route path="/assignments" element={<AssignmentsPage/>}/>
      <Route path="/QA" element={<QAPage/>}/>
      <Route path="/resources" element={<ResourcesPage/>}/>
      <Route path="/exams" element={<ExamsPage/>}/>
      <Route path="/projects" element={<GalleryPage/>}/>
      <Route path="/contact" element={<ContactPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/signup" element={<LoginPage/>}/>
      <Route path="/admin" element={<AdminPage/>}/>
      </Routes>
      <Footer/>

    </>
  );
}

export default App;
