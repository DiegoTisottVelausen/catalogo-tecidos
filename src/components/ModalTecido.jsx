import "./ModalTecido.css";

export default function ModalTecido({ tecido, onClose }) {
  if (!tecido) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      
      <div
        className="modal-box"
        onClick={(e) => e.stopPropagation()}
      >
        
        <img
          src={tecido.imagem}
          className="modal-img"
        />

        <div className="modal-content">
            <h2>{tecido.codigo}</h2>
            <p>{tecido.modelo} • {tecido.cor}</p>
            <p>{tecido.composicao}</p>
            <p>{tecido.gramatura}</p>

          <button onClick={onClose}>
            Fechar
          </button>
        </div>

      </div>
    </div>
  );
}
