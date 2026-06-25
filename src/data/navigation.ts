export interface NavItem {
  label: string;
  to: string;
}

export const navItems: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "A Empresa", to: "/a-empresa" },
  { label: "Serviços", to: "/servicos" },
  { label: "Como Contratar", to: "/como-contratar" },
  { label: "Contato", to: "/contato" },
];
