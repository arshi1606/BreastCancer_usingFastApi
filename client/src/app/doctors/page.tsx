"use client";
import React from "react";


const DoctorContactPage: React.FC = () => {
  const doctors = [
    {
      name: "Dr. Rajeev Agarwal",
      specialization: "Surgical Oncologist, General Surgeon, Oncologist",
      img: "/static/assets/img/doctors/dr-rajeev-agarwal.jpg",
      link: "/Rajeev_Agarwal_2",
    },
    {
      name: "Dr. Prof. K Kalaichelvi",
      specialization: "MBBS DM - Oncology, MD - General Medicine, Oncologist",
      img: "/static/assets/img/doctors/Dr kranti.png",
      link: "/Kalechelvi_2",
    },
    {
      name: "Dr. Ramakant Krishnaji Deshpande",
      specialization: "Surgical Oncologist, Oncologist",
      img: "/static/assets/img/doctors/Dr-Ramakant.jpeg",
      link: "/Ramakant_2",
    },
    {
      name: "Dr. Jayanti Thumsi",
      specialization: "Breast Surgeon, General Surgeon, Oncologist",
      img: "/static/assets/img/doctors/DR- janki.jpeg",
      link: "/Jayanti_2",
    },
    {
      name: "Dr. Ramesh Sarin",
      specialization: "MBBS MS - General Surgery, General Surgeon, Oncologist",
      img: "/static/assets/img/doctors/doctor_1.jpg",
      link: "/Ramesh_sarin_2",
    },
    {
      name: "Dr. Sanjiv Sharma",
      specialization: "Surgical Oncologist, Radiation Oncologist, Oncologist",
      img: "/static/assets/img/doctors/dr-sanjiv.jpeg",
      link: "/Sanjiv_Sharma_2",
    },
  ];

  return (
    <>
     
      <div className="page-section">
        <div className="container">
          <div className="grid">
            {doctors.map((doctor, index) => (
              <div key={index} className="card">
                <img src={doctor.img} alt={doctor.name} className="card-image" />
                <div className="card-body">
                  <h3>{doctor.name}</h3>
                  <p>{doctor.specialization}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .page-section {
          padding: 2rem 0;
        }
        .container {
          max-width: 1140px;
          margin: 0 auto;
          padding: 0 1rem;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        .card {
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          overflow: hidden;
          text-align: center;
          transition: transform 0.3s ease;
        }
        .card:hover {
          transform: translateY(-5px);
        }
        .card-image {
          width: 100%;
          height: 250px;
          object-fit: cover;
        }
        .card-body {
          padding: 1rem;
        }
        .card-body h3 {
          margin: 0.5rem 0;
          font-size: 1.3rem;
          color: #333;
        }
        .card-body p {
          font-size: 0.95rem;
          color: #666;
          margin: 0.5rem 0;
        }
        @media (max-width: 768px) {
          .grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
};

export default DoctorContactPage;
