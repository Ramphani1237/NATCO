import { useParams } from "react-router-dom";

export default function DepartmentView() {
  const { deptId } = useParams();

  return (
    <div>
      <h2>{deptId.toUpperCase()} Department</h2>
      <p>Department information, services, timings, etc.</p>
    </div>
  );
}
