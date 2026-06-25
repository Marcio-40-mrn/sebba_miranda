import { Link } from "react-router-dom";
import { services } from "../data/services";
import { ServiceIcon } from "../components/ui/ServiceIcon";
import { ArrowRight } from "../components/ui/Icon";
import "./ServicesPreview.css";

export function ServicesPreview() {
  return (
    <section className="section section--alt" id="servicos">
      <div className="container">
        <div className="text-center reveal">
          <span className="eyebrow">Nossos serviços</span>
          <h2 className="section-title">
            Soluções completas em recuperação de crédito
          </h2>
          <p className="section-lead">
            Do diálogo extrajudicial à ação na justiça, atuamos em todas as
            frentes para reduzir a inadimplência da sua empresa.
          </p>
        </div>

        <div className="services-grid">
          {services.map((s) => (
            <article className="service-card reveal" key={s.id}>
              <span className="service-card__icon">
                <ServiceIcon id={s.id} />
              </span>
              <h3 className="service-card__title">{s.title}</h3>
              <p className="service-card__text">{s.short}</p>
              <Link className="service-card__link" to="/servicos">
                Saiba mais <ArrowRight />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
