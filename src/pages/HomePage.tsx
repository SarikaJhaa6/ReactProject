import { Container, Button, Row, Col, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState , useEffect } from "react";
import "./HomePage.css"; // Import the CSS file for custom styles
import imageUrl1 from "../images/community.jpg";
import imageUrl2 from "../images/community2.jpeg";
import imageUrl3 from "../images/community3.jpg";
import imageUrl4 from "../images/community4.jpg";
import imageUrl5 from "../images/community5.jpg";
import image1 from "../images/card1.avif";
import image2 from "../images/cardtwo.jpg";
import image3 from "../images/card3.jpg";
import user1 from "../images/user1.jpg";
import user2 from "../images/user2.jpg";
import user3 from "../images/user3.jpg";
import user4 from "../images/user4.jpg";
import user5 from "../images/user5.jpg";
import recent1 from "../images/interfaithImage.jpg";
import recent2 from "../images/communityService.jpg";
import recent3 from "../images/CulturalMusic.jpg";
import recent4 from "../images/YouthWorkshop.jpg";
import testimonial1 from "../images/testimonial1.jpg";
import testimonial2 from "../images/testimonial2.avif";
import testimonial3 from "../images/testimonial3.avif";
import testimonial4 from "../images/testimonial4.jpg";
import testimonial5 from "../images/testimonial5.jpg";
import testimonial6 from "../images/testimonial6.jpg";
import testimonial7 from "../images/testimonial7.jpg";
import testimonial8 from "../images/testimonial8.jpg";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const HomePage = () => {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  // Detect window resize to change id dynamically
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Mobile if width <= 768px
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, []);

  // Automatically slide to the next slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % 4); // Loops through 4 images
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  const testimonials = [
    {
      name: "Doug Arnold",
      role: "Entrepreneur",
      image: testimonial1,
      quote:
        "Through collaboration with this agency, I have been able to take my business to the next level and maximize the ROI."
    },
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      image: testimonial2,
      quote:
        "Working with this team has been a game changer for our brand visibility!"
    },
    {
      name: "James Lee",
      role: "Software Engineer",
      image: testimonial3,
      quote:
        "An innovative and reliable agency that truly understands our needs."
    },
    {
      name: "Emily Rose",
      role: "Freelancer",
      image: testimonial4,
      quote:
        "A wonderful community that truly brings people together!"
    },
    {
      name: "Michael Smith",
      role: "Business Owner",
      image: testimonial5,
      quote:
        "Professional, creative, and results-driven—highly recommend!"
    },
    {
      name: "Jessica Brown",
      role: "Content Creator",
      image: testimonial6,
      quote:
        "Their expertise helped me scale my online presence exponentially."
    },
    {
      name: "Robert Wilson",
      role: "Investor",
      image: testimonial7,
      quote:
        "A trusted partner that consistently delivers outstanding results."
    },
    {
      name: "Olivia Martinez",
      role: "CEO, Startup X",
      image: testimonial8,
      quote:
        "Innovative solutions and a great team to work with—highly recommended!"
    }
  ];
  const events = [
    {
      title: "Discover Events",
      text: "Find events that align with your interests and beliefs.",
      image: image1,
    },
    {
      title: "Connect & Engage",
      text: "Meet new people, share ideas, and grow together.",
      image: image2,
    },
    {
      title: "Create Your Own",
      text: "Host events that bring communities closer.",
      image: image3,
    },
  ];
  // Recent Events Data
const recentEvents = [
  {
    title: "Interfaith Dialogue",
    text: "An enlightening conversation focused on fostering understanding, promoting unity, and building bridges between different faiths.",
    image: recent1,
  },
  {
    title: "Community Service Day",
    text: "A day dedicated to serving the local community, fostering connections, and making a lasting impact.",
    image: recent2,
  },
  {
    title: "Cultural Music Festival",
    text: "An exhilarating evening celebrating diverse cultures through vibrant music, dance, and traditions.",
    image: recent3,
  },
  {
    title: "Youth Leadership Workshop",
    text: "Inspiring young minds with the skills, knowledge, and confidence to become future community leaders.",
    image: recent4,
  },
];

  return (
    <>
    <Container
      className="mt-5"
      id={isMobile ? "mobileSection" : "firstSection"} // Dynamic id
    >
      <Row className="align-items-center text-center text-md-start">
        {/* Left Text Section */}
        <Col md={6} className="mb-4 mb-md-0">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="display-5 fw-bold gradient-text"
          >
            Where Faiths Unite, and Communities Thrive
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="lead text-muted"
          >
            Communion is a vibrant space where people of all faiths and interests come together.
            Explore meaningful events, connect with like-minded individuals, and become part of
            something bigger.
          </motion.p>
          <div className="d-flex justify-content-center justify-content-md-start">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 8px 15px rgba(0, 123, 255, 0.3)",
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="btn btn-primary btn-lg"
              onClick={() => (window.location.href = "/events")}
            >
              Explore Events
            </motion.button>
          </div>
        </Col>

        {/* Slideshow Section */}
        <Col md={6} className="text-center">
          <Carousel
            activeIndex={index}
            onSelect={setIndex}
            interval={null} // Disable Bootstrap's auto-slide, we handle it manually
            fade
            indicators
            controls={false}
          >
            {/* Carousel Items with Dynamic Class */}
            <Carousel.Item>
              <motion.img
                src={imageUrl1}
                alt="Community Event 1"
                className={`carousel-image img-fluid rounded shadow ${
                  isMobile ? "mobile-carousel-img" : "desktop-carousel-img"
                }`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
            </Carousel.Item>

            <Carousel.Item>
              <motion.img
                src={imageUrl2}
                alt="Community Event 2"
                className={`carousel-image img-fluid rounded shadow ${
                  isMobile ? "mobile-carousel-img" : "desktop-carousel-img"
                }`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
            </Carousel.Item>

            <Carousel.Item>
              <motion.img
                src={imageUrl3}
                alt="Community Event 3"
                className={`carousel-image img-fluid rounded shadow ${
                  isMobile ? "mobile-carousel-img" : "desktop-carousel-img"
                }`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
            </Carousel.Item>

            <Carousel.Item>
              <motion.img
                src={imageUrl4}
                alt="Community Event 4"
                className={`carousel-image img-fluid rounded shadow ${
                  isMobile ? "mobile-carousel-img" : "desktop-carousel-img"
                }`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <motion.img
                src={imageUrl5}
                alt="Community Event 4"
                className={`carousel-image img-fluid rounded shadow ${
                  isMobile ? "mobile-carousel-img" : "desktop-carousel-img"
                }`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>

    <div className="section-wrapper py-5">
      <Container className="text-center">
        {/* Section Title */}
        <motion.h2
          className="fw-bold mb-3 features-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Engage with a Community That Inspires You
        </motion.h2>
        <p className="text-muted mb-4 features-subtext">
          Discover, connect, and create unforgettable experiences with like-minded individuals.
        </p>

        {/* Event Cards Section */}
        <Row className="g-4"> {/* Add gap between rows */}
          {events.map((item, index) => (
            <Col xs={12} sm={6} md={4} key={index} className="d-flex">
              <motion.div
                className={`p-4 bg-white shadow-lg rounded-3 ${
                  isMobile ? "mobile-card" : "desktop-card"
                } d-flex flex-column align-items-center w-100`}
                whileHover={
                  isMobile
                    ? { scale: 1.02, boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }
                    : { scale: 1.05, boxShadow: "0px 8px 20px rgba(0, 123, 255, 0.3)" }
                }
                transition={{ duration: 0.3 }}
              >
                {/* Event Image */}
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="mb-3 w-100 rounded"
                  style={{
                    height: isMobile ? "150px" : "200px",
                    objectFit: "cover",
                  }}
                  // whileHover={{ scale: isMobile ? 1.05 : 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                {/* Event Title */}
                <h3 className="fw-bold text-center">{item.title}</h3>
                {/* Event Description */}
                <p className="text-muted text-center">{item.text}</p>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>

    <Container className="mt-5">
    <div className="d-flex justify-content-between align-items-center mb-4">
  <Row className="w-100">
    {/* Left Section - 60% */}
    <Col md={7} className="d-flex flex-column">
  <h1 className="fw-bold">Uniting Communities Through</h1>
  <h2
    className="fw-bold animated-gradient"
    style={{
      fontWeight: "bold",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
      fontSize: "2.5rem",
      display: "inline-flex",
      alignItems: "center",
    }}
  >
    <span
      style={{
        background: "linear-gradient(90deg, #007bff, #00c6ff)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        animation: "blink 1s infinite",
        marginRight: "8px",
      }}
    >
      ✨
        </span>
        Inspiring Events
      </h2>
      <p className="text-muted">
        At Communion, we're committed to organizing events that foster connections, inspire personal and professional growth,
        and bring people together to share meaningful experiences. From workshops to conferences, every event is designed to leave a lasting impact on our attendees.
      </p>
    </Col>


    {/* Right Section - 40% */}
    <Col md={5} className="text-end">
      <div className="d-flex align-items-center mb-3 justify-content-end">
        <div className="avatar-group">
          <img src={user1} alt="User 1" className="avatar" />
          <img src={user2} alt="User 2" className="avatar" />
          <img src={user3} alt="User 3" className="avatar" />
          <img src={user4} alt="User 4" className="avatar" />
          <img src={user5} alt="User 5" className="avatar" />
        </div>
      </div>
      <p className="fw-bold text-black ms-2 mb-0">Trusted by Over <br /> <span
      style={{
        background: "linear-gradient(90deg, #007bff, #00c6ff)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        marginRight: "8px",
      }}
    >15k+</span>Individuals Worldwide</p>
      <Button
  variant="light"
  className="fw-bold px-4 py-2 mt-4"
  style={{
    background: "linear-gradient(to bottom, rgb(63, 142, 252), rgb(0 66 163))",
    color: "#fff",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1), 0 8px 12px rgba(63, 142, 252, 0.3)",
    border: "none",
    borderRadius: "12px",
    transform: "translateY(-2px)",
    transition: "all 0.2s ease-in-out",
  }}
  onClick={() => (window.location.href = "/events")}

  onMouseOver={(e) => {
    const target = e.currentTarget as HTMLButtonElement;
    target.style.transform = "translateY(-5px)";
    target.style.boxShadow =
      "0 6px 8px rgba(0, 0, 0, 0.1), 0 12px 18px rgba(63, 142, 252, 0.4)";
  }}
  onMouseOut={(e) => {
    const target = e.currentTarget as HTMLButtonElement;
    target.style.transform = "translateY(-2px)";
    target.style.boxShadow =
      "0 4px 6px rgba(0, 0, 0, 0.1), 0 8px 12px rgba(63, 142, 252, 0.3)";
  }}
>
  Explore Events →
</Button>

    </Col>
  </Row>
</div>

      <Row>
        {recentEvents.map((event, index) => (
          <Col xs={12} sm={6} md={3} className="mb-4" key={index}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="card shadow-sm rounded-3 overflow-hidden border border-dark border-opacity-25"
              style={{ minHeight: "420px", borderRadius: "12px", borderWidth: "2px" }}
            >
              <img
                src={event.image}
                alt={event.title}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column justify-content-between" style={{ height: "150px" }}>
                <h4 className="fw-bold">{event.title}</h4>
                <p className="text-muted">{event.text}</p>
              </div>
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>
    <div className="section-wrapper py-5">
  <Container className="mt-5 text-center">
    <div className="testimonial-container">
      <h2 className="testimonial-title">Hear From Our Community</h2>
      <p className="testimonial-subtitle"> Explore heartfelt stories and experiences shared by those who’ve connected through our platform.</p>
      {/* Testimonial Content */}
      <div className="testimonial-content">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="testimonial-card"
        >
          <div className="testimonial-layout">
            {/* Image with Background Pattern */}
            <div className="testimonial-image-wrapper">
              <div className="testimonial-background-circle" />
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="testimonial-image"
              />
            </div>

            {/* Text Section */}
            <div className="testimonial-text-section">
              <p className="testimonial-quote">
                "{testimonials[currentIndex].quote}"
              </p>
              <strong className="testimonial-name">
                {testimonials[currentIndex].name}
              </strong>
              <span className="testimonial-role">
                {testimonials[currentIndex].role}
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Navigation Buttons */}
      <button onClick={prevSlide} className="testimonial-nav left">
        <FaChevronLeft size={20} />
      </button>
      <button onClick={nextSlide} className="testimonial-nav right">
        <FaChevronRight size={20} />
      </button>

      {/* Indicators */}
      <div className="testimonial-indicators">
        {testimonials.map((_, index) => (
          <div
            key={index}
            className={`indicator ${currentIndex === index ? "active" : ""}`}
          />
        ))}
      </div>
    </div>
  </Container>
</div>



    </>
  );
};

export default HomePage;
