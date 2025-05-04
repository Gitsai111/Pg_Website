import React from "react";

const RoomCard = ({ title, description, image }) => {
  const cardStyle = {
    background: "white",
    borderRadius: "20px",
    overflow: "hidden",
    boxShadow: "0 12px 28px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    width: "100%",
    maxWidth: "320px",
    margin: "16px",
    display: "flex",
    flexDirection: "column",
  };

  const imageStyle = {
    width: "100%",
    height: "200px",
    objectFit: "cover",
  };

  const infoStyle = {
    padding: "20px",
    textAlign: "center",
  };

  const titleStyle = {
    color: "#4f46e5",
    marginBottom: "10px",
    fontSize: "22px",
  };

  const descriptionStyle = {
    color: "#555",
    fontSize: "15px",
    marginBottom: "16px",
  };

  const buttonStyle = {
    padding: "10px 20px",
    background: "linear-gradient(90deg, #4f46e5, #06b6d4)",
    color: "white",
    border: "none",
    borderRadius: "30px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "background 0.3s ease",
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-10px)";
        e.currentTarget.style.boxShadow = "0 16px 36px rgba(0, 0, 0, 0.15)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 12px 28px rgba(0, 0, 0, 0.1)";
      }}
    >
      <img src={image} alt={title} style={imageStyle} />
      <div style={infoStyle}>
        <h3 style={titleStyle}>{title}</h3>
        <p style={descriptionStyle}>{description}</p>
        <button style={buttonStyle}>Book Now</button>
      </div>
    </div>
  );
};

export default RoomCard;
