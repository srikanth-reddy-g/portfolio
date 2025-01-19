import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface SkillCategory {
  title: string;
  skills: string[];
  icons: Record<string, string>;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: ["Java", "JavaScript", "TypeScript", "Python", "C", "SQL"],
    icons: {
      Java: "/icons/java.svg",
      JavaScript: "/icons/javascript.svg",
      TypeScript: "/icons/typescript.svg",
      Python: "/icons/python.svg",
      C: "/icons/c.svg",
      SQL: "/icons/sql.svg",
    },
  },
  {
    title: "Frontend Technologies",
    skills: ["HTML5", "CSS3", "React"],
    icons: {
      HTML5: "/icons/html5.svg",
      CSS3: "/icons/css3.svg",
      React: "/icons/react.svg",
    },
  },
  {
    title: "Backend & Databases",
    skills: ["Spring Framework", "Node.js", "MySQL", "MongoDB"],
    icons: {
      "Spring Framework": "/icons/spring.svg",
      "Node.js": "/icons/nodejs.svg",
      MySQL: "/icons/mysql.svg",
      MongoDB: "/icons/mongodb.svg",
    },
  },
  {
    title: "Tools",
    skills: [
      "Kubernetes",
      "Docker",
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "AWS",
      "GCP",
    ],
    icons: {
      Kubernetes: "/icons/kubernetes.svg",
      Docker: "/icons/docker.svg",
      Git: "/icons/git.svg",
      GitHub: "/icons/github.svg",
      "VS Code": "/icons/vscode.svg",
      Postman: "/icons/postman.svg",
      AWS: "/icons/aws.svg",
      GCP: "/icons/gcp.svg",
    },
  },
];

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-6">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl md:text-4xl font-bold text-center mb-12 dark:text-white"
        >
          Technical Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: categoryIndex * 0.1,
                type: "spring",
                stiffness: 300,
              }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center space-x-2 text-gray-600 dark:text-gray-300"
                  >
                    <img
                      src={category.icons[skill]}
                      alt={skill}
                      className="w-10 h-10-"
                    />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
