/**
 * Dados institucionais da empresa, centralizados para fácil edição.
 * Telefones e e-mail foram extraídos do site atual.
 */
export const company = {
  name: "Sebba & Miranda",
  tagline: "Recuperação de Crédito e Consultoria Jurídica em todo o Brasil",
  email: "contato@sebbaemirandarecuperacoes.com.br",
  phones: [
    { label: "Fixo", number: "11 3230-2868", tel: "+551132302868" },
    { label: "Celular", number: "11 99230-9884", tel: "+5511992309884" },
  ],
  // Número usado no botão flutuante e nos links de WhatsApp (somente dígitos, com DDI).
  whatsapp: "5511992309884",
  whatsappMessage:
    "Olá! Vim pelo site e gostaria de saber mais sobre os serviços de recuperação de crédito.",
  address: {
    // Endereço aproximado a partir do mapa do site atual (São Paulo/SP). Confirmar.
    full: "São Paulo — SP",
    mapsEmbed:
      "https://www.google.com/maps?q=Av.+Paulista,+São+Paulo&output=embed",
    mapsLink: "https://www.google.com/maps/@-23.4972519,-46.627591,15z",
  },
  social: {
    instagram: "",
    linkedin: "",
  },
} as const;

export type Company = typeof company;
