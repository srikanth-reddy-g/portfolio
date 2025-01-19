import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { School } from "lucide-react";

interface Education {
  title: string;
  organization: string;
  date: string;
  description: string;
  icon?: string;
}

interface Props {
  items: Education[];
}

const EducationTimeline: React.FC<Props> = ({ items }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="education"
      className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-6">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl md:text-4xl font-bold text-center mb-12 dark:text-white"
        >
          Education
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gray-200 dark:bg-gray-700" />

          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className={`mb-12 flex flex-col md:flex-row md:justify-between items-start md:items-center w-full ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="hidden md:block md:w-5/12" />

              {/* Timeline icon container */}
              <div className="absolute left-0 md:relative md:left-auto flex pl-0 md:w-2/12 md:justify-center z-10">
                <div className="absolute left-4 -translate-x-1/2 md:static md:transform-none w-8 h-8 md:w-10 md:h-10 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center">
                  <School className="w-4 h-4 md:w-5 md:h-5 text-white" />
                </div>
              </div>

              {/* Content container */}
              <div className="pl-12 md:pl-0 w-full md:w-5/12">
                <motion.div
                  className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex justify-between items-start gap-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {item.title}
                      </h3>
                      <h4 className="text-lg text-blue-600 dark:text-blue-400">
                        {item.organization}
                      </h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {item.date}
                      </p>
                    </div>

                    {/* Organization Icon - if provided */}
                    {item.icon && (
                      <img
                        src={item.icon}
                        alt={`${item.organization} logo`}
                        className="w-16 h-16 md:w-24 md:h-24 object-contain rounded-lg flex-shrink-0"
                      />
                    )}
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mt-4">
                    {item.description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationTimeline;
