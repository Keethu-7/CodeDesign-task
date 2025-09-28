import React, { useState } from "react";
import "./CodeExport.css";

function CodeExport({ onClose }) {
  const [selectedTab, setSelectedTab] = useState("next");

  return (
    <div className="overlay">
      <div className="modal">
        {/* Header */}
        <div className="modal-header">
          <h3>Code Export</h3>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>

        {/* Subtitle */}
        <p className="subtitle">
          Manage how you download your website’s code.
        </p>

        {/* Tabs */}
        <div className="tabs">
          <button
            className={selectedTab === "html" ? "tab active" : "tab"}
            onClick={() => setSelectedTab("html")}
          >
            HTML & CSS
          </button>
          <button
            className={selectedTab === "next" ? "tab active" : "tab"}
            onClick={() => setSelectedTab("next")}
          >
            Next JS
          </button>
        </div>

        {/* Content */}
        {selectedTab === "next" && (
          <div className="content">
            <div className="export-header">
              <span>Export as Next JS Project</span>
              <span className="badge">Zipped</span>
            </div>

            <label className="checkbox">
              <input type="checkbox" defaultChecked />
              Use ‘app’ directory (NextJS v13+)
            </label>

            <label className="checkbox">
              <input type="checkbox" defaultChecked />
              Include assets locally (images, styles, fonts, etc.)
            </label>

            <label className="checkbox">
              <input type="checkbox" defaultChecked />
              Include custom code
            </label>

            <button className="download-btn">
              Download Next JS Project
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default CodeExport;
