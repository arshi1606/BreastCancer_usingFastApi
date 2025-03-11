"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Cookies from "js-cookie";

const HomePage: React.FC = () => {
  // HERO SECTION STYLES
  const heroContainerStyle = {
    position: "relative" as "relative",
    width: "100%",
    height: "70vh", // Shorter hero section
    overflow: "hidden" as "hidden",
  };

  const heroBgImageStyle = {
    position: "absolute" as "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover" as "cover",
    zIndex: 0,
  };

  const overlayStyle = {
    position: "absolute" as "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 1,
  };

  const heroContentStyle = {
    position: "relative" as "relative",
    zIndex: 2,
    color: "#fff",
  };

  // COMMON PURPLE BUTTON STYLE
  const purpleButtonStyle = {
    backgroundColor: "purple",
    color: "#fff",
    fontSize: "1rem",
    padding: "0.75rem 1.5rem",
    borderRadius: "0.25rem",
    margin: "0.5rem",
    textAlign: "center" as const,
    display: "inline-block",
  };

  // ABOUT SECTION CONTAINER STYLE
  const aboutContainerStyle = {
    maxWidth: "1200px",
    margin: "2rem auto", // centers the section with vertical margin
    padding: "2rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f8f9fa", // light gray background
  };

  // Left and Right sections styling with additional inner padding
  const leftSectionStyle = {
    flex: 1,
    marginRight: "1rem",
    padding: "1rem",
  };

  const rightSectionStyle = {
    flex: 1,
    textAlign: "center" as const,
    padding: "1rem",
  };

  // Determine if user is logged in by checking the token from cookies
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  useEffect(() => {
    const token = Cookies.get("token");
    setIsLoggedIn(!!token);
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <div style={heroContainerStyle}>
        <img
          src="/static/assets/img/bg_image_1.jpg"
          alt="Background"
          style={heroBgImageStyle}
        />
        <div style={overlayStyle} />
        <div style={heroContentStyle} className="hero-section">
          <div className="container text-center">
            <span
              style={{
                fontSize: "2rem",
                color: "#fff",
                display: "block",
                marginTop: "8rem",
              }}
            >
              Let's make your life happier
            </span>

            <h1
              style={{
                fontSize: "3rem",
                color: "#fff",
                fontWeight: "bold",
                margin: "1rem 0",
              }}
            >
              BreastCancerDetectAI
            </h1>

            {isLoggedIn ? (
              <Link
                href="/model_page"
                style={{ ...purpleButtonStyle, fontSize: "1.2rem" }}
              >
                Let's Consult
              </Link>
            ) : (
              <Link
                href="/auth/signin"
                style={{ ...purpleButtonStyle, fontSize: "1.2rem" }}
              >
                Log in to Consult
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* ABOUT SECTION */}
      <div style={aboutContainerStyle}>
        {/* Left Section: Text */}
        <div style={leftSectionStyle}>
          <h1
            style={{
              fontSize: "2.5rem",
              color: "#333",
              fontWeight: "bold",
              marginBottom: "1rem",
            }}
          >
            Welcome to Your Health Center
          </h1>
          <p
            style={{
              color: "grey",
              marginBottom: "16px",
              textAlign: "justify",
            }}
          >
            <strong>BreastCancerDetectAI</strong> is a pioneering project
            developed by a team of four dedicated students committed to raising
            awareness about breast cancer and making it easier for individuals to
            understand their health. Our AI-powered platform aims to provide
            accurate predictions and insights, helping users feel more informed
            and comfortable when checking for potential signs of breast cancer.
            Our mission is to empower individuals with the knowledge they need
            to take proactive steps towards their health and well-being. We
            believe that early detection and education are crucial in the fight
            against breast cancer, and our innovative tool is designed to make
            this process accessible and user-friendly for everyone. At
            BreastCancerDetectAI, we are passionate about using technology to
            make a positive impact on people's lives. Our team has worked
            tirelessly to create a platform that combines cutting-edge AI
            technology with a user-centric approach, ensuring that our users
            receive reliable and understandable results.
          </p>
          <Link href="/about" style={purpleButtonStyle}>
            Learn More
          </Link>
        </div>

        {/* Right Section: Image */}
        <div style={rightSectionStyle}>
          <img
            src="/static/assets/img/bg-doctor.png"
            alt="Doctor Illustration"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      </div>
    </>
  );
};

export default HomePage;
