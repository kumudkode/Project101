// Simple interactivity and demo data for HealthHub
const state = {
  patients: [
    {
      id: 1,
      name: "Asha Patel",
      age: 32,
      contact: "+91 98765 43210",
      lastVisit: "2025-11-20",
    },
    {
      id: 2,
      name: "Rohit Sharma",
      age: 45,
      contact: "+91 91234 56789",
      lastVisit: "2025-11-28",
    },
    {
      id: 3,
      name: "Mira Joshi",
      age: 27,
      contact: "+91 99876 54321",
      lastVisit: "2025-11-30",
    },
  ],
  appointments: [
    {
      id: 1,
      time: "09:00",
      patient: "Asha Patel",
      reason: "Follow-up",
      status: "Confirmed",
      date: "2025-12-02",
    },
    {
      id: 2,
      time: "10:30",
      patient: "Rohit Sharma",
      reason: "New Patient",
      status: "Pending",
      date: "2025-12-02",
    },
    {
      id: 3,
      time: "14:00",
      patient: "Mira Joshi",
      reason: "Review",
      status: "Confirmed",
      date: "2025-12-03",
    },
  ],
  messages: 0,
  bills: 420,
};

// Utilities
const qs = (s) => document.querySelector(s);
const qsa = (s) => Array.from(document.querySelectorAll(s));

function renderStats() {
  qs("#statPatients").textContent = state.patients.length;
  qs("#statAppointments").textContent = state.appointments.filter(
    (a) => a.date === todayStr()
  ).length;
  qs("#statBills").textContent = `$${state.bills}`;
  qs("#statMessages").textContent = state.messages;
}

function todayStr() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(
    2,
    "0"
  )}-${String(d.getDate()).padStart(2, "0")}`;
}

function renderTodayAppointments() {
  const el = qs("#todayAppointments");
  el.innerHTML = "";
  const today = todayStr();
  state.appointments
    .filter((a) => a.date === today)
    .forEach((a) => {
      const li = document.createElement("li");
      li.innerHTML = `<strong>${a.time}</strong> — ${a.patient} <span class="muted">(${a.reason})</span>`;
      el.appendChild(li);
    });
}

function renderRecentPatients() {
  const el = qs("#recentPatients");
  el.innerHTML = "";
  state.patients.slice(0, 6).forEach((p) => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${p.name}</strong><br><span class="text-muted">Last visit: ${p.lastVisit}</span>`;
    el.appendChild(li);
  });
}

function renderPatientsTable(filter = "") {
  const tbody = qs("#patientsTable");
  tbody.innerHTML = "";
  state.patients
    .filter((p) => p.name.toLowerCase().includes(filter.toLowerCase()))
    .forEach((p) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `<td>${p.name}</td><td>${p.age}</td><td>${p.contact}</td><td>${p.lastVisit}</td><td><button class="btn" data-id="${p.id}" onclick="viewPatient(${p.id})">View</button></td>`;
      tbody.appendChild(tr);
    });
}

function renderAppointmentsTable(filter = "all") {
  const tbody = qs("#appointmentsTable");
  tbody.innerHTML = "";
  const today = todayStr();
  state.appointments
    .filter((a) => (filter === "all" ? true : a.date === today))
    .forEach((a) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `<td>${a.time}</td><td>${a.patient}</td><td>${a.reason}</td><td>${a.status}</td><td><button class="btn" onclick="completeAppointment(${a.id})">Complete</button></td>`;
      tbody.appendChild(tr);
    });
}

function viewPatient(id) {
  const p = state.patients.find((x) => x.id === id);
  if (!p) return;
  alert(
    `${p.name}\nAge: ${p.age}\nContact: ${p.contact}\nLast Visit: ${p.lastVisit}`
  );
}

function completeAppointment(id) {
  const a = state.appointments.find((x) => x.id === id);
  if (!a) return;
  a.status = "Completed";
  renderAll();
}

function renderAll() {
  renderStats();
  renderTodayAppointments();
  renderRecentPatients();
  renderPatientsTable();
  renderAppointmentsTable("all");
}

// Modal handling
const modalOverlay = qs("#modalOverlay");
const modalForm = qs("#modalForm");
const openNewPatientBtn = qs("#openNewPatient");
const openNewAppointmentBtns = [
  qs("#openNewAppointment"),
  qs("#openNewAppointment2"),
];

function openPatientModal() {
  qs("#modalTitle").textContent = "New Patient";
  qs("#patientName").value = "";
  qs("#patientAge").value = "";
  qs("#patientContact").value = "";
  qs("#patientNotes").value = "";
  modalOverlay.classList.remove("hidden");
}

function closeModal() {
  modalOverlay.classList.add("hidden");
}

openNewPatientBtn.addEventListener("click", openPatientModal);
qs("#closeModal").addEventListener("click", closeModal);
qs("#cancelModal").addEventListener("click", closeModal);

modalForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = qs("#patientName").value.trim();
  const age = qs("#patientAge").value.trim();
  const contact = qs("#patientContact").value.trim();
  if (!name) return alert("Please enter a name");
  const id = state.patients.length
    ? Math.max(...state.patients.map((p) => p.id)) + 1
    : 1;
  state.patients.unshift({
    id,
    name,
    age: age || "–",
    contact: lastOr(contact),
    lastVisit: todayStr(),
  });
  closeModal();
  renderAll();
});

function lastOr(v) {
  return v || "–";
}

// Search
qs("#searchPatient").addEventListener("input", (e) => {
  renderPatientsTable(e.target.value);
});

// Filters
qs("#filterToday").addEventListener("click", () =>
  renderAppointmentsTable("today")
);
qs("#filterAll").addEventListener("click", () =>
  renderAppointmentsTable("all")
);

// Sidebar toggle for small screens
qs(".sidebar-toggle").addEventListener("click", () => {
  const sb = document.querySelector(".sidebar");
  sb.style.display = sb.style.display === "none" ? "block" : "none";
});

// Open new appointment button leads to simple prompt (demo)
openNewAppointmentBtns.forEach((b) => {
  if (b)
    b.addEventListener("click", () => {
      const patient = prompt("Patient name");
      if (!patient) return;
      const time = prompt("Time (HH:MM)", "10:00");
      const id = state.appointments.length
        ? Math.max(...state.appointments.map((a) => a.id)) + 1
        : 1;
      state.appointments.unshift({
        id,
        time,
        patient,
        reason: "Scheduled",
        status: "Pending",
        date: todayStr(),
      });
      renderAll();
    });
});

// Small helper to render sections when menu clicked
qsa(".menu-item").forEach((it) =>
  it.addEventListener("click", () => {
    qsa(".menu-item").forEach((x) => x.classList.remove("active"));
    it.classList.add("active");
    const section = it.dataset.section;
    qsa(".section").forEach((s) => s.classList.remove("active-section"));
    qs("#" + section).classList.add("active-section");
  })
);

// footer year
qs("#year").textContent = new Date().getFullYear();

// initialize
renderAll();

// Expose small functions for inline onclick used in generated rows
window.viewPatient = viewPatient;
window.completeAppointment = completeAppointment;
