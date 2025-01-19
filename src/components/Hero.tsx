import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";

const roles = [
  "Full Stack Developer",
  "Software Engineer",
  "Web Developer",
  "Programmer",
  "Tech Enthusiast",
];

const Hero = () => {
  const [currentRole, setCurrentRole] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopIndex, setLoopIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleTyping = () => {
      const fullText = roles[loopIndex % roles.length];
      if (!isDeleting) {
        setCurrentRole((prev) => fullText.substring(0, prev.length + 1));
        if (currentRole === fullText) {
          setIsDeleting(true);
          setTypingSpeed(200);
        }
      } else {
        setCurrentRole((prev) => fullText.substring(0, prev.length - 1));
        if (currentRole === "") {
          setIsDeleting(false);
          setLoopIndex((prev) => prev + 1);
          setTypingSpeed(150);
        }
      }
    };

    const typingTimer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(typingTimer);
  }, [currentRole, isDeleting, loopIndex, typingSpeed]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-6 py-20 md:py-40">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Hi, I'm{" "}
            <span className="text-blue-600 dark:text-blue-400">
              Srikanth Reddy
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 text-bold"
          >
            {currentRole}
            <span className="text-blue-600 dark:text-white-400">|</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center space-x-6  mb-16"
          >
            <a
              href="https://github.com/srikanth-reddy-g"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              <Github size={24} />
            </a>
            <a
              href="http://www.linkedin.com/in/srikanth-reddy-gunukula"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:srikanthgunukula21@gmail.com"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              <Mail size={24} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <button
              onClick={scrollToAbout}
              className="animate-bounce p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <ChevronDown className="w-6 h-6 text-gray-600 dark:text-gray-400" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
