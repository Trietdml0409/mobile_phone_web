"use client";

import Header from "@/components/header";

export default function AboutPage() {
  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        width: "100%",
        backgroundColor: "white",
        padding: "10px",
        paddingBottom: "50px",
      }}
    >
      <Header />

      <main
        style={{
          maxWidth: 768,
          marginLeft: "auto",
          marginRight: "auto",
          paddingTop: 48,
          paddingBottom: 48,
          color: "#000",
        }}
      >
        {/* Image placeholder: 90% width, 100px height, centered */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: 24,
          }}
        >
          <div
            style={{
              width: "90%",
              height: 500,
              backgroundColor: "#f3f4f6",
              border: "1px dashed #cbd5e1",
              overflow: "hidden",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src="https://media.istockphoto.com/id/2148975617/photo/woman-jumping-high-after-successful-job-interview.jpg?s=612x612&w=0&k=20&c=puWecKm9APpx7QYJmjHEySQVZM38wRDEQQvSZaCeL30="
              alt="About"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </div>
        </div>

        <h1 style={{ fontSize: 30, fontWeight: 700, marginBottom: 16 }}>
          About Us
        </h1>
        <p style={{ marginBottom: 16 }}>
          Welcome to TechGear Pro — we provide high-quality mobile phones and
          accessories with exceptional customer service. Our mission is to help
          people stay connected with reliable devices and friendly support.
        </p>
        <h2
          style={{
            fontSize: 20,
            fontWeight: 600,
            marginTop: 24,
            marginBottom: 8,
          }}
        >
          Our Values
        </h2>
        <ul
          style={{ listStyleType: "disc", paddingLeft: 24, marginBottom: 16 }}
        >
          <li>Customer first</li>
          <li>Quality products</li>
          <li>Fast shipping</li>
        </ul>
        <p>
          For inquiries, email us at{" "}
          <a
            href="mailto:support@techgearpro.com"
            style={{ color: "#000", textDecoration: "underline" }}
          >
            support@techgearpro.com
          </a>
          .
        </p>
      </main>
    </div>
  );
}
