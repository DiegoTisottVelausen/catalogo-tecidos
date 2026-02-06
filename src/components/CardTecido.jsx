import "./CardTecido.css";

export default function CardTecido({ tecido, onClick }) {
  return (
    <div className="card-tecido" onClick={() => onClick(tecido)}>
      
      <div className="card-img">
        <img src={tecido.thumb} alt={tecido.codigo} />
      </div>

      <div className="card-info">
        <h2>{tecido.codigo}</h2>
        <p>{tecido.modelo} • {tecido.cor}</p>
        <p>{tecido.composicao}</p>
        <p>{tecido.gramatura}</p>
      </div>

    </div>
  );
}
