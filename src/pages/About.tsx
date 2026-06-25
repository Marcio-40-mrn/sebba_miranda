import { useReveal } from "../hooks/useReveal";
import { PageHero } from "../components/ui/PageHero";
import { CtaBanner } from "../sections/CtaBanner";
import { aboutParagraphs, satisfactionText } from "../data/content";
import { Shield, Scale, Users } from "../components/ui/Icon";
import "./About.css";

const values = [
  {
    icon: Shield,
    title: "Ética e respeito",
    text: "Cobrança amigável, com informação clara e respeito ao devedor em cada contato.",
  },
  {
    icon: Scale,
    title: "Técnica jurídica",
    text: "Atuação extrajudicial e judicial conduzida por equipe especializada.",
  },
  {
    icon: Users,
    title: "Foco no cliente",
    text: "Soluções desenhadas para a necessidade de cada empresa e carteira.",
  },
];

export function About() {
  useReveal("about");
  return (
    <>
      <PageHero
        eyebrow="A Empresa"
        title="Quem é a Sebba & Miranda"
        subtitle="Especialistas em recuperação de crédito e consultoria jurídica, atuando em todo o Brasil."
      />

      <section className="section">
        <div className="container about__grid">
          <div className="about__text reveal">
            {aboutParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <aside className="about__quote reveal">
            <blockquote>“{satisfactionText}”</blockquote>
          </aside>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="text-center reveal">
            <span className="eyebrow">Nossos valores</span>
            <h2 className="section-title">O que nos guia</h2>
          </div>
          <div className="values-grid">
            {values.map((v) => (
              <article className="value-card reveal" key={v.title}>
                <span className="value-card__icon">
                  <v.icon />
                </span>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
