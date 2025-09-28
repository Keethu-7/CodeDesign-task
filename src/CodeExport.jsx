import React, { useEffect, useState } from "react";
import "./CodeExport.css";

// import local assets
import HtmlIcon from "./assets/HTML.png";
import BrandIcon from "./assets/BRAND (1).png";

export default function CodeExport({ onClose }) {
  const [selectedTab, setSelectedTab] = useState("next");

  const [options, setOptions] = useState({
    useAppDir: true,
    includeAssets: true,
    includeCustomCode: true,
  });

  useEffect(() => {
    function handleKey(e) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  function toggleOption(key) {
    setOptions((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  function handleDownload() {
    alert(
      "Downloading with options:\n" +
        JSON.stringify({ selectedTab, options }, null, 2)
    );
  }

  return (
    <div className="overlay" role="dialog" aria-modal="true">
      <div className="modal">
        {/* Header */}
        <div className="modal-header">
          <h3 className="title">Code Export</h3>
          <button className="close-btn" onClick={onClose}>
            ×
          </button>
        </div>

        {/* Subtitle */}
        <p className="subtitle">Manage how you download your website’s code.</p>

        {/* Inner box */}
        <div className="inner-box">
          <div className="tabs">
            <button
              className={`tab ${selectedTab === "html" ? "active" : ""}`}
              onClick={() => setSelectedTab("html")}
            >
              HTML &amp; CSS
            </button>
            <button
              className={`tab ${selectedTab === "next" ? "active" : ""}`}
              onClick={() => setSelectedTab("next")}
            >
              Next JS
            </button>
          </div>

          {/* Next JS Option */}
          {selectedTab === "next" ? (
            <div className="content">
              <div className="export-header">
                <div className="export-title">
                  <img src={BrandIcon} alt="NextJS" />
                  <span>Export as Next JS Project</span>
                </div>
                <span className="badge">Zipped</span>
              </div>

              <label className="checkbox">
                <input
                  type="checkbox"
                  checked={options.useAppDir}
                  onChange={() => toggleOption("useAppDir")}
                />
                Use `app` directory (NextJS v13+)
              </label>

              <label className="checkbox">
                <input
                  type="checkbox"
                  checked={options.includeAssets}
                  onChange={() => toggleOption("includeAssets")}
                />
                Include assets locally (images, styles, fonts, etc.)
              </label>

              <label className="checkbox">
                <input
                  type="checkbox"
                  checked={options.includeCustomCode}
                  onChange={() => toggleOption("includeCustomCode")}
                />
                Include custom code
              </label>
            </div>
          ) : (
            /* HTML & CSS Option */
            <div className="content">
              <div className="export-header">
                <div className="export-title">
                  <img src={HtmlIcon} alt="HTML" />
                  <span>Export as HTML &amp; CSS</span>
                </div>
                <span className="badge">Zipped</span>
              </div>

              <label className="checkbox">
                <input
                  type="checkbox"
                  checked={options.includeAssets}
                  onChange={() => toggleOption("includeAssets")}
                />
                Include assets locally (images, styles, fonts, etc.)
              </label>

              <label className="checkbox">
                <input
                  type="checkbox"
                  checked={options.includeCustomCode}
                  onChange={() => toggleOption("includeCustomCode")}
                />
                Include custom code
              </label>
            </div>
          )}
        </div>

        {/* Download button */}
        <button className="download-btn" onClick={handleDownload}>
          {selectedTab === "next"
            ? "Download Next JS Project"
            : "Download HTML & CSS"}
        </button>
      </div>
    </div>
  );
}
