// src/app/page.tsx
"use client";
import { useState } from "react";
import Navbar from "../components/principal/Navbar";
import Footer from "../components/principal/Footer";
import HomeSection from "../components/principal/HomeSection";
import AboutSection from "../components/principal/AboutSection";
import StatsSection from "../components/principal/StatsSection";
import StaffSection from "../components/principal/StaffSection";
import ScholarshipsSection from "../components/principal/ScholarshipsSection";
import ContactSection from "../components/principal/ContactSection";
import LoginModal from "../components/principal/LoginModal";

const LandingPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <Navbar onOpenLogin={() => setIsModalOpen(true)} />
      <main>
        <HomeSection />
        <AboutSection />
        <StatsSection />
        <StaffSection />
        <ScholarshipsSection />
        <ContactSection />
      </main>
      <Footer />

      {/* Modal de Ingreso en el nivel superior */}
      {isModalOpen && <LoginModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default LandingPage;
