
import React, { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Rahul Sharma",
    text: "Staying at CampusHostel was the best part of my university life. Clean rooms, friendly staff, and peaceful environment!",
  },
  {
    name: "Anjali Verma",
    text: "Affordable and secure – everything a student could ask for. The study lounge is especially helpful during exams.",
  },
  {
    name: "Karan Mehta",
    text: "Fast Wi-Fi, great food, and amazing community. I made lifelong friends here. Highly recommend it!",
  },
];

const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearTimeout(timer);
  }, [current]);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <div className="testimonial-slider">
      <style>{`
        .testimonial-slider {
          max-width: 700px;
          margin: 60px auto;
          padding: 40px 20px;
          background: #f4f4f4;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          text-align: center;
          position: relative;
          overflow: hidden;
          font-family: Arial, sans-serif;
        }

        .testimonial {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.5s ease-in-out;
          position: absolute;
          top: 0; left: 0;
          width: 100%;
        }

        .testimonial.active {
          opacity: 1;
          transform: translateY(0);
          position: relative;
        }

        .testimonial p {
          font-size: 18px;
          color: #333;
          margin-bottom: 20px;
        }

        .testimonial h4 {
          font-size: 20px;
          color: #4f46e5;
        }

        .nav-buttons {
          margin-top: 20px;
          display: flex;
          justify-content: center;
          gap: 16px;
        }

        .nav-buttons button {
          background: #4f46e5;
          border: none;
          color: white;
          padding: 10px 20px;
          border-radius: 6px;
          cursor: pointer;
          transition: background 0.3s;
        }

        .nav-buttons button:hover {
          background: #3730a3;
        }

        @media (max-width: 768px) {
          .testimonial-slider {
            padding: 30px 16px;
          }

          .testimonial p {
            font-size: 16px;
          }
        }
      `}</style>

      {testimonials.map((item, index) => (
        <div
          key={index}
          className={`testimonial ${index === current ? "active" : ""}`}
        >
          <p>"{item.text}"</p>
          <h4>- {item.name}</h4>
        </div>
      ))}

      <div className="nav-buttons">
        <button onClick={prevSlide}>⟵ Prev</button>
        <button onClick={nextSlide}>Next ⟶</button>
      </div>
    </div>
  );
};

export default TestimonialSlider;
