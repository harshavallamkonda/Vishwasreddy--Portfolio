import React, { useEffect } from 'react';
import './ContactMe.css';
import profilePic from '../images/Reddy.jpeg';
import { FaEnvelope, FaPhoneAlt, FaCoffee, FaLinkedin } from 'react-icons/fa';

// Static contact data
const contactData = {
  name: "Sai Vishwas Reddy Badinehal",
  title: "Project Manager – Residential & Infrastructure", 
  summary: "With extensive experience in real estate development, project management, and infrastructure planning across residential communities.",
  companyUniversity: "Sitrus Projects",
  linkedinLink: "https://www.linkedin.com/in/sai-vishwas-reddy-badinehal-375611376?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BU1gQ8WlgSM2il3Z53GSkcA%3D%3D",
  email: "saivishwasreddybadinehal@gmail.com",
  phoneNumber: "+1 (747) 206-6193"
};

const ContactMe: React.FC = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contact-container">
      <div className="linkedin-badge-custom">
        <img src={profilePic} alt={contactData.name} className="badge-avatar" />
        <div className="badge-content">
          <h3 className="badge-name">{contactData.name}</h3>
          <p className="badge-title">{contactData.title}</p>
          <p className="badge-description">
            {contactData.summary}
          </p>
          <p className="badge-company">{contactData.companyUniversity}</p>
          <a
            href={contactData.linkedinLink}
            target="_blank"
            rel="noopener noreferrer"
            className="badge-link"
          >
            <FaLinkedin className="linkedin-icon" /> View Profile
          </a>
        </div>
      </div>
      <div className="contact-header">
        <p>I'm always up for a chat or a coffee! Feel free to reach out.</p>
      </div>
      <div className="contact-details">
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <a href={`mailto:${contactData.email}`} className="contact-link">
            {contactData.email}
          </a>
        </div>
        <div className="contact-item">
          <FaPhoneAlt className="contact-icon" />
          <a href={`tel:${contactData.phoneNumber}`} className="contact-link">
            {contactData.phoneNumber}
          </a>
        </div>
        <div className="contact-fun">
          <p>Or catch up over a coffee ☕</p>
          <FaCoffee className="coffee-icon" />
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
