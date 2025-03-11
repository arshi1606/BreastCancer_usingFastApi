"use client";

import React from "react";

const AboutPage: React.FC = () => {
  
  const pageSectionStyle: React.CSSProperties = {
    padding: "5rem 0",
    backgroundColor: "#fff",
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: "1140px",
    margin: "0 auto",
    padding: "0 1rem",
  };

  const rowStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
  };

  const colStyle: React.CSSProperties = {
    flex: "0 0 100%",
    maxWidth: "800px",
    // You can add a box-shadow for a subtle effect
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    padding: "2rem",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
  };

  const headingStyle: React.CSSProperties = {
    textAlign: "center",
    marginBottom: "1.5rem",
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#333",
  };

  const subheadingStyle: React.CSSProperties = {
    textAlign: "center",
    margin: "2rem 0 1rem",
    fontSize: "2rem",
    color: "#444",
  };

  const paragraphStyle: React.CSSProperties = {
    fontSize: "1.1rem",
    lineHeight: 1.6,
    marginBottom: "1rem",
    color: "#555",
  };

  const homeReturnStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#e9ecef",
  };

  const homeButtonStyle: React.CSSProperties = {
    padding: "0.75rem 1.5rem",
    backgroundColor: "#007bff",
    color: "#fff",
    borderRadius: "0.25rem",
    textDecoration: "none",
    fontSize: "1.2rem",
  };

  const bannerHomeStyle: React.CSSProperties = {
    backgroundImage: "url(../static/assets/img/banner-pattern.svg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "2rem 0",
  };

  return (
    <>
      {/* About Section */}
   
      <div style={pageSectionStyle}>
        <div style={containerStyle}>
          <div style={rowStyle}>
            <div style={colStyle}>
              <h1 style={headingStyle}>Welcome to Your Health Center</h1>
              <div style={{ textAlign: "justify" }}>
                <p style={paragraphStyle}>
                  Welcome to BreastCancerDetectAI, a pioneering initiative developed by
                  four dedicated students with a shared vision of leveraging technology to
                  fight breast cancer. Our mission is to provide a reliable, user-friendly
                  platform that empowers individuals to take control of their health through
                  early detection and awareness. Breast cancer is a significant health
                  concern that affects millions of women and men worldwide. Early detection
                  is crucial in improving the chances of successful treatment and survival.
                  Understanding the importance of timely diagnosis, we have harnessed the
                  power of artificial intelligence to create an innovative tool that assists
                  in predicting the likelihood of breast cancer.
                </p>

                <h2 style={subheadingStyle}>What is Breast Cancer?</h2>
                <p style={paragraphStyle}>
                  Breast cancer is a disease in which cells in the breast grow out of control.
                  It can begin in different parts of the breast, including the ducts, lobules,
                  or tissue in between. While it primarily affects women, men can also develop
                  breast cancer, though it is less common. There are several types of breast
                  cancer, and the treatment options vary depending on the type, stage, and other
                  factors. Early detection through regular screening, including mammograms and
                  self-examinations, plays a critical role in increasing the chances of successful
                  treatment.
                </p>
                <p style={paragraphStyle}>
                  The symptoms of breast cancer can vary widely, from lumps or swelling to changes
                  in the skin or nipple. It's important to be aware of these signs and consult a
                  healthcare professional if you notice anything unusual. Understanding the risks,
                  such as family history, age, and lifestyle factors, can also help in taking
                  preventive measures.
                </p>

                <h2 style={subheadingStyle}>Awareness About Breast Cancer Detection</h2>
                <p style={paragraphStyle}>
                  Raising awareness about breast cancer detection is crucial in encouraging
                  people to take proactive steps towards their health. Awareness campaigns,
                  education programs, and community support groups play a vital role in spreading
                  knowledge about the importance of early detection. By understanding the
                  screening options available, individuals can make informed decisions about
                  their health.
                </p>
                <p style={paragraphStyle}>
                  Self-examinations, clinical exams, and mammograms are the primary methods for
                  detecting breast cancer early. Awareness initiatives often emphasize the
                  significance of these practices, as early detection can lead to more treatment
                  options and better outcomes. Our platform, BreastCancerDetectAI, is designed to
                  complement these efforts by providing users with AI-driven predictions and
                  insights, making the process of checking for potential signs of breast cancer
                  more accessible and less intimidating.
                </p>
                <p style={paragraphStyle}>
                  Through our combined efforts, we aim to reduce the stigma and fear often associated
                  with breast cancer screenings, and instead, encourage a culture of regular
                  check-ups and preventive care.
                </p>

                <p style={paragraphStyle}>
                  BreastCancerDetectAI is designed to be more than just a predictive model. It
                  aims to educate and comfort users, offering a sense of reassurance and support
                  during what can be a challenging time. By providing accessible information and
                  intuitive AI-driven predictions, we hope to reduce the fear and uncertainty often
                  associated with breast cancer screenings. Our team comprises four passionate
                  students from diverse fields, united by our commitment to making a positive impact
                  on public health. Each of us brings unique skills and perspectives, from data science
                  and machine learning to web development and healthcare. Together, we have developed
                  this platform with the utmost care, ensuring that it is not only accurate but also
                  easy to use.
                </p>

                <p style={paragraphStyle}>
                  We believe that technology can play a pivotal role in healthcare, and our goal is to
                  bridge the gap between advanced medical research and everyday health practices.
                  Through BreastCancerDetectAI, we aspire to raise awareness about breast cancer and
                  encourage proactive health checks, ultimately contributing to early detection and
                  better outcomes for everyone.
                </p>

                <p style={paragraphStyle}>
                  Thank you for visiting BreastCancerDetectAI. We hope our platform serves as a valuable
                  resource in your journey towards better health. Should you have any questions or need
                  further assistance, please do not hesitate to contact us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    

      {/* Banner Section */}
      <div style={bannerHomeStyle}>
        <div style={containerStyle}>
          {/* Additional content can go here */}
        </div>
      </div>
    </>
  );
};

export default AboutPage;
