"use client";
import { useState } from "react";
import { ArrowUpRight, Copy, Check } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function ContactSection() {
  const { personal, contact } = portfolioData;
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "error">("idle");
  async function copyEmail() {
    try { await navigator.clipboard.writeText(contact.email); setCopyStatus("copied"); }
    catch { setCopyStatus("error"); }
  }
  return (
    <section id="contact" className="section-shell section-space contact-section">
      <p className="eyebrow">04 / KONTAK</p>
      <div className="contact-layout">
        <div>
          <h2>Hubungi saya</h2>
          <p className="contact-description">Ada proyek web atau lowongan yang ingin kamu diskusikan? Kirim detailnya lewat email atau WhatsApp.</p>
        </div>
        <div className="contact-actions">
          <a href={"mailto:" + contact.email} className="email-link">{contact.email}<ArrowUpRight size={22} /></a>
          <button onClick={copyEmail} className="copy-button">
            {copyStatus === "copied" ? <Check size={16} /> : <Copy size={16} />}
            {copyStatus === "copied" ? "Email tersalin" : "Salin alamat email"}
          </button>
          <p className="copy-feedback" role="status">
            {copyStatus === "error" ? "Email gagal disalin. Pilih alamat email di atas untuk menghubungi saya." : copyStatus === "copied" ? "Alamat email berhasil disalin." : ""}
          </p>
          <div className="contact-socials">
            <a href={"https://wa.me/" + contact.phone.replace(/\D/g, "")} target="_blank" rel="noopener noreferrer">WhatsApp ↗</a>
            {personal.socialLinks.filter((link) => link.icon !== "Mail").map((link) => <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer">{link.name} ↗</a>)}
          </div>
        </div>
      </div>
    </section>
  );
}
