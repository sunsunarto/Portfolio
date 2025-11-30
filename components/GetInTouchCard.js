"use client";

import { useContext, useRef } from "react";
import emailjs from "@emailjs/browser";
import { LanguageContext } from "@/context/LanguageContext";
import { translations } from "@/utils/i18n";

export default function Contact() {
  const { language } = useContext(LanguageContext);
  const t = translations[language];
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8d81zn2",      
        "template_s42obp9", 
        form.current,
        "aMh1Ht8KAInX9vQ8U"
      )
      .then(
        (result) => {
          console.log("SUCCESS:", result.text);
          alert("Message sent!");
        },
        (error) => {
          console.error("FAILED:", error.text);
          alert("Failed to send message.");
        }
      );

    e.target.reset();
  };

  return (
    <div className="contact" style={{ backgroundColor: "#E6F7FF", color: "black" }}>
      <h1 style={{ padding: "20px 32px", fontSize: "40px", fontWeight: "bold", color: "#042E61" }}>
        {t.contact}
      </h1>
      <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
        <div className="left" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div className="whatsapp">
            <h2 style={{ fontSize: "20px", color: "#000080", fontWeight: "bold" }}>Whatsapp</h2>
            <a href="https://wa.me/+6285934427040" style={{ fontSize: "15px", color: "#3949AB", fontWeight: "bold" }}>
              +62 85934427040
            </a>
          </div>
          <div className="email">
            <h2 style={{ fontSize: "20px", color: "#000080", fontWeight: "bold" }}>Email</h2>
            <p style={{ fontSize: "15px", color: "#3949AB", fontWeight: "bold" }}>sunaryo24259@outlook.com</p>
          </div>
          <div className="Linkedin">
            <h2 style={{ fontSize: "20px", color: "#000080", fontWeight: "bold" }}>Linkedin</h2>
            <a href="www.linkedin.com/in/sunaryo-soengkono-b29849386" style={{ fontSize: "15px", color: "#3949AB", fontWeight: "bold" }}>
            {t.name}  
            </a>
          </div>
          <div className="instagram">
            <h2 style={{ fontSize: "20px", color: "#000080", fontWeight: "bold" }}>Instagram</h2>
            <a href="https://www.instagram.com/sunsunaryo_" style={{ fontSize: "15px", color: "#3949AB", fontWeight: "bold" }}>
            @sunsunaryo_
            </a>
          </div>
        </div>
        <div className="right" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <form
            style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "40px" }}
            ref={form}
            onSubmit={sendEmail} 
          >
            <input type="text" placeholder={t.yourName} name="name" required style={{ backgroundColor: "#F6F8F9", color: "black", width: "600px", height: "32px", borderRadius: "5px" }} />
            <input type="email" placeholder={t.yourEmail} required name="email" style={{ backgroundColor: "#F6F8F9", color: "black", height: "32px", borderRadius: "5px" }} />
            <input type="text" placeholder={t.yourSubject} required name="subject" style={{ backgroundColor: "#F6F8F9", color: "black", height: "32px", borderRadius: "5px" }} />
            <textarea placeholder={t.yourMessage} required name="message" style={{ backgroundColor: "#F6F8F9", color: "black", height: "147px", borderRadius: "5px" }}></textarea>
            <button type="submit" style={{ backgroundColor: "#000080", color: "white", borderRadius: "5px", fontWeight: "bold", height: "32px" }}>
              {t.send}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}