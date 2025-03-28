import React, { useState, useCallback, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { TextField, MenuItem } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faPlusCircle, faTimes } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/EventsPage.css"; 
import LoadingSpinner from './LoadingSpinner';
import event4 from "../images/event4.jpg";
import event6 from "../images/event6.jpg";
import event7 from "../images/event7.jpg";
import event8 from "../images/event8.jpg";
import event9 from "../images/event9.jpg";
import event10 from "../images/event10.jpg";
import event12 from "../images/event12.jpg";
import event13 from "../images/event13.jpg";
import event15 from "../images/event15.jpg";
import event16 from "../images/event16.jpg";
import event19 from "../images/event19.jpg";
import event21 from "../images/event21.jpg";

// Define the Event type
interface Event {
  title: string;
  description: string;
  image: string;
  date: string;
  category: string;
  location: string;
}

// Define the props for EventCard
interface EventCardProps {
  event: Event;
}
const eventsData: Event[] = [
  {
    title: "Gandhi Jayanti Volunteer Drive",
    description: "Spreading peace and kindness through community service and charitable acts.",
    image: event4,
    date: "2025-10-02",
    category: "Charity",
    location: "Seattle",
  },
  {
    title: "Navratri Dandiya Night",
    description: "An electrifying evening of garba and dandiya celebrating Navratri.",
    image: event7,
    date: "2025-10-10",
    category: "Religious",
    location: "Atlanta",
  },
  {
    title: "Durga Puja Celebrations",
    description: "Honoring Goddess Durga with devotion, cultural performances, and community festivities.",
    image: event15,
    date: "2025-10-01",
    category: "Religious",
    location: "New Jersey",
  },
  {
    title: "Karva Chauth Mehendi Night",
    description: "An elegant night of mehendi, music, and celebration for Karva Chauth.",
    image: event16,
    date: "2025-10-22",
    category: "Religious",
    location: "Dallas",
  },
  {
    title: "Krishna Janmashtami Celebration",
    description: "Celebrating the birth of Lord Krishna with devotional songs and rituals.",
    image: event9,
    date: "2025-08-18",
    category: "Religious",
    location: "Orlando",
  },
  {
    title: "Sufi Music Night",
    description: "An enchanting evening of soulful Sufi melodies bridging cultural divides.",
    image: event6,
    date: "2025-06-22",
    category: "Social",
    location: "Los Angeles",
  },
  {
    title: "Fusion Food Festival",
    description: "Exploring diverse flavors blending Indian and Western culinary traditions.",
    image: event12,
    date: "2025-07-22",
    category: "Social",
    location: "Miami",
  },
  {
    title: "Annual Blood Donation Camp",
    description: "Giving the gift of life through collective blood donation efforts.",
    image: event8,
    date: "2025-06-15",
    category: "Charity",
    location: "Detroit",
  },
  {
    title: "Fundraiser for Rural Education",
    description: "An initiative to raise funds and awareness for better education in rural areas.",
    image: event10,
    date: "2025-09-25",
    category: "Charity",
    location: "Dallas",
  },
  {
    title: "Indo-American Fusion Gala",
    description: "An elegant evening celebrating the convergence of Indian and American cultures.",
    image: event19,
    date: "2025-09-30",
    category: "Social",
    location: "Washington D.C.",
  },
  {
    title: "Christmas Charity Drive",
    description: "Spreading holiday cheer through donations and kindness.",
    image: event13,
    date: "2025-12-20",
    category: "Charity",
    location: "Boston",
  },
  {
    title: "Cultural Storytelling Night",
    description: "Bringing communities together through storytelling of Indian folklore and Western tales.",
    image: event21,
    date: "2025-05-25",
    category: "Social",
    location: "Seattle",
  },
];

const categories = ["Religious", "Social", "Charity"];
const EventCard: React.FC<EventCardProps> = React.memo(({ event }) => (
  <motion.div
    className="col-lg-4 col-md-6 col-sm-12 mb-4 fade-in"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 20 }}
    transition={{ duration: 0.5 }}
  >
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
  </motion.div>
));

const EventsPage: React.FC = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [newEvent, setNewEvent] = useState<Event>({
    title: "",
    date: "",
    category: "",
    location: "",
    description: "",
    image: "",
  });
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [visibleEventsCount, setVisibleEventsCount] = useState(6);
  const [loadingMore, setLoadingMore] = useState(false);

  const handleFilter = useCallback((category: string) => {
    setSelectedCategories((prevCategories) =>
      prevCategories.includes(category)
        ? prevCategories.filter((c) => c !== category)
        : [...prevCategories, category]
    );
  }, []);

  const handleModalClose = useCallback(() => {
    setShowModal(false);
    resetForm();
  }, []);

  const handleModalOpen = useCallback(() => setShowModal(true), []);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewEvent((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleImageUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
        setNewEvent((prev) => ({ ...prev, image: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
        setNewEvent((prev) => ({ ...prev, image: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  }, []);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (
      newEvent.title &&
      newEvent.date &&
      newEvent.category &&
      newEvent.location &&
      newEvent.description
    ) {
      eventsData.unshift(newEvent);
      handleModalClose();
    }
  }, [newEvent, handleModalClose]);

  const resetForm = useCallback(() => {
    setNewEvent({
      title: "",
      date: "",
      category: "",
      location: "",
      description: "",
      image: "",
    });
    setPreviewImage(null);
  }, []);

  const filteredEvents = selectedCategories.length > 0
    ? eventsData.filter((event) => selectedCategories.includes(event.category))
    : eventsData;

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleShowMore = () => {
    setLoadingMore(true);
    setTimeout(() => {
      setVisibleEventsCount((prevCount) => prevCount + 6);
      setLoadingMore(false);
    }, 500);
  };

  const handleShowLess = () => {
    setVisibleEventsCount(6);
  };

  return (
    <div className="events-container text-center">
      {loading && <LoadingSpinner />}

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
            onClick={(e) => {
              e.stopPropagation(); // Prevent parent button click
              handleFilter(category); // Deselect category
            }}
          >
            {category}
            {selectedCategories.includes(category) && (
              <FontAwesomeIcon icon={faTimes} className="ms-2"  onClick={(e) => {
                e.stopPropagation(); // Prevent parent button click
                handleFilter(category); // Deselect category
              }} />
            )}
          </button>
        ))}
      </div>

      <div className="container mt-4">
        <div className="row">
          {filteredEvents.slice(0, visibleEventsCount).map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </div>
        {filteredEvents.length === 0 && (
          <p className="no-events">No events match your selected filters.</p>
        )}
      </div>

      {filteredEvents.length > 6 && !selectedCategories.length && (
        <div className="mt-4">
          {visibleEventsCount < filteredEvents.length ? (
            <Button onClick={handleShowMore} className="btn btn-primary">
              {loadingMore ? <LoadingSpinner /> : "Show More"}
            </Button>
          ) : (
            <Button onClick={handleShowLess} className="btn btn-secondary">
              Show Less
            </Button>
          )}
        </div>
      )}

      <Modal show={showModal} onHide={handleModalClose} centered backdropClassName="dark-overlay">
        <div
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
              }}
              onClick={() => document.getElementById("file-upload")?.click()}
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleDrop}
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
              }}
            >
              🚀 Add Event
            </Button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default EventsPage;