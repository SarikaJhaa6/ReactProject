import React, { useState } from "react";
import { motion } from "framer-motion";
import "../styles/AboutUsPage.css";
import {
  FaGlobe,
  FaPuzzlePiece,
  FaLink,
  FaBook,
  FaStarOfLife,
  FaHandsHelping,
  FaLightbulb,
  FaSeedling,
  FaHeart,
  FaQuestionCircle,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

const AboutUsPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="aboutus-container">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="hero-section text-center"
      >
        <h1 className="aboutus-title gradient-text">
          Empowering Communities, Celebrating Diversity
        </h1>
        <p className="aboutus-subtitle">
          Our mission is to unite people of different faiths and cultures to
          foster understanding, compassion, and growth.
        </p>
      </motion.div>

      {/* What Makes Us Different */}
      <div className="difference-section">
        <h2 className="text-center">
          <FaStarOfLife className="star-icon" size={30} color="#F1CD00FF" />{" "}
          What Makes Us Different
        </h2>
        <div className="difference-container mt-4">
          {differenceData.map((item, index) => (
            <motion.div
              key={index}
              className="difference-card"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="icon-circle">{item.icon}</div>
              <h5>{item.title}</h5>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="stats-section">
        <div className="stats-container">
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-card"
              whileHover={{ scale: 1.1 }}
            >
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Values Section */}
      <div className="values-section">
        <h2 className="text-center">✨ Our Core Values</h2>
        <div className="values-container">
          {valuesData.map((value, index) => (
            <motion.div
              key={index}
              className="value-card"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="icon-circle">{value.icon}</div>
              <h5>{value.title}</h5>
              <p>{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="faq-section">
        <h2 className="text-center">
          <FaQuestionCircle size={28} color="#0d6efd" /> Frequently Asked
          Questions
        </h2>
        <div className="faq-container">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              className="faq-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <h5>{faq.question}</h5>
                {openIndex === index ? (
                  <FaChevronUp className="faq-icon" />
                ) : (
                  <FaChevronDown className="faq-icon" />
                )}
              </div>
              {openIndex === index && (
                <motion.div
                  className="faq-answer"
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                >
                  <p>{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>


    </div>
  );
};

const differenceData = [
  {
    icon: <FaGlobe size={40} color="#0d6efd" />,
    title: "Global Outreach",
    description: "Impacting communities worldwide by fostering unity.",
  },
  {
    icon: <FaPuzzlePiece size={40} color="#dc3545" />,
    title: "Diverse Initiatives",
    description: "Bringing together different cultures through events.",
  },
  {
    icon: <FaLink size={40} color="#28a745" />,
    title: "Meaningful Connections",
    description: "Creating lasting relationships beyond boundaries.",
  },
  {
    icon: <FaBook size={40} color="#ffc107" />,
    title: "Education & Awareness",
    description: "Promoting knowledge, empathy, and inclusivity.",
  },
];

// Data for 'Our Impact Stats'
const statsData = [
  {
    value: "500+",
    label: "Events Organized",
  },
  {
    value: "10K+",
    label: "Attendees Engaged",
  },
  {
    value: "100+",
    label: "Communities Reached",
  },
  {
    value: "25+",
    label: "Collaborations Formed",
  },
];

// Data for 'Our Core Values'
const valuesData = [
  {
    icon: <FaHandsHelping size={40} color="#0d6efd" />,
    title: "Inclusivity",
    description:
      "Embracing and respecting diverse cultures, perspectives, and traditions.",
  },
  {
    icon: <FaLightbulb size={40} color="#ffc107" />,
    title: "Innovation",
    description:
      "Continuously finding new ways to engage and inspire meaningful connections.",
  },
  {
    icon: <FaSeedling size={40} color="#28a745" />,
    title: "Growth",
    description:
      "Empowering individuals to learn, collaborate, and make a positive impact.",
  },
  {
    icon: <FaHeart size={40} color="#dc3545" />,
    title: "Compassion",
    description:
      "Promoting empathy and understanding in every interaction and initiative.",
  },
];

// FAQ Data
const faqData = [
  {
    question: "How can I get involved with CommunionHub?",
    answer:
      "You can get involved by attending events, volunteering, collaborating, or becoming a community ambassador.",
  },
  {
    question: "Are events open to all faiths and communities?",
    answer:
      "Yes! Our events are open to people of all faiths, cultures, and communities, encouraging inclusivity.",
  },
  {
    question: "Do I need prior experience to volunteer?",
    answer:
      "No prior experience is required. We welcome volunteers with diverse skill sets and a passion for community building.",
  },
  {
    question: "How can I donate or support your mission?",
    answer:
      "You can donate through our website or contact us for partnership and sponsorship opportunities.",
  },
];

export default AboutUsPage;
