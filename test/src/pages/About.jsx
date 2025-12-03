import './About.css'

function About() {
  return (
    <div className="records-page">
      <div className="page-header">
        <h1 className="page-title">Patient Records</h1>
        <p className="page-subtitle">Comprehensive medical history and documentation</p>
        <div className="page-actions">
          <button className="btn-primary">Add Record</button>
          <button className="btn-secondary">Export Data</button>
        </div>
      </div>

      <div className="records-grid">
        <div className="record-card">
          <div className="record-header">
            <div className="record-type consultation">Consultation</div>
            <div className="record-date">January 15, 2024</div>
          </div>
          <div className="record-content">
            <h3 className="record-title">Annual Physical Examination</h3>
            <div className="record-details">
              <div className="detail-item">
                <span className="detail-label">Physician:</span>
                <span className="detail-value">Dr. Sarah Johnson, MD</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Department:</span>
                <span className="detail-value">Internal Medicine</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Diagnosis:</span>
                <span className="detail-value">Routine checkup - No abnormalities detected</span>
              </div>
            </div>
            <div className="record-notes">
              <p>Patient presents in good health. All vital signs within normal limits. Recommended annual follow-up and routine screenings.</p>
            </div>
          </div>
          <div className="record-footer">
            <button className="btn-ghost">View Details</button>
            <button className="btn-ghost">Download</button>
          </div>
        </div>

        <div className="record-card">
          <div className="record-header">
            <div className="record-type lab">Lab Results</div>
            <div className="record-date">December 20, 2023</div>
          </div>
          <div className="record-content">
            <h3 className="record-title">Comprehensive Metabolic Panel</h3>
            <div className="record-details">
              <div className="detail-item">
                <span className="detail-label">Laboratory:</span>
                <span className="detail-value">City Medical Laboratory</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Ordered by:</span>
                <span className="detail-value">Dr. Michael Chen, MD</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Status:</span>
                <span className="detail-value status-normal">All values normal</span>
              </div>
            </div>
            <div className="lab-results">
              <div className="lab-item">
                <span className="lab-name">Glucose</span>
                <span className="lab-value normal">95 mg/dL</span>
                <span className="lab-range">(70-100)</span>
              </div>
              <div className="lab-item">
                <span className="lab-name">Cholesterol</span>
                <span className="lab-value normal">180 mg/dL</span>
                <span className="lab-range">(&lt;200)</span>
              </div>
              <div className="lab-item">
                <span className="lab-name">HDL</span>
                <span className="lab-value normal">55 mg/dL</span>
                <span className="lab-range">(&gt;40)</span>
              </div>
            </div>
          </div>
          <div className="record-footer">
            <button className="btn-ghost">View Details</button>
            <button className="btn-ghost">Download</button>
          </div>
        </div>

        <div className="record-card">
          <div className="record-header">
            <div className="record-type prescription">Prescription</div>
            <div className="record-date">November 8, 2023</div>
          </div>
          <div className="record-content">
            <h3 className="record-title">Medication Prescription</h3>
            <div className="record-details">
              <div className="detail-item">
                <span className="detail-label">Prescribed by:</span>
                <span className="detail-value">Dr. Emily Rodriguez, MD</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Condition:</span>
                <span className="detail-value">Seasonal Allergies</span>
              </div>
            </div>
            <div className="prescription-list">
              <div className="prescription-item">
                <div className="med-name">Loratadine 10mg</div>
                <div className="med-instructions">Take once daily, as needed</div>
                <div className="med-duration">30 days supply</div>
              </div>
            </div>
          </div>
          <div className="record-footer">
            <button className="btn-ghost">View Details</button>
            <button className="btn-ghost">Refill</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About