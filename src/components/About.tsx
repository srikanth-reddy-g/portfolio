import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          ref={ref}
          className="text-3xl md:text-4xl font-bold text-center mb-12 dark:text-white"
        >
          About Me
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center md:items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="w-48 md:w-64 flex-shrink-0 self-center mx-auto md:mx-0 md:mr-6"
          >
            <img
              src="/profile_pic.png"
              alt="Profile"
              className="rounded-full w-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="space-y-6 text-justify flex-grow"
          >
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg ">
              Hi, I’m Srikanth Reddy Gunukula, a Software Engineer with over 3
              years of experience building robust and scalable applications.
              With a Master’s degree in Computer Science from Binghamton
              University, I bring a strong technical foundation and a
              results-driven mindset to every project I undertake.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
              I have hands-on expertise across the full stack, excelling in both
              front-end and back-end development. My skill set includes working
              with frameworks like Spring and React, and modern JavaScript
              libraries such as Redux and Node.js. I am also proficient in
              containerization with Docker and Kubernetes, and I leverage cloud
              platforms like AWS and GCP to deliver scalable solutions.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
              In my professional journey, I’ve had the privilege of working at
              IBM, where I enhanced applications for UPS, implemented secure
              APIs, and optimized performance to handle large-scale real-world
              operations. My projects include AirChat, a real-time chat
              application, and SlitURL, a URL shortener service—both showcasing
              my ability to craft efficient and user-centric solutions.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
              With strong database management skills, including expertise in
              MongoDB, PostgreSQL, and MySQL, I ensure data integrity and system
              reliability. I thrive on solving complex challenges, creating
              meaningful software solutions, and delivering high-quality
              results.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
              Let’s connect and build the future of technology together!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
