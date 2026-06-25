import { services } from "../data/services";
import { ServiceIcon } from "../components/ui/ServiceIcon";
import { Check } from "../components/ui/Icon";
import "./Models.css";

const ids = ["b2b", "b2c"];

export function Models() {
  const models = services.filter((s) => ids.includes(s.id));

  return (
    <section className="section" id="modelos">
      <div className="container">
        <div className="text-center reveal">
          <span className="eyebrow">Modelos de cobrança</span>
          <h2 className="section-title">B2B e B2C: a estratégia certa para cada caso</h2>
          <p className="section-lead">
            Cada relação de crédito tem sua dinâmica. Trabalhamos o tom e o
            processo ideais para empresas e para consumidores finais.
          </p>
        </div>

        <div className="models-grid">
          {models.map((m) => (
            <article className="model-card reveal" key={m.id}>
              <header className="model-card__head">
                <span className="model-card__icon">
                  <ServiceIcon id={m.id} />
                </span>
                <h3>{m.title}</h3>
              </header>
              <p className="model-card__desc">{m.description}</p>
              <ul className="model-card__list">
                {m.highlights.map((h) => (
                  <li key={h}>
                    <Check /> {h}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
