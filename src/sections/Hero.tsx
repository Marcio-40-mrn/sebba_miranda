import { company } from "../data/company";
import { Button } from "../components/ui/Button";
import { ArrowRight, Whatsapp, Check } from "../components/ui/Icon";
import "./Hero.css";

const waLink = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
  company.whatsappMessage
)}`;

const points = [
  "Cobrança extrajudicial e judicial",
  "Atuação em todo o Brasil",
  "Abordagem amigável e profissional",
];

export function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__content reveal">
          <span className="eyebrow eyebrow--light">
            Recuperação de crédito &amp; consultoria jurídica
          </span>
          <h1 className="hero__title">
            Reduza sua inadimplência e recupere seus créditos com segurança
          </h1>
          <p className="hero__lead">
            Somos a melhor solução em redução de perdas e recuperação de crédito
            para a sua empresa. Representação em cobrança extrajudicial, judicial
            e consultoria jurídica em todo o Brasil.
          </p>

          <ul className="hero__points">
            {points.map((p) => (
              <li key={p}>
                <Check /> {p}
              </li>
            ))}
          </ul>

          <div className="hero__actions">
            <Button
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              variant="gold"
              size="lg"
            >
              <Whatsapp /> Falar com um especialista
            </Button>
            <Button to="/servicos" variant="ghost" size="lg">
              Conheça os serviços <ArrowRight />
            </Button>
          </div>
        </div>

        <aside className="hero__card reveal">
          <div className="hero__stat">
            <strong>B2B &amp; B2C</strong>
            <span>Modelos de cobrança para empresas e consumidores</span>
          </div>
          <div className="hero__divider" />
          <ul className="hero__features">
            <li>
              <span>Agilidade e transparência</span>
            </li>
            <li>
              <span>Equipe altamente treinada</span>
            </li>
            <li>
              <span>Soluções sob medida</span>
            </li>
            <li>
              <span>Qualidade comprovada</span>
            </li>
          </ul>
        </aside>
      </div>
    </section>
  );
}
