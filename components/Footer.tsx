import { portfolioData } from "@/data/portfolio";
export default function Footer() {
  return <footer className="site-footer section-shell"><p>© {new Date().getFullYear()} {portfolioData.personal.name}</p><a href="#hero">Kembali ke atas ↑</a></footer>;
}
