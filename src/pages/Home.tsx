import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AnimatedText from '../components/AnimatedText';
import ColorShift from '../components/ColorShift';
import SocialLinks from '../components/SocialLinks';
import BackgroundMusic from '../components/BackgroundMusic';
import TechStack from '../components/TechStack';
import { blogs } from '../data/blogs';

export default function Home() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-black text-white p-8"
    >
      <BackgroundMusic />
      <div className="max-w-4xl mx-auto space-y-16">
        <motion.header
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          className="text-center space-y-4"
        >
          <ColorShift>
            <h1 className="text-6xl font-bold font-mono glitch">Pragyan Pandey</h1>
          </ColorShift>
          <AnimatedText
            text="Developer + Security Researcher + Cloud Architect"
            className="text-xl text-purple-300 italic"
          />
          <p className="text-cyan-400 font-mono">@coderpragyan</p>
        </motion.header>

        <TechStack />

        <motion.section
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-bold text-purple-300">Latest Posts</h2>
          <div className="space-y-4">
            {blogs.slice(0, 2).map((blog) => (
              <Link
                key={blog.id}
                to="/blogs"
                className="block p-4 rounded-lg cyber-border hover:bg-purple-900/30 transition-colors"
              >
                <h3 className="text-xl font-bold text-cyan-400">{blog.title}</h3>
                <p className="text-purple-300">{blog.date}</p>
              </Link>
            ))}
          </div>
        </motion.section>

        <motion.footer
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center space-y-4"
        >
          <SocialLinks />
          <div className="flex gap-4 justify-center">
            <Link
              to="/blogs"
              className="px-6 py-2 rounded-full cyber-border hover:bg-purple-900/30 transition-colors"
            >
              Read Blog
            </Link>
            <Link
              to="/api"
              className="px-6 py-2 rounded-full cyber-border hover:bg-purple-900/30 transition-colors"
            >
              API Docs
            </Link>
          </div>
        </motion.footer>
      </div>
    </motion.div>
  );
}