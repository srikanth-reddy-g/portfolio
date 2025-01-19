import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-2">
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-sm"
          >
            © {currentYear} Srikanth. All rights reserved.
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center space-x-1 text-sm"
          >
            <span>Made with</span>
            <Heart
              className="w-5 h-5 text-red-500 animate-pulse"
              fill="currentColor"
            />
            <span>
              by <b>Srikanth Reddy</b>
            </span>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
}
