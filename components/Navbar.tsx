"use client";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
const links = [{ id: "hero", label: "Beranda" }, { id: "projects", label: "Proyek" }, { id: "about", label: "Tentang" }, { id: "experience", label: "Pengalaman" }, { id: "contact", label: "Kontak" }];
export default function Navbar() {
  const [active, setActive] = useState("hero");
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const update = () => {
      let current = "hero";
      for (const link of links) {
        const section = document.getElementById(link.id);
        if (section && section.getBoundingClientRect().top <= 160) current = link.id;
      }
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 5) current = "contact";
      setActive(current);
    };
    const escape = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("keydown", escape);
    return () => { window.removeEventListener("scroll", update); window.removeEventListener("keydown", escape); };
  }, []);
  return <header className="site-header"><nav className="nav-shell section-shell" aria-label="Navigasi utama">
    <a className="brand" href="#hero" onClick={() => setOpen(false)}><span className="brand-mark">ir<span>.</span></span><span>Ikhlas Ramadhan</span></a>
    <div className="desktop-nav">{links.slice(1, 4).map((link) => <a key={link.id} href={"#" + link.id} aria-current={active === link.id ? "location" : undefined}>{link.label}</a>)}</div>
    <a className="nav-contact" href="#contact">Hubungi saya <ArrowUpRight size={16} /></a>
    <button className="menu-toggle" aria-label={open ? "Tutup navigasi" : "Buka navigasi"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    {open && <div id="mobile-navigation" className="mobile-nav">{links.map((link) => <a key={link.id} href={"#" + link.id} aria-current={active === link.id ? "location" : undefined} onClick={() => setOpen(false)}>{link.label}</a>)}</div>}
  </nav></header>;
}
