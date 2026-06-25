import { useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { WhatsappButton } from "./components/WhatsappButton";
import { CookieBanner } from "./components/CookieBanner";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { HowToHire } from "./pages/HowToHire";
import { Contact } from "./pages/Contact";

/** Rola para o topo a cada mudança de rota. */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
  return null;
}

export function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/a-empresa" element={<About />} />
          <Route path="/servicos" element={<Services />} />
          <Route path="/como-contratar" element={<HowToHire />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
      <WhatsappButton />
      <CookieBanner />
    </>
  );
}
