import { company } from "../data/company";
import { Whatsapp } from "./ui/Icon";
import "./WhatsappButton.css";

const waLink = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
  company.whatsappMessage
)}`;

export function WhatsappButton() {
  return (
    <a
      className="wa-float"
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar no WhatsApp"
    >
      <Whatsapp />
      <span className="wa-float__label">Fale no WhatsApp</span>
    </a>
  );
}
