import React from "react";
import "./DeveloperFooter.css";

const DeveloperFooter = () => {
  return (
    <div className="developer-footer">
      <div className="developer-info">
        <h3>🪟 Developed By</h3>
        <div className="developer-card">
          <div className="developer-name">Abbas Taherbhai Vakhariya</div>
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-icon">📱</span> <span>+91 8799668397</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">✉️</span>{" "}
              <span>abbasvakhariya00@gmail.com</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📍</span> <span>Rajkot, Gujarat</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperFooter;