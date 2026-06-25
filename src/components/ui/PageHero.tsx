import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import "./PageHero.css";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: ReactNode;
}

export function PageHero({ eyebrow, title, subtitle }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="page-hero__bg" aria-hidden="true" />
      <div className="container page-hero__inner">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span>{title}</span>
        </nav>
        {eyebrow && <span className="eyebrow eyebrow--light">{eyebrow}</span>}
        <h1 className="page-hero__title">{title}</h1>
        {subtitle && <p className="page-hero__subtitle">{subtitle}</p>}
      </div>
    </section>
  );
}
