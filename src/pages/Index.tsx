
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import ProjectsSection from '../components/ProjectsSection';
import SkillsSection from '../components/SkillsSection';
import ContactSection from '../components/ContactSection';
import Navigation from '../components/Navigation';
import SocialLinks from '../components/SocialLinks';
import ParticleBackground from '../components/ParticleBackground';

const Index = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const sections = [
    { id: 'hero', component: HeroSection },
    { id: 'projects', component: ProjectsSection },
    { id: 'skills', component: SkillsSection },
    { id: 'contact', component: ContactSection },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const pageVariants = {
    initial: { opacity: 0, y: 100, scale: 0.9 },
    animate: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.25, 0.25, 0.75],
        staggerChildren: 0.1
      }
    },
    exit: { 
      opacity: 0, 
      y: -100, 
      scale: 1.1,
      transition: { duration: 0.5 }
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
          className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
        >
          Loading...
        </motion.div>
      </div>
    );
  }

  const CurrentComponent = sections[currentSection].component;

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      <ParticleBackground />
      
      {/* Animated gradient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-80" />
      <div className="fixed inset-0 bg-gradient-to-tr from-cyan-900/20 via-transparent to-blue-900/20 animate-pulse" />
      
      <Navigation 
        currentSection={currentSection} 
        setCurrentSection={setCurrentSection}
        sections={sections}
      />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSection}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="relative z-10"
        >
          <CurrentComponent />
        </motion.div>
      </AnimatePresence>
      
      <SocialLinks />
    </div>
  );
};

export default Index;
