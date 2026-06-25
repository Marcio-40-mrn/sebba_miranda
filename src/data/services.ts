/**
 * Serviços oferecidos. Textos baseados no conteúdo do site atual.
 */
export interface Service {
  id: string;
  title: string;
  short: string;
  description: string;
  highlights: string[];
}

export const services: Service[] = [
  {
    id: "b2b",
    title: "Cobrança B2B",
    short: "Recuperação estratégica de valores entre empresas, preservando a relação comercial.",
    description:
      "A Cobrança B2B (Business to Business) é o processo estratégico de recuperar valores pendentes entre empresas, priorizando o diálogo e a manutenção da parceria comercial. É possível cobrar uma dívida sem perder o cliente: a abordagem abandona o tom de confronto e busca uma solução negociada que funcione para ambos os lados.",
    highlights: [
      "Negociação consultiva e personalizada",
      "Preservação do relacionamento comercial",
      "Acordos estruturados e formalizados",
    ],
  },
  {
    id: "b2c",
    title: "Cobrança B2C",
    short: "Cobrança de pessoas físicas com processos padronizados e canais digitais.",
    description:
      "A Cobrança B2C (Business to Consumer) é o processo de cobrança de pessoas físicas, consumidores finais. Lida com um grande volume de devedores e, por isso, exige processos padronizados e eficientes, apoiados em ferramentas digitais — SMS, e-mail, WhatsApp e contato telefônico — para alcançar resultados em escala.",
    highlights: [
      "Réguas de cobrança multicanal",
      "Atendimento amigável e claro",
      "Escala com eficiência operacional",
    ],
  },
  {
    id: "consultoria",
    title: "Consultoria Jurídica",
    short: "Orientação jurídica especializada e eficiente para recuperação de crédito.",
    description:
      "Obtenha orientação jurídica especializada e eficiente com a Consultoria Jurídica da Sebba & Miranda. Contamos com capacidade técnica e experiência para alcançar clientes inadimplentes e estruturar a melhor estratégia de recuperação para a sua empresa.",
    highlights: [
      "Análise de carteira e risco",
      "Estratégia jurídica personalizada",
      "Acompanhamento por equipe especializada",
    ],
  },
  {
    id: "representacao",
    title: "Representação Judicial e Extrajudicial",
    short: "Atuação completa na negociação de débitos extrajudiciais e judiciais.",
    description:
      "Representamos sua empresa tanto na esfera extrajudicial — com negociação e acordos — quanto na esfera judicial, conduzindo as ações necessárias para a recuperação dos valores devidos com agilidade e transparência.",
    highlights: [
      "Negociação extrajudicial de débitos",
      "Condução de ações judiciais",
      "Atuação em todo o território nacional",
    ],
  },
];
