import { useReveal } from "../hooks/useReveal";
import { PageHero } from "../components/ui/PageHero";
import { CtaBanner } from "../sections/CtaBanner";
import { hireSteps } from "../data/content";
import { company } from "../data/company";
import { Button } from "../components/ui/Button";
import { Whatsapp, Phone, Mail } from "../components/ui/Icon";
import "./HowToHire.css";

const waLink = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
  company.whatsappMessage
)}`;

export function HowToHire() {
  useReveal("hire");
  return (
    <>
      <PageHero
        eyebrow="Como Contratar"
        title="Simples, rápido e sem compromisso"
        subtitle="Em poucos passos você inicia a recuperação dos créditos da sua empresa com a nossa equipe."
      />

      <section className="section">
        <div className="container">
          <ol className="steps">
            {hireSteps.map((s) => (
              <li className="step reveal" key={s.step}>
                <span className="step__num">{s.step}</span>
                <div className="step__body">
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="hire-cta reveal">
            <h2>Pronto para começar?</h2>
            <p>Escolha o canal de sua preferência e fale com a gente agora.</p>
            <div className="hire-cta__actions">
              <Button
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                variant="gold"
                size="lg"
              >
                <Whatsapp /> WhatsApp
              </Button>
              <Button href={`tel:${company.phones[0].tel}`} variant="outline" size="lg">
                <Phone /> {company.phones[0].number}
              </Button>
              <Button href={`mailto:${company.email}`} variant="outline" size="lg">
                <Mail /> E-mail
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
