import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { navItems } from "../../data/navigation";
import { company } from "../../data/company";
import { Button } from "../ui/Button";
import { Menu, Close, Whatsapp } from "../ui/Icon";
import "./Header.css";

const waLink = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
  company.whatsappMessage
)}`;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Fecha o menu mobile ao trocar de página.
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
      <div className="container header__inner">
        <Link to="/" className="brand" aria-label={company.name}>
          <img src="/logo.jpg" alt={company.name} className="brand__logo" />
        </Link>

        <nav className={`nav ${open ? "nav--open" : ""}`} aria-label="Principal">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `nav__link ${isActive ? "nav__link--active" : ""}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Button
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            variant="gold"
            className="nav__cta"
          >
            <Whatsapp /> Fale conosco
          </Button>
        </nav>

        <button
          className="nav-toggle"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <Close /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
