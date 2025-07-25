import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import CoursesSection from "@/components/CoursesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import MentorAccessSection from "@/components/MentorAccessSection";
import TrustedCoursesBrand from "@/components/TrustedCoursesBrand";
import AdmissionsSection from "@/components/AdmissionsSection";
import VideoPitchSection from "@/components/VideoPitchSection";
import React from "react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AdmissionsSection />
      <FeaturesSection />
      <CoursesSection />
      <TrustedCoursesBrand />
      <MentorAccessSection />
      <TestimonialsSection />
      <VideoPitchSection />
      <Footer />
    </div>
  );
};

export default Index;
