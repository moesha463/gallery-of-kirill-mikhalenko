import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Biography from "./components/Biography/Biography";
import Exhibitions from "./components/Exhibitions/Exhibitions";
import Collaborations from "./components/Collaborations/Collaborations";
import Nft from "./components/Nft/Nft";
import Publications from "./components/Publications/Publications";
import BackToTop from "./components/BackToTop/BackToTop";
import Gallery from "./components/Gallery/Gallery";
import Contacts from "./components/Contacts/Contacts";
import AdminLogin from "./components/Admin/AdminLogin";
import AdminDashboard from "./components/Admin/AdminDashboard";
import ManageBiography from "./components/Admin/ManageBiography";
import ManageGallery from "./components/Admin/ManageGallery";
import ManageExhibitions from "./components/Admin/ManageExhibitions";
import ManageCollaborations from "./components/Admin/ManageCollaborations";
import ManagePublications from "./components/Admin/ManagePublications";
import { Analytics } from "@vercel/analytics/react";
import { auth } from "./firebase/config";
import './locales';
import './App.css';

// Компонент для управления отображением хедера, футера и BackToTop
const Layout = ({ children }) => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      {!isAdminRoute && <Header />}
      {children}
      {!isAdminRoute && <BackToTop />}
      {!isAdminRoute && <Footer />}
      <Analytics />
    </>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Biography />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/exhibitions" element={<Exhibitions />} />
        <Route path="/collaborations" element={<Collaborations />} />
        <Route path="/nft" element={<Nft />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<PrivateRoute><AdminDashboard /></PrivateRoute>}>
          <Route path="biography" element={<ManageBiography />} />
          <Route path="gallery" element={<ManageGallery />} />
          <Route path="exhibitions" element={<ManageExhibitions />} />
          <Route path="collaborations" element={<ManageCollaborations />} />
          <Route path="publications" element={<ManagePublications />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

const PrivateRoute = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) return <div>Загрузка...</div>;
  return user ? children : <Navigate to="/admin/login" />;
};

const App = () => {
  return (
    <Router>
      <Layout>
        <AnimatedRoutes />
      </Layout>
    </Router>
  );
};

export default App;