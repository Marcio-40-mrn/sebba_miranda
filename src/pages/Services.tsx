import { useReveal } from "../hooks/useReveal";
import { PageHero } from "../components/ui/PageHero";
import { CtaBanner } from "../sections/CtaBanner";
import { services } from "../data/services";
import { ServiceIcon } from "../components/ui/ServiceIcon";
import { Check } from "../components/ui/Icon";
import "./Services.css";

export function Services() {
  useReveal("services");
  return (
    <>
      <PageHero
        eyebrow="Serviços"
        title="Como ajudamos a sua empresa"
        subtitle="Atuamos da negociação amigável à esfera judicial, com a estratégia ideal para cada tipo de crédito."
      />

      <section className="section">
        <div className="container services-list">
          {services.map((s, i) => (
            <article
              className={`service-row reveal ${i % 2 ? "service-row--rev" : ""}`}
              key={s.id}
            >
              <div className="service-row__media">
                <span className="service-row__icon">
                  <ServiceIcon id={s.id} />
                </span>
                <span className="service-row__index">
                  0{i + 1}
                </span>
              </div>
              <div className="service-row__body">
                <h2>{s.title}</h2>
                <p className="service-row__desc">{s.description}</p>
                <ul className="service-row__list">
                  {s.highlights.map((h) => (
                    <li key={h}>
                      <Check /> {h}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
