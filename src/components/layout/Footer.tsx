import { Link } from "react-router-dom";
import { company } from "../../data/company";
import { navItems } from "../../data/navigation";
import { services } from "../../data/services";
import { Mail, Phone, MapPin } from "../ui/Icon";
import "./Footer.css";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <span className="footer__logo">Sebba &amp; Miranda</span>
          <p>
            Sua solução jurídica ágil em todo o Brasil. Especializados em
            negociação de débitos extrajudiciais e judiciais e na recuperação de
            crédito da sua empresa.
          </p>
        </div>

        <div className="footer__col">
          <h4>Navegação</h4>
          <ul>
            {navItems.map((item) => (
              <li key={item.to}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4>Serviços</h4>
          <ul>
            {services.map((s) => (
              <li key={s.id}>
                <Link to="/servicos">{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4>Contato</h4>
          <ul className="footer__contact">
            <li>
              <Mail />
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </li>
            {company.phones.map((p) => (
              <li key={p.tel}>
                <Phone />
                <a href={`tel:${p.tel}`}>{p.number}</a>
              </li>
            ))}
            <li>
              <MapPin />
              <span>{company.address.full}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bar">
        <div className="container footer__bar-inner">
          <span>
            © {year} {company.name}. Todos os direitos reservados.
          </span>
          <span className="footer__note">
            Recuperação de crédito · Consultoria jurídica
          </span>
        </div>
      </div>
    </footer>
  );
}
