
import { motion } from 'framer-motion';

interface NavigationProps {
  currentSection: number;
  setCurrentSection: (index: number) => void;
  sections: Array<{ id: string; component: any }>;
}

const Navigation = ({ currentSection, setCurrentSection, sections }: NavigationProps) => {
  const navItems = [
    { label: 'Home', icon: '🏠' },
    { label: 'Projects', icon: '💼' },
    { label: 'Skills', icon: '⚡' },
    { label: 'Contact', icon: '📬' }
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50"
    >
      <div className="flex items-center space-x-2 bg-black/30 backdrop-blur-md rounded-full px-6 py-3 border border-white/10">
        {navItems.map((item, index) => (
          <motion.button
            key={item.label}
            onClick={() => setCurrentSection(index)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              currentSection === index
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                : 'text-gray-400 hover:text-white hover:bg-white/10'
            }`}
          >
            <span className="hidden md:inline">{item.label}</span>
            <span className="md:hidden">{item.icon}</span>
          </motion.button>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navigation;
