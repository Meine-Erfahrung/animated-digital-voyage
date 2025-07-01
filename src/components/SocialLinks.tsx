
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Youtube } from 'lucide-react';

const socialLinks = [
  { 
    name: 'GitHub', 
    icon: Github, 
    url: 'https://github.com',
    color: '#ffffff'
  },
  { 
    name: 'LinkedIn', 
    icon: Linkedin, 
    url: 'https://linkedin.com',
    color: '#0077b5'
  },
  { 
    name: 'Instagram', 
    icon: Instagram, 
    url: 'https://instagram.com',
    color: '#e4405f'
  },
  { 
    name: 'YouTube', 
    icon: Youtube, 
    url: 'https://youtube.com',
    color: '#ff0000'
  }
];

const SocialLinks = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
      className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50"
    >
      <div className="flex flex-col space-y-4">
        {socialLinks.map((social, index) => {
          const IconComponent = social.icon;
          
          return (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.2, 
                rotate: 10,
                boxShadow: `0 0 20px ${social.color}50`
              }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 bg-black/30 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10 hover:border-white/30 transition-all duration-300 group"
            >
              <IconComponent 
                size={20} 
                className="text-gray-400 group-hover:text-white transition-colors duration-300"
                style={{ color: social.color }}
              />
            </motion.a>
          );
        })}

        <motion.div
          className="w-px h-16 bg-gradient-to-b from-cyan-500 to-transparent mx-auto mt-6"
          initial={{ height: 0 }}
          animate={{ height: 64 }}
          transition={{ duration: 1, delay: 0.8 }}
        />
      </div>
    </motion.div>
  );
};

export default SocialLinks;
