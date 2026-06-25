import { company } from "../data/company";
import { Button } from "../components/ui/Button";
import { Whatsapp, Phone } from "../components/ui/Icon";
import "./CtaBanner.css";

const waLink = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
  company.whatsappMessage
)}`;

export function CtaBanner() {
  return (
    <section className="cta">
      <div className="container cta__inner reveal">
        <div className="cta__text">
          <h2>Descubra como reduzir a sua inadimplência</h2>
          <p>
            Fale com a nossa equipe e receba um diagnóstico da sua carteira sem
            compromisso.
          </p>
        </div>
        <div className="cta__actions">
          <Button
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            variant="gold"
            size="lg"
          >
            <Whatsapp /> Chamar no WhatsApp
          </Button>
          <Button
            href={`tel:${company.phones[0].tel}`}
            variant="ghost"
            size="lg"
          >
            <Phone /> {company.phones[0].number}
          </Button>
        </div>
      </div>
    </section>
  );
}
