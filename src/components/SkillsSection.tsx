
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const skills = [
  { name: 'React.js', level: 95, color: '#61dafb' },
  { name: 'Three.js', level: 88, color: '#000000' },
  { name: 'Node.js', level: 92, color: '#339933' },
  { name: 'TypeScript', level: 90, color: '#3178c6' },
  { name: 'Python', level: 85, color: '#3776ab' },
  { name: 'MongoDB', level: 80, color: '#47a248' },
  { name: 'GraphQL', level: 78, color: '#e10098' },
  { name: 'AWS', level: 82, color: '#ff9900' }
];

const SkillBar = ({ skill, index }: { skill: typeof skills[0], index: number }) => {
  const [animatedLevel, setAnimatedLevel] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedLevel(skill.level);
    }, index * 200);

    return () => clearTimeout(timer);
  }, [skill.level, index]);

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="mb-6"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-lg font-semibold text-white">{skill.name}</span>
        <motion.span 
          className="text-cyan-400 font-bold"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1 + 0.5 }}
        >
          {animatedLevel}%
        </motion.span>
      </div>
      
      <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
        <motion.div
          className="h-full rounded-full relative"
          style={{ 
            background: `linear-gradient(90deg, ${skill.color}, ${skill.color}aa)`,
            boxShadow: `0 0 10px ${skill.color}50`
          }}
          initial={{ width: 0 }}
          animate={{ width: `${animatedLevel}%` }}
          transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
        </motion.div>
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section className="min-h-screen py-20 px-4 flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              My Skills
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="initial"
            animate="animate"
            className="space-y-6"
          >
            {skills.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: 45 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative"
          >
            <div className="w-80 h-80 mx-auto relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-4 border-cyan-500/30"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 rounded-full border-2 border-blue-500/20"
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8 rounded-full border border-purple-500/10"
              />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-cyan-400 mb-2">8+</div>
                  <div className="text-gray-400">Technologies</div>
                  <div className="text-2xl font-bold text-white mt-2">Mastered</div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
