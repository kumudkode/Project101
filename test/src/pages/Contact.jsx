function Contact() {
  return (
    <div>
      <h1>Appointments</h1>
      <div style={{ marginTop: '2rem' }}>
        <div style={{ background: '#e8f4fd', padding: '1.5rem', borderRadius: '8px', border: '1px solid #2c5aa0', marginBottom: '1rem' }}>
          <h3 style={{ color: '#2c5aa0' }}>Upcoming Appointment</h3>
          <p><strong>Date:</strong> March 15, 2024</p>
          <p><strong>Time:</strong> 10:00 AM</p>
          <p><strong>Doctor:</strong> Dr. Johnson</p>
          <p><strong>Type:</strong> General Checkup</p>
        </div>
        <button style={{ 
          background: '#2c5aa0', 
          color: 'white', 
          padding: '0.75rem 1.5rem', 
          border: 'none', 
          borderRadius: '4px', 
          cursor: 'pointer',
          fontSize: '1rem'
        }}>
          Schedule New Appointment
        </button>
      </div>
    </div>
  )
}

export default Contact