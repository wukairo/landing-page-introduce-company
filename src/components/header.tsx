"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Logo } from "./logo";

const links = [
  ["Dịch vụ", "#services"], ["Giải pháp", "#solutions"], ["Năng lực", "#capabilities"], ["Về LAZTAR", "#about"],
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [open]);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container header-inner">
        <a href="#top" onClick={() => setOpen(false)}><Logo /></a>
        <nav className="desktop-nav" aria-label="Điều hướng chính">
          {links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <a className="header-cta" href="#contact">Liên hệ <ArrowUpRight size={16} /></a>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Mở menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <div className={`mobile-nav ${open ? "open" : ""}`}>
        {links.map(([label, href], index) => <a key={href} href={href} onClick={() => setOpen(false)}><span>0{index + 1}</span>{label}</a>)}
        <a href="#contact" onClick={() => setOpen(false)}>Bắt đầu trao đổi <ArrowUpRight /></a>
      </div>
    </header>
  );
}
