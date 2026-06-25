import type { SVGProps } from "react";
import { Handshake, Users, Scale, Gavel } from "./Icon";

const map: Record<string, (p: SVGProps<SVGSVGElement>) => JSX.Element> = {
  b2b: Handshake,
  b2c: Users,
  consultoria: Scale,
  representacao: Gavel,
};

export function ServiceIcon({
  id,
  ...props
}: { id: string } & SVGProps<SVGSVGElement>) {
  const Cmp = map[id] ?? Scale;
  return <Cmp {...props} />;
}
