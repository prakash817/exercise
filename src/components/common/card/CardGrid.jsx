import "./CardGrid.css";

export default function CardGrid({ items }) {
  return (
    <div className="cards">
      {items.map(({ icon, title, description }) => (
        <div key={title} className="card">
          <div className="icon">{icon}</div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      ))}
    </div>
  )
}
