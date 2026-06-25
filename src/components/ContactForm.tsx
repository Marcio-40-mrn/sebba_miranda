import { useState, type FormEvent } from "react";
import { company } from "../data/company";
import { Button } from "./ui/Button";
import { Whatsapp, Mail } from "./ui/Icon";
import "./ContactForm.css";

interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const empty: FormState = { name: "", email: "", phone: "", message: "" };

export function ContactForm() {
  const [form, setForm] = useState<FormState>(empty);
  const [sent, setSent] = useState(false);

  const update =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));

  const buildText = () =>
    `Olá! Meu nome é ${form.name}.%0A` +
    `E-mail: ${form.email}%0A` +
    `Telefone: ${form.phone}%0A%0A` +
    `${form.message}`;

  // Sem backend: o formulário compõe uma mensagem e abre o e-mail do cliente.
  // (Pode ser trocado por um endpoint/serviço de e-mail no futuro.)
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contato pelo site — ${form.name}`);
    const body = buildText().replace(/%0A/g, "\n");
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${encodeURIComponent(
      body
    )}`;
    setSent(true);
  };

  const sendWhatsapp = () => {
    const url = `https://wa.me/${company.whatsapp}?text=${buildText()}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <form className="cform" onSubmit={handleSubmit}>
      <div className="cform__row">
        <label className="cform__field">
          <span>Nome</span>
          <input
            type="text"
            required
            value={form.name}
            onChange={update("name")}
            placeholder="Seu nome"
          />
        </label>
        <label className="cform__field">
          <span>Telefone</span>
          <input
            type="tel"
            value={form.phone}
            onChange={update("phone")}
            placeholder="(11) 90000-0000"
          />
        </label>
      </div>

      <label className="cform__field">
        <span>E-mail</span>
        <input
          type="email"
          required
          value={form.email}
          onChange={update("email")}
          placeholder="voce@empresa.com"
        />
      </label>

      <label className="cform__field">
        <span>Como podemos ajudar?</span>
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={update("message")}
          placeholder="Conte um pouco sobre a sua necessidade de recuperação de crédito."
        />
      </label>

      {sent && (
        <p className="cform__sent">
          Abrimos seu aplicativo de e-mail com a mensagem pronta. Se preferir,
          envie por WhatsApp.
        </p>
      )}

      <div className="cform__actions">
        <Button type="submit" variant="primary" size="lg">
          <Mail /> Enviar por e-mail
        </Button>
        <Button type="button" variant="gold" size="lg" onClick={sendWhatsapp}>
          <Whatsapp /> Enviar por WhatsApp
        </Button>
      </div>
    </form>
  );
}
