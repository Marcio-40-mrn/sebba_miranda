import { reasons } from "../data/content";
import { Shield } from "../components/ui/Icon";
import "./WhyChooseUs.css";

export function WhyChooseUs() {
  return (
    <section className="section section--alt" id="diferenciais">
      <div className="container why__grid">
        <div className="why__intro reveal">
          <span className="eyebrow">Por que escolher a Sebba &amp; Miranda</span>
          <h2 className="section-title">
            Recuperar crédito também é preservar a sua reputação
          </h2>
          <p className="section-lead">
            Priorizamos uma cobrança amigável, com informações claras e respeito
            em cada contato. Assim recuperamos valores sem desgastar a relação
            com o seu cliente.
          </p>
          <span className="why__seal">
            <Shield /> Atuação ética e profissional
          </span>
        </div>

        <ul className="why__list">
          {reasons.map((r, i) => (
            <li className="why__item reveal" key={r.title}>
              <span className="why__num">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3>{r.title}</h3>
                <p>{r.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
