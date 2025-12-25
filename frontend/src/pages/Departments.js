import { Link } from "react-router-dom";

const departments = [
  { id: "radiation", name: "Radiation Oncology" },
  { id: "medical", name: "Medical Oncology" },
  { id: "surgical", name: "Surgical Oncology" },
];

export default function Departments() {
  return (
    <div className="page">
      <h1>Departments</h1>
      {departments.map(d => (
        <Link key={d.id} to={`/departments/${d.id}`}>
          <div className="card">{d.name}</div>
        </Link>
      ))}
    </div>
  );
}
