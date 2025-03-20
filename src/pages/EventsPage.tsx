import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { TextField, MenuItem } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/EventsPage.css";
import event1 from "../images/interfaithImage.jpg";
import event3 from "../images/CulturalMusic.jpg";
import event8 from "../images/EidCelebration.jpg";
import event9 from "../images/CommunityCleanUp.jpg";
import event13 from "../images/DiwaliFestival.jpg";
import event19 from "../images/womenEmpowerment.jpg";
import { faPlusCircle} from "@fortawesome/free-solid-svg-icons";

const eventsData = [
  {
    title: "Interfaith Dialogue",
    description:
      "An enlightening conversation focused on fostering understanding, promoting unity, and building bridges between different faiths.",
    image: event1,
    date: "2025-04-06",
    category: "Religious",
    location: "Los Angeles",
  },
  {
    title: "Cultural Music Festival",
    description:
      "An exhilarating evening celebrating diverse cultures through vibrant music, dance, and traditions.",
    image: event3,
    date: "2025-04-10",
    category: "Social",
    location: "Los Angeles",
  },
  {
    title: "Eid Celebration",
    date: "2025-04-21",
    category: "Religious",
    location: "Houston",
    description: "Celebrating the festival with joy and love.",
    image: event8,
  },
  {
    title: "Community Clean-Up",
    date: "2025-05-05",
    category: "Charity",
    location: "Philadelphia",
    description: "Cleaning and restoring public spaces.",
    image: event9,
  },
  {
    title: "Diwali Festival",
    date: "2025-11-10",
    category: "Religious",
    location: "San Francisco",
    description: "Celebrating the festival of lights.",
    image: event13,
  },
  {
    title: "Women's Empowerment Panel",
    date: "2025-08-20",
    category: "Social",
    location: "Washington D.C.",
    description: "Empowering women to lead and inspire change.",
    image: event19,
  },
];

const categories = ["Religious", "Social", "Charity"];

const EventsPage: React.FC = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: "",
    date: "",
    category: "",
    location: "",
    description: "",
    image: "",
  });
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const handleFilter = (category: string) => {
    setSelectedCategories((prevCategories) =>
      prevCategories.includes(category)
        ? prevCategories.filter((c) => c !== category)
        : [...prevCategories, category]
    );
  };

  const handleModalClose = () => {
    setShowModal(false);
    resetForm();
  };

  const handleModalOpen = () => setShowModal(true);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
        setNewEvent({ ...newEvent, image: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
        setNewEvent({ ...newEvent, image: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      newEvent.title &&
      newEvent.date &&
      newEvent.category &&
      newEvent.location &&
      newEvent.description
    ) {
      // Add the uploaded image to newEvent if available
      if (previewImage) {
        newEvent.image = previewImage;
      }
  
      // Add the new event as the first element
      eventsData.unshift(newEvent);
      handleModalClose();
    }
  };
  

  const resetForm = () => {
    setNewEvent({
      title: "",
      date: "",
      category: "",
      location: "",
      description: "",
      image: "",
    });
    setPreviewImage(null);
  };

  const filteredEvents =
    selectedCategories.length > 0
      ? eventsData.filter((event) => selectedCategories.includes(event.category))
      : eventsData;

  return (
    <div className="events-container text-center">
      <div className="text-center mb-4">
        <h1 className="fw-bold text-primary cascade-text" style={{
          fontSize: "2rem",
          background: "linear-gradient(135deg, #1E90FF, #00BFFF)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
          display: "inline-block",
        }}>
          Fostering Growth Through Meaningful Engagement
        </h1>
        <h4 className="text-secondary" style={{ fontSize: "1.4rem" }}>
          🔔 Explore Our Upcoming Events
        </h4>
      </div>


      <button className="btn btn-primary ms-3 btn-3d-gradient" onClick={handleModalOpen}>
      <FontAwesomeIcon icon={faPlusCircle} className="me-2" />
          Add New Event

        </button>
      <div className="categories mt-3">
        {categories.map((category) => (
          <button
            key={category}
            className={`btn category-btn ${selectedCategories.includes(category) ? "active-category" : ""}`}
            onClick={() => handleFilter(category)}
          >
            {category}
          </button>
        ))}
      
      </div>

      <div className="container mt-4">
        <div className="row">
          {filteredEvents.map((event, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="card event-card">
                <img src={event.image} className="card-img-top" alt={event.title} />
                <div className="card-body">
                  <h5 className="card-title">{event.title}</h5>
                  <p className="card-text">{event.description}</p>
                  <p className="event-details">
                    📅 {new Date(event.date).toDateString()} | 📍 {event.location}
                  </p>
                  <span className={`badge category-badge ${event.category.toLowerCase()}`}>
                    {event.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        {filteredEvents.length === 0 && (
          <p className="no-events">No events match your selected filters.</p>
        )}
      </div>

      <Modal show={showModal} onHide={handleModalClose} centered backdropClassName="dark-overlay">
  <motion.div
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -50 }}
    className="modal-content-wrapper"
    style={{
      padding: "2rem",
      borderRadius: "18px",
      background: "#f8f9fa",
      width: "100%",
      maxWidth: "600px",
      boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
    }}
  >
    <div
      className="d-flex justify-content-between align-items-center mb-3"
      style={{ borderBottom: "1px solid #e5e5e5", paddingBottom: "1rem" }}
    >
      <h2 className="fw-bold mb-0" style={{ fontSize: "1.5rem" }}>Add New Event</h2>
      <button
        onClick={handleModalClose}
        className="btn-close"
        aria-label="Close"
        style={{ border: "none", fontSize: "1.2rem", cursor: "pointer" }}
      />
    </div>

    <form onSubmit={handleSubmit}>
      {/* Title and Date Fields */}
      <div className="row mb-3">
        <div className="col-md-6">
          <TextField
            fullWidth
            label="Event Title"
            name="title"
            value={newEvent.title}
            onChange={handleInputChange}
            required
            margin="normal"
            variant="outlined"
            InputProps={{
              style: {
                background: "#fff",
                borderRadius: "12px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                border: "1px solid #d1d9e6",
              },
            }}
          />
        </div>
        <div className="col-md-6">
          <TextField
            fullWidth
            type="date"
            name="date"
            value={newEvent.date}
            onChange={handleInputChange}
            required
            margin="normal"
            variant="outlined"
            InputLabelProps={{ shrink: true }}
            InputProps={{
              style: {
                background: "#fff",
                borderRadius: "12px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                border: "1px solid #d1d9e6",
              },
            }}
          />
        </div>
      </div>

      {/* Description Field */}
      <TextField
        fullWidth
        label="Description"
        name="description"
        value={newEvent.description}
        onChange={handleInputChange}
        required
        multiline
        rows={3}
        margin="normal"
        variant="outlined"
        InputProps={{
          style: {
            background: "#fff",
            borderRadius: "12px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            border: "1px solid #d1d9e6",
          },
        }}
      />

      {/* Category and Location Fields */}
      <div className="row mb-3">
        <div className="col-md-6">
          <TextField
            fullWidth
            select
            label="Category"
            name="category"
            value={newEvent.category}
            onChange={handleInputChange}
            required
            margin="normal"
            variant="outlined"
            InputProps={{
              style: {
                background: "#fff",
                borderRadius: "12px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                border: "1px solid #d1d9e6",
              },
            }}
          >
            {categories.map((cat) => (
              <MenuItem key={cat} value={cat}>
                {cat}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <div className="col-md-6">
          <TextField
            fullWidth
            label="Location"
            name="location"
            value={newEvent.location}
            onChange={handleInputChange}
            required
            margin="normal"
            variant="outlined"
            InputProps={{
              style: {
                background: "#fff",
                borderRadius: "12px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                border: "1px solid #d1d9e6",
              },
            }}
          />
        </div>
      </div>

      {/* File Upload with 3D Effect */}
      <div
        className="file-upload-container text-center mt-3"
        style={{
          border: "2px dashed #d3d3d3",
          borderRadius: "12px",
          padding: "20px",
          cursor: "pointer",
          background: "#fff",
          boxShadow: "0 6px 12px rgba(0,0,0,0.1), 0 -3px 6px rgba(0,0,0,0.05)",
          transition: "transform 0.2s ease-in-out",
        }}
        onClick={() => document.getElementById("file-upload")?.click()}
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <input id="file-upload" type="file" style={{ display: "none" }} onChange={handleImageUpload} />
        {previewImage ? (
          <img
            src={previewImage}
            alt="Preview"
            style={{
              width: "100%",
              height: "120px",
              borderRadius: "8px",
              border: "2px solid #ddd",
              objectFit: "cover",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            }}
          />
        ) : (
          <div>
            <FontAwesomeIcon icon={faImage} size="2x" className="text-muted mb-2" />
            <p className="text-muted mb-1">Drag and drop an image or click to upload.</p>
            <small className="text-muted">PNG, JPG, or GIF format, less than 2MB.</small>
          </div>
        )}
      </div>

      {/* Add Event Button with 3D and Hover Effect */}
      <Button
        variant="primary"
        type="submit"
        className="mt-4 w-100 fw-bold"
        style={{
          background: "linear-gradient(135deg, #4a90e2, #76c7ff)",
          border: "none",
          borderRadius: "12px",
          padding: "12px",
          boxShadow: "0 6px 12px rgba(0,0,0,0.1)",
          transition: "transform 0.2s ease-in-out",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-3px)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
      >
        🚀 Add Event
      </Button>
    </form>
  </motion.div>
</Modal>

    </div>
  );
};

export default EventsPage;