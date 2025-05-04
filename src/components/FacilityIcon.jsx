
import React from "react";

// You can replace emojis with inline SVGs or use libraries like react-icons
const FacilityIcon = ({ name }) => {
  const icons = {
    "High-Speed Wi-Fi": "📶",
    "24/7 Security": "🔒",
    "Nutritious Meals": "🍽️",
    "Clean & Spacious Rooms": "🛏️",
    "Laundry Support": "🧺",
    "Common Study Lounge": "📚",
    "Recreation Room": "🎮",
    "Power Backup": "🔌"
  };

  return (
    <div style={{ fontSize: "32px", marginBottom: "12px" }}>
      {icons[name] || "❓"}
    </div>
  );
};

export default FacilityIcon;
