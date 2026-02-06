import { useState } from "react";
import { tecidos } from "../data/tecidos";

import CardTecido from "../components/CardTecido";
import ModalTecido from "../components/ModalTecido";

import "./Catalogo.css";

export default function Catalogo() {
  const [selecionado, setSelecionado] = useState(null);

  return (
    <div className="catalogo">

      <header className="catalogo-header">

            <div className="header-left">

                <div className="header-text">
                <h1>Catálogo de Tecidos Laterais</h1>
                <span>Gram-Vida Colchões</span>
                </div>

            </div>

        </header>


      <div className="catalogo-grid">
        {tecidos.map((t) => (
          <CardTecido
            key={t.codigo}
            tecido={t}
            onClick={setSelecionado}
          />
        ))}
      </div>

      <ModalTecido
        tecido={selecionado}
        onClose={() => setSelecionado(null)}
      />

    </div>
  );
}
