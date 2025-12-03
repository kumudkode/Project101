import Card from '../components/Card'
import './Home.css'

function Home() {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div>
          <h1 className="dashboard-title">Medical Dashboard</h1>
          <p className="dashboard-subtitle">Monitor patient health metrics and vital signs</p>
        </div>
        <div className="dashboard-actions">
          <button className="btn-primary">Add Patient</button>
          <button className="btn-secondary">Generate Report</button>
        </div>
      </div>

      <div className="metrics-grid">
        <Card 
          title="Heart Rate" 
          value="72 BPM" 
          subtitle="Normal Range" 
          icon="❤️" 
          color="success"
        />
        <Card 
          title="Blood Pressure" 
          value="120/80" 
          subtitle="Optimal" 
          icon="🩺" 
          color="success"
        />
        <Card 
          title="Temperature" 
          value="98.6°F" 
          subtitle="Normal" 
          icon="🌡️" 
          color="primary"
        />
        <Card 
          title="Oxygen Level" 
          value="98%" 
          subtitle="Excellent" 
          icon="🫁" 
          color="success"
        />
      </div>

      <div className="dashboard-panels">
        <div className="panel">
          <div className="panel-header">
            <h3>Recent Patients</h3>
            <button className="btn-ghost">View All</button>
          </div>
          <div className="patient-list">
            <div className="patient-item">
              <div className="patient-avatar">JD</div>
              <div className="patient-info">
                <div className="patient-name">John Doe</div>
                <div className="patient-condition">Routine Checkup</div>
              </div>
              <div className="patient-status success">Stable</div>
            </div>
            <div className="patient-item">
              <div className="patient-avatar">SM</div>
              <div className="patient-info">
                <div className="patient-name">Sarah Miller</div>
                <div className="patient-condition">Hypertension</div>
              </div>
              <div className="patient-status warning">Monitor</div>
            </div>
            <div className="patient-item">
              <div className="patient-avatar">RJ</div>
              <div className="patient-info">
                <div className="patient-name">Robert Johnson</div>
                <div className="patient-condition">Diabetes</div>
              </div>
              <div className="patient-status success">Controlled</div>
            </div>
          </div>
        </div>

        <div className="panel">
          <div className="panel-header">
            <h3>Today's Schedule</h3>
            <button className="btn-ghost">Manage</button>
          </div>
          <div className="schedule-list">
            <div className="schedule-item">
              <div className="schedule-time">09:00 AM</div>
              <div className="schedule-details">
                <div className="schedule-patient">Emma Wilson</div>
                <div className="schedule-type">Consultation</div>
              </div>
            </div>
            <div className="schedule-item">
              <div className="schedule-time">10:30 AM</div>
              <div className="schedule-details">
                <div className="schedule-patient">Michael Brown</div>
                <div className="schedule-type">Follow-up</div>
              </div>
            </div>
            <div className="schedule-item">
              <div className="schedule-time">02:00 PM</div>
              <div className="schedule-details">
                <div className="schedule-patient">Lisa Davis</div>
                <div className="schedule-type">Lab Results</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home