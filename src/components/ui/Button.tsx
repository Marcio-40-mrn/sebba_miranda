import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";
import "./Button.css";

type Variant = "primary" | "gold" | "outline" | "ghost";
type Size = "md" | "lg";

interface CommonProps {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
}

interface ButtonAsButton
  extends CommonProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> {
  to?: undefined;
  href?: undefined;
}

interface ButtonAsLink extends CommonProps {
  to: string;
  href?: undefined;
}

interface ButtonAsAnchor extends CommonProps {
  href: string;
  to?: undefined;
  target?: string;
  rel?: string;
}

type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsAnchor;

export function Button(props: ButtonProps) {
  const { variant = "primary", size = "md", children, className = "" } = props;
  const cls = `btn btn--${variant} btn--${size} ${className}`.trim();

  if ("to" in props && props.to !== undefined) {
    return (
      <Link to={props.to} className={cls}>
        {children}
      </Link>
    );
  }

  if ("href" in props && props.href !== undefined) {
    const { href, target, rel } = props;
    return (
      <a href={href} target={target} rel={rel} className={cls}>
        {children}
      </a>
    );
  }

  const { variant: _v, size: _s, children: _c, className: _cl, ...rest } =
    props as ButtonAsButton;
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
}
