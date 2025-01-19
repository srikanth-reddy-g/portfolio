import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  ExternalLink,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface Project {
  title: string;
  description: string;
  images: string[];
  github: string;
  live?: string;
  tags: string[];
  details: string;
  features: string[];
  technologies: string[];
}

interface UseInViewOptions {
  triggerOnce?: boolean;
  threshold?: number;
}

// Custom hook to replace react-intersection-observer
const useInView = (options: UseInViewOptions = {}) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
        if (options.triggerOnce && entry.isIntersecting) {
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: options.threshold || 0,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options.threshold, options.triggerOnce]);

  return [ref, isInView];
};

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageError, setImageError] = useState<Record<string, boolean>>({});
  const modalRef = useRef<HTMLDivElement>(null);

  // Sample projects data
  const projects: Project[] = [
    {
      title: "slitURL",
      description:
        "A URL shortener built with Supabase and React, featuring custom aliases, QR codes, and analytics on clicks, geography, and device usage.",
      images: [
        "/sliturl_image_1.png",
        "/sliturl_image_2.png",
        "/sliturl_image_3.png",
        "/sliturl_image_4.png",
      ],
      github: "https://github.com/srikanth-reddy-g/slitURL.git",
      live: "https://sliturl.onrender.com/",
      tags: ["ReactJS", "Supabase", "PostgreSQL", "Tailwind CSS"],
      details:
        "slitURL is a user-friendly URL shortener application developed to streamline the management and sharing of long URLs. The application includes features such as QR code generation, custom aliasing, and a robust analytics dashboard with interactive charts. It provides user authentication, link management tools, and filtering options for ease of use. Built with ReactJS, Supabase, PostgreSQL, and Tailwind CSS, slitURL combines advanced features with intuitive usability.",
      features: [
        "Shorten and customize URLs with aliases",
        "Generate and download QR codes for links",
        "Track detailed analytics (clicks, geography, devices)",
        "Secure user authentication and personalized dashboards",
        "Link management with advanced filtering options",
      ],
      technologies: ["ReactJS", "Supabase", "PostgreSQL", "Tailwind CSS"],
    },
    {
      title: "AirChat",
      description:
        "A feature-rich chat application built with the MERN stack and Socket.io for real-time communication, supporting one-on-one and group chats.",
      images: [
        "/airchat_image_2.png",
        "/airchat_image_1.png",
        "/airchat_image_3.png",
        "/airchat_image_4.png",
        "/airchat_image_5.png",
        "/airchat_image_6.png",
      ],
      github: "https://github.com/srikanth-reddy-g/AirChat.git",
      live: "https://airchat-yvs0.onrender.com/",
      tags: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "Socket.io",
        "ChakraUI",
      ],
      details:
        "AirChat is a comprehensive chat application that supports both one-on-one and group messaging. The app provides real-time communication using Socket.io, persistent message storage in MongoDB, and user-friendly features such as typing indicators, profile management, notifications, and emoji support. The group chats include admin controls for adding/removing members and renaming groups. The application is built with the MERN stack (MongoDB, Express.js, React.js, Node.js) and incorporates robust authentication with bcrypt and image hosting via Cloudinary.",
      features: [
        "One-on-one and group messaging with real-time updates",
        "Typing indicators and emoji support",
        "Group chat admin controls (add/remove members, rename groups)",
        "Secure user authentication with bcrypt",
        "Persistent chat data storage with MongoDB",
      ],
      technologies: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "Socket.io",
        "Cloudinary",
        "ChakraUI",
        "JWT",
      ],
    },
    {
      title: "Spreadsheet Web Application",
      description:
        "A feature-rich web application for creating, editing, and managing spreadsheets with a modern and intuitive interface.",
      images: ["/spreadsheet.png"],
      github:
        "https://github.com/srikanth-reddy-g/i544/tree/main/submit/prj4-sol",
      live: "",
      tags: [
        "JavaScript (ES6+)",
        "TypeScript",
        "HTML5",
        "CSS3",
        "Node.js",
        "MongoDB",
        "Supertest",
      ],
      details:
        "The Spreadsheet Web Application is designed to offer a seamless experience for managing tabular data. It allows users to create new spreadsheets, edit existing data, and delete unwanted entries. Built using Vanilla JavaScript for the frontend and Node.js for the backend, the application emphasizes performance and user interactivity. It uses MongoDB as the database to store spreadsheet data persistently. The backend, powered by Express.js, handles API requests to read, update, and delete data, ensuring reliable operations and real-time updates. Comprehensive unit and integration tests are implemented to ensure reliability and maintainability of the application.",
      features: [
        "Dynamic spreadsheet rendering with editable cells",
        "Integration with a backend service using Fetch API",
        "Keyboard support for navigation and actions like copy-paste",
        "Real-time updates and error handling with intuitive user feedback",
        "Supports clearing and resetting spreadsheets",
      ],
      technologies: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose (ODM)",
        "RESTful APIs",
        "Jest",
        "React Testing Library",
        "Supertest",
        "HTML5",
        "CSS3",
        "JavaScript (ES6+)",
        "TypeScript",
        "Tailwind CSS",
      ],
    },
    {
      title: "Retail Business Management System",
      description:
        "A robust database management system for retail businesses, featuring dynamic inventory tracking, employee and customer management, automated logging, and sales reporting.",
      images: [
        "/rbms-image_1.png",
        "/rbms-image_2.png",
        "/rbms-image_3.png",
        "/rbms-image_4.png",
        "/rbms-image_5.png",
        "/rbms-image_6.png",
        "/rbms-image_7.png",
      ],
      github:
        "https://github.com/srikanth-reddy-g/Retail-Business-Management-System.git",
      live: "",
      tags: [
        "Java",
        "Oracle Database",
        "JDBC",
        "PL/SQL",
        "Triggers",
        "Stored Procedures",
      ],
      details:
        "The RBMS project is built using Oracle SQL to handle real-time operations in a retail business. It includes triggers for logging operations like insertions and updates to the tables, and procedures for managing employees, purchases, customers, and inventory. The system is designed to automate various processes such as updating product quantity, maintaining sales records, and managing customer data effectively.",
      features: [
        "Comprehensive employee, customer, and product management with real-time updates.",
        "Automated logging of operations and monthly sales activity reports by employee.",
        "Dynamic inventory management with automatic stock updates and validation procedures.",
        "Input validation and exception handling for reliable and secure transactions.",
        "Detailed tracking of purchases, discounts, and sales with database integration.",
      ],
      technologies: [
        "Java",
        "Oracle Database",
        "JDBC",
        "PL/SQL",
        "Triggers",
        "Stored Procedures",
      ],
    },
  ];

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "unset";
  };

  // Cleanup body style on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedProject) return;

      switch (e.key) {
        case "Escape":
          closeModal();
          break;
        case "ArrowLeft":
          prevImage();
          break;
        case "ArrowRight":
          nextImage();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject]);

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  const handleImageError = (imagePath: string) => {
    setImageError((prev) => ({
      ...prev,
      [imagePath]: true,
    }));
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl md:text-4xl font-bold text-center mb-12 dark:text-white"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg"
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="w-full h-48 cursor-pointer overflow-hidden"
                onClick={() => openModal(project)}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                role="button"
                tabIndex={0}
                onKeyPress={(e) => {
                  if (e.key === "Enter") openModal(project);
                }}
              >
                {!imageError[project.images[0]] ? (
                  <img
                    src={project.images[0]}
                    alt={`${project.title} preview`}
                    className="w-full h-full object-cover"
                    onError={() => handleImageError(project.images[0])}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-200 dark:bg-gray-700">
                    <span className="text-gray-500 dark:text-gray-400">
                      Image not available
                    </span>
                  </div>
                )}
              </motion.div>

              {/* Project card content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-justify text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-100 dark:bg-gray-500 text-blue-600 dark:text-gray-100 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={`View ${project.title} code on GitHub`}
                  >
                    <Github className="w-5 h-5 mr-2" />
                    Code
                  </motion.a>
                  {project.live && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={`View ${project.title} live demo`}
                    >
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Live Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              ref={modalRef}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4 border-b dark:border-gray-700 flex justify-between items-center">
                <h3
                  id="modal-title"
                  className="text-xl font-bold dark:text-white"
                >
                  {selectedProject.title}
                </h3>
                <div className="flex items-center space-x-4">
                  <motion.a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={`View ${selectedProject.title} code on GitHub`}
                  >
                    <Github className="w-5 h-5 mr-2" />
                  </motion.a>
                  {selectedProject.live && (
                    <motion.a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={`View ${selectedProject.title} live demo`}
                    >
                      <ExternalLink className="w-5 h-5 mr-2" />
                    </motion.a>
                  )}

                  <motion.button
                    onClick={closeModal}
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="Close modal"
                  >
                    <X className="w-6 h-6 mr-2" />
                  </motion.button>
                </div>
              </div>

              <div className="p-4">
                <div className="relative">
                  <div className="relative w-full aspect-video bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
                    <AnimatePresence initial={false} mode="wait">
                      <motion.img
                        key={selectedProject.images[currentImageIndex]}
                        src={selectedProject.images[currentImageIndex]}
                        alt={`${selectedProject.title} screenshot ${
                          currentImageIndex + 1
                        }`}
                        className="w-full h-full object-contain"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{
                          duration: 0.2,
                          ease: "easeInOut",
                        }}
                        onError={() =>
                          handleImageError(
                            selectedProject.images[currentImageIndex]
                          )
                        }
                      />
                    </AnimatePresence>
                  </div>

                  {selectedProject.images.length > 1 && (
                    <>
                      <motion.button
                        className="absolute left-2 top-1/2  bg-white dark:bg-gray-300 rounded-full p-2 shadow-lg"
                        onClick={prevImage}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="w-3 h-3 md:w-4 md:h-4 lg:w-6 lg:h-6" />
                      </motion.button>
                      <motion.button
                        className="absolute right-2 top-1/2 bg-white dark:bg-gray-300 rounded-full p-2 shadow-lg"
                        onClick={nextImage}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label="Next image"
                      >
                        <ChevronRight className="w-3 h-3 md:w-4 md:h-4 lg:w-6 lg:h-6" />
                      </motion.button>
                      <div className="absolute py-2 left-0 right-0 flex justify-center space-x-2">
                        {selectedProject.images.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`w-2 h-2 rounded-full transition-colors ${
                              index === currentImageIndex
                                ? "bg-gray-200"
                                : "bg-gray-400"
                            }`}
                            aria-label={`Go to image ${index + 1}`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>

                <div className="mt-6 space-y-4 text-gray-600 dark:text-gray-300">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Description
                    </h4>
                    <p className="text-sm text-justify">
                      {selectedProject.details}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Features
                    </h4>
                    <ul className="list-disc ml-5">
                      {selectedProject.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-100 dark:bg-gray-500 text-blue-600 dark:text-gray-100 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
