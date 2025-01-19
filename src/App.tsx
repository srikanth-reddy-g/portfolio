import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ExperienceTimeline from "./components/ExperienceTimeline";
import EducationTimeline from "./components/EducationTimeline";
import Footer from "./components/Footer";

const experienceItems = [
  {
    title: "Graduate Student Assistant",
    organization: "Binghamton University",
    date: "August 2023 - May 2024",
    description:
      "Assisted professor in research projects, conducting lab sessions, and mentoring graduate students.",
    icon: "/BinghamtonU.png",
  },
  {
    title: "Software Engineer",
    organization: "IBM",
    date: "August 2021 - January 2023",
    description:
      "Enhanced applications for UPS, implemented secure APIs, and optimized performance to handle large-scale real-world operations.",
    icon: "/icons/ibm-light.svg",
  },
];

const educationItems = [
  {
    title: "Master of Science in Computer Science",
    organization: "Binghamton University, Sate University of New York",
    date: "2023 - 2024",
    description: "Specializing in Software Engineering and Web Technologies.",
    icon: "/binghamton.png",
  },
  {
    title: "Bachelor of Technology in Electrical And Electronics Engineering",
    organization: "CVR College Of Engineering",
    date: "2016 - 2020",
    description: "",
    icon: "/cvr.png",
  },
];

function App() {
  return (
    <div className="bg-gray-50 overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Skills />
      <ExperienceTimeline items={experienceItems} />
      <EducationTimeline items={educationItems} />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
