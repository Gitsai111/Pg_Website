import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import FacilityIcon from "../components/FacilityIcon";
import RoomCard from "../components/RoomCard";
import TestimonialSlider from "../components/TastimonialSlider";

const HomePage = () => {
  useEffect(() => {
    const heroContent = document.querySelector(".hero-content");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          heroContent.classList.add("visible");
        }
      },
      { threshold: 0.5 }
    );
    if (heroContent) {
      observer.observe(heroContent);
    }
    return () => {
      if (heroContent) observer.unobserve(heroContent);
    };
  }, []);

  return (
    <>
      <Navbar />
      <div className="home-page">
        <style>{`
          .home-page {
            font-family: Arial, sans-serif;
            padding-top: 80px;
          }

          .hero {
            // background: linear-gradient(135deg, rgb(63, 149, 248), rgb(252, 37, 220));
            // height: 500px;
            // background-size: cover;
            // background-position: center;
            // display: flex;
            // justify-content: center;
            // align-items: center;
            // padding: 0 20px;
            // position: relative;
            // margin-bottom: 40px;
            // overflow: hidden;
             background-image: linear-gradient(
      rgba(0, 0, 0, 0.5), 
      rgba(0, 0, 0, 0.5)
    ),
    url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80'); /* Example dorm image */
  background-size: cover;
  background-position: center;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  position: relative;
  margin-bottom: 40px;
  overflow: hidden;
          }

          .hero::before {
            content: "";
            position: absolute;
            top: 0; left: 0;
            width: 100%; height: 100%;
            background-color: rgba(0, 0, 0, 0.4);
            z-index: 1;
          }

          .hero-content {
            position: relative;
            z-index: 2;
            text-align: center;
            color: white;
            max-width: 700px;
            margin: 0 auto;
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 1s ease, transform 1s ease;
          }

          .hero-content.visible {
            opacity: 1;
            transform: translateY(0);
          }

          .hero-content h1 {
            font-size: 60px;
            margin-bottom: 20px;
            font-weight: bold;
            letter-spacing: 2px;
            background: linear-gradient(90deg, rgb(10, 187, 251), rgb(245, 62, 62), #4ade80);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            color: transparent;
            animation: gradientMove 5s ease infinite;
            background-size: 200% auto;
          }

          .hero-content p {
            font-size: 22px;
          }

          @media (max-width: 768px) {
            .hero-content h1 {
              font-size: 36px;
            }
            .hero-content p {
              font-size: 16px;
            }
          }

          @keyframes gradientMove {
            0% {
              background-position: 0% center;
            }
            100% {
              background-position: 100% center;
            }
          }

          .section {
            padding: 60px 20px;
            max-width: 1200px;
            margin: 0 auto;
          }

          .section h2 {
            text-align: center;
            font-size: 32px;
            color: #333;
            margin-bottom: 40px;
          }

          .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 24px;
          }

          .feature-card {
     background: linear-gradient(145deg,rgb(218, 129, 248), #ebedee); /* Light grayish gradient */
  padding: 24px;
  border-radius: 16px;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.05);
          }

          .feature-card h3 {
            margin-bottom: 10px;
            color: #4f46e5;
          }

          .feature-card p {
            font-size: 15px;
            color: #444;
          }
            .feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.15);
}
  .feature-card {
  position: relative;
}

.feature-card::before {
display: none;
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 4px;
  // background: linear-gradient(90deg, #4f46e5, #06b6d4);
    background: linear-gradient(90deg, #4f46e5, #06b6d4);
  border-radius: 8px;
}

          .rooms {
            display: flex;
            gap: 24px;
            justify-content: center;
            flex-wrap: wrap;
            margin-top: 20px;
          }

          .room {
            background:rgb(248, 228, 245);
            padding: 24px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            flex: 1 1 300px;
            max-width: 400px;
            transition: transform 0.2s ease;
          }

          .room:hover {
            transform: translateY(-5px);
          }

          .room h3 {
            font-size: 20px;
            margin-bottom: 12px;
            color: #4f46e5;
          }

          .room p {
            font-size: 15px;
            color: #555;
            margin: 8px 0;
          }

          .cta {
            background: #4f46e5;
            color: white;
            text-align: center;
            padding: 60px 20px;
            border-radius: 10px;
            margin: 40px 20px;
          }

          .cta button {
            background: white;
            color: #4f46e5;
            border: none;
            padding: 12px 24px;
            margin-top: 20px;
            font-weight: bold;
            font-size: 16px;
            border-radius: 4px;
            cursor: pointer;
          }

          .cta button:hover {
            background:rgb(234, 53, 228);
          }
        `}</style>

        {/* Hero Section */}
        <div className="hero" id="hero">
          <div className="hero-content">
            <h1>Vibe Stay</h1>
            <p>Comfortable, affordable student living — like a second home near campus.</p>
          </div>
        </div>

        {/* Why Choose Us */}
        <section className="section" id="features">
  <h2 >Why Choose Us?</h2>
  <div className="features-grid">
    <div className="feature-card">
    <FacilityIcon name="High-Speed Wi-Fi" />
    {/* <FacilityIcon name="High-Speed Wi-Fi"></FacilityIcon> */}
      <h3>High-Speed Wi-Fi</h3>
      <p>Reliable internet for study, streaming, and online classes.</p>
    </div>
    <div className="feature-card">
    <FacilityIcon name="24/7 Security" />
      <h3>24/7 Security</h3>
      <p>Monitored premises with biometric and CCTV access.</p>
    </div>
    <div className="feature-card">
    <FacilityIcon name="Nutritious Meals" />
      <h3>Nutritious Meals</h3>
      <p>Mess with healthy and tasty food included in rent.</p>
    </div>
    <div className="feature-card">
    <FacilityIcon name="Clean & Spacious Rooms" />
      <h3>Clean & Spacious Rooms</h3>
      <p>Airy, ventilated rooms with storage and attached bathrooms.</p>
    </div>
    <div className="feature-card">
    <FacilityIcon name="Laundry Support" />
      <h3>Laundry Support</h3>
      <p>Weekly laundry and ironing services provided.</p>
    </div>
    <div className="feature-card">
    <FacilityIcon name="Common Study Lounge" />
      <h3>Common Study Lounge</h3>
      <p>Dedicated study spaces with a quiet atmosphere.</p>
    </div>
    <div className="feature-card">
    <FacilityIcon name="Recreation Area" />
      <h3>Recreation Area</h3>
      <p>Common room with indoor games, TV, and comfy seating to unwind.</p>
    </div>
    <div className="feature-card">
    <FacilityIcon name="Power Backup" />
      <h3>Power Backup</h3>
      <p>Uninterrupted electricity with generator and inverter support.</p>
    </div>
  </div>
</section>

        {/* Rooms Overview */}
        {/* <section className="section" id="rooms">
          <h2>Our Rooms</h2>
          <div className="rooms">
            <div className="room">
              <h3>Single Room</h3>
              <p>One-person occupancy with private bathroom, bed, desk, and cupboard.</p>
              <p><strong>₹6,000/month</strong></p>
            </div>
            <div className="room">
              <h3>Double Sharing Room</h3>
              <p>Shared with one roommate, all amenities included.</p>
              <p><strong>₹3,500/month</strong></p>
            </div>
          </div>
        </section> */}
        <section className="section" id="rooms">
  <h2 style={{ textAlign: "center", marginBottom: "30px", color: "#4f46e5" }}>
    Our Rooms
  </h2>
  <div
    style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "20px",
      padding: "0 20px",
    }}
  >
    <RoomCard
      title="Single Room"
      description="One-person occupancy with private bathroom, bed, desk, and cupboard."
      image="/images/mesmerizing-how-to-decorate-boy-bedroom-decorating-living-and_room-interior-and-decoration-768x511-1.jpg"

      price="₹6,000/month"
    />
    <RoomCard
      title="Double Sharing Room"
      description="Shared with one roommate, all amenities included."
      image="/images/hostellers-in-bunks-HIUSA-640x360-min.jpg"
      price="₹3,500/month"
    />
  </div>
</section>



        <section className="cta" id="contact">
          <h2>Book Your Room Today</h2>
          <p>Limited slots available for the upcoming semester. Reserve now!</p>
          <button>Contact Us</button>
        </section>
<section className="Section" id="testimonials">
<h2 style={{color:" black",textAlign:'center'}}>What Our Residents Say</h2>
<TestimonialSlider></TestimonialSlider>

</section>
      </div>
  
    </>
  );
};

export default HomePage;


