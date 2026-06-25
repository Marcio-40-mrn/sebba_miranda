import { useEffect, useState } from "react";
import { Button } from "./ui/Button";
import "./CookieBanner.css";

const STORAGE_KEY = "sm-cookie-consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "accepted");
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie" role="dialog" aria-label="Aviso de cookies">
      <p className="cookie__text">
        Utilizamos cookies para proporcionar uma melhor experiência. Ao
        continuar navegando, você concorda com a nossa Política de Privacidade.
      </p>
      <div className="cookie__actions">
        <Button variant="gold" onClick={accept}>
          Aceitar
        </Button>
      </div>
    </div>
  );
}
