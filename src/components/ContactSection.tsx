
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    toast({
      title: "Message Sent Successfully!",
      description: "I'll get back to you as soon as possible.",
    });

    // Reset form after animation
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section className="min-h-screen py-20 px-4 flex items-center">
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's create something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center space-x-4 p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-500/50 transition-all"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-xl">📧</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold">Email</h3>
                  <p className="text-gray-400">john.doe@example.com</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center space-x-4 p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-500/50 transition-all"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-xl">📱</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold">Phone</h3>
                  <p className="text-gray-400">+1 (555) 123-4567</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center space-x-4 p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-500/50 transition-all"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-xl">📍</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold">Location</h3>
                  <p className="text-gray-400">San Francisco, CA</p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="p-6 rounded-xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20"
            >
              <h3 className="text-xl font-bold text-white mb-3">Download Resume</h3>
              <p className="text-gray-400 mb-4">Get a detailed overview of my experience and skills</p>
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 25px rgba(0, 212, 255, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-3 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg font-semibold hover:from-cyan-500 hover:to-blue-500 transition-all duration-300"
              >
                Download PDF Resume
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            onSubmit={handleSubmit}
            className="space-y-6 p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
          >
            <div>
              <label className="block text-white font-semibold mb-2">Name</label>
              <motion.input
                whileFocus={{ scale: 1.02, borderColor: "#00d4ff" }}
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg focus:border-cyan-500 focus:outline-none text-white transition-all"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">Email</label>
              <motion.input
                whileFocus={{ scale: 1.02, borderColor: "#00d4ff" }}
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg focus:border-cyan-500 focus:outline-none text-white transition-all"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">Message</label>
              <motion.textarea
                whileFocus={{ scale: 1.02, borderColor: "#00d4ff" }}
                required
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg focus:border-cyan-500 focus:outline-none text-white transition-all resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting || isSubmitted}
              whileHover={{ 
                scale: isSubmitting || isSubmitted ? 1 : 1.05,
                boxShadow: isSubmitting || isSubmitted ? "none" : "0 0 30px rgba(0, 212, 255, 0.5)"
              }}
              whileTap={{ scale: isSubmitting || isSubmitted ? 1 : 0.95 }}
              className={`w-full py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
                isSubmitted 
                  ? 'bg-green-600 text-white' 
                  : isSubmitting 
                  ? 'bg-gray-600 text-gray-300 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white'
              }`}
            >
              {isSubmitted ? (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="inline-flex items-center"
                >
                  <span className="mr-2">✓</span> Message Sent!
                </motion.span>
              ) : isSubmitting ? (
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="inline-block mr-2"
                >
                  ⟳
                </motion.span>
              ) : (
                'Send Message'
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
