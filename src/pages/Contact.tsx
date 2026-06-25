import { useReveal } from "../hooks/useReveal";
import { PageHero } from "../components/ui/PageHero";
import { ContactForm } from "../components/ContactForm";
import { company } from "../data/company";
import { Mail, Phone, MapPin, Whatsapp } from "../components/ui/Icon";
import "./Contact.css";

const waLink = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
  company.whatsappMessage
)}`;

export function Contact() {
  useReveal("contact");
  return (
    <>
      <PageHero
        eyebrow="Contato"
        title="Fale com a Sebba & Miranda"
        subtitle="Estamos prontos para entender o seu caso e apresentar a melhor estratégia de recuperação de crédito."
      />

      <section className="section">
        <div className="container contact__grid">
          <div className="contact__info reveal">
            <h2>Canais de atendimento</h2>
            <p className="contact__intro">
              Atendemos empresas de todo o Brasil. Escolha o canal mais
              conveniente para você.
            </p>

            <ul className="contact__list">
              <li>
                <span className="contact__icon">
                  <Whatsapp />
                </span>
                <div>
                  <strong>WhatsApp</strong>
                  <a href={waLink} target="_blank" rel="noopener noreferrer">
                    Iniciar conversa
                  </a>
                </div>
              </li>
              {company.phones.map((p) => (
                <li key={p.tel}>
                  <span className="contact__icon">
                    <Phone />
                  </span>
                  <div>
                    <strong>Telefone ({p.label})</strong>
                    <a href={`tel:${p.tel}`}>{p.number}</a>
                  </div>
                </li>
              ))}
              <li>
                <span className="contact__icon">
                  <Mail />
                </span>
                <div>
                  <strong>E-mail</strong>
                  <a href={`mailto:${company.email}`}>{company.email}</a>
                </div>
              </li>
              <li>
                <span className="contact__icon">
                  <MapPin />
                </span>
                <div>
                  <strong>Localização</strong>
                  <a
                    href={company.address.mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {company.address.full}
                  </a>
                </div>
              </li>
            </ul>
          </div>

          <div className="contact__form-wrap reveal">
            <h2>Envie uma mensagem</h2>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="contact__map-section">
        <iframe
          className="contact__map"
          title="Localização Sebba & Miranda"
          src={company.address.mapsEmbed}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </section>
    </>
  );
}
