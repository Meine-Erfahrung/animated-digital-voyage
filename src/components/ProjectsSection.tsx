
import { motion } from 'framer-motion';
import { useState } from 'react';

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Modern React-based e-commerce solution with advanced animations",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop",
    tech: ["React", "Node.js", "MongoDB", "Framer Motion"],
    link: "#"
  },
  {
    id: 2,
    title: "3D Portfolio Website",
    description: "Interactive 3D portfolio built with Three.js and React",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
    tech: ["Three.js", "React", "WebGL", "GSAP"],
    link: "#"
  },
  {
    id: 3,
    title: "AI Dashboard",
    description: "Real-time analytics dashboard with machine learning insights",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
    tech: ["React", "Python", "TensorFlow", "D3.js"],
    link: "#"
  },
  {
    id: 4,
    title: "Mobile Banking App",
    description: "Secure mobile banking application with biometric authentication",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=600&fit=crop",
    tech: ["React Native", "Node.js", "PostgreSQL", "JWT"],
    link: "#"
  }
];

const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const projectVariants = {
    initial: { opacity: 0, y: 100, scale: 0.8 },
    animate: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A showcase of my latest work, featuring cutting-edge technologies and innovative solutions
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={projectVariants}
              whileHover={{ 
                scale: 1.02,
                rotateX: 5,
                rotateY: 5
              }}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
              className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-black border border-white/10 hover:border-cyan-500/50 transition-all duration-500"
              style={{
                transformStyle: 'preserve-3d',
                perspective: '1000px'
              }}
            >
              <div className="relative h-64 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  animate={{
                    scale: hoveredProject === project.id ? 1.1 : 1
                  }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              </div>

              <div className="p-6">
                <motion.h3 
                  className="text-2xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors"
                  animate={{
                    x: hoveredProject === project.id ? 10 : 0
                  }}
                >
                  {project.title}
                </motion.h3>
                
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm border border-cyan-500/30"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-3 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg font-semibold hover:from-cyan-500 hover:to-blue-500 transition-all duration-300"
                >
                  View Project
                </motion.button>
              </div>

              {/* Animated border effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background: 'linear-gradient(45deg, transparent, rgba(0, 212, 255, 0.1), transparent)',
                  opacity: hoveredProject === project.id ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
