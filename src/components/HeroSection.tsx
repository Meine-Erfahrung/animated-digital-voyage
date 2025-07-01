
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Text3D, Center } from '@react-three/drei';
import { Suspense } from 'react';

const FloatingIcon = ({ position }: { position: [number, number, number] }) => {
  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <mesh position={position}>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshStandardMaterial color="#00d4ff" emissive="#004466" />
      </mesh>
    </Float>
  );
};

const Scene3D = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <FloatingIcon position={[-2, 1, 0]} />
      <FloatingIcon position={[2, -1, 0]} />
      <FloatingIcon position={[0, 2, -1]} />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
    </>
  );
};

const HeroSection = () => {
  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative px-4">
      <div className="absolute inset-0 w-full h-full">
        <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
          <Suspense fallback={null}>
            <Scene3D />
          </Suspense>
        </Canvas>
      </div>
      
      <motion.div 
        variants={containerVariants}
        initial="initial"
        animate="animate"
        className="text-center z-10 max-w-4xl mx-auto"
      >
        <motion.div
          variants={itemVariants}
          className="mb-8"
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              John Doe
            </span>
          </h1>
          
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-8"
          />
        </motion.div>

        <motion.div variants={itemVariants} className="mb-8">
          <h2 className="text-2xl md:text-4xl font-light mb-6 text-gray-300">
            Full Stack Developer & Creative Technologist
          </h2>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Crafting exceptional digital experiences through innovative web technologies, 
            stunning animations, and user-centric design. Passionate about pushing the 
            boundaries of what's possible on the web.
          </p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 30px rgba(0, 212, 255, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white font-semibold text-lg relative overflow-hidden group"
          >
            <span className="relative z-10">Explore My Work</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
            <h3 className="text-3xl font-bold text-cyan-400">50+</h3>
            <p className="text-gray-400">Projects Completed</p>
          </div>
          <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
            <h3 className="text-3xl font-bold text-cyan-400">3+</h3>
            <p className="text-gray-400">Years Experience</p>
          </div>
          <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
            <h3 className="text-3xl font-bold text-cyan-400">100%</h3>
            <p className="text-gray-400">Client Satisfaction</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
