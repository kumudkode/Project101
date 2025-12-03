import './Card.css'

function Card({ title, value, subtitle, icon, color = 'primary' }) {
  return (
    <div className={`health-card ${color}`}>
      <div className="card-header">
        <div className="card-icon">
          {icon}
        </div>
        <h3 className="card-title">{title}</h3>
      </div>
      <div className="card-content">
        <div className="card-value">{value}</div>
        <div className="card-subtitle">{subtitle}</div>
      </div>
    </div>
  )
}

export default Card