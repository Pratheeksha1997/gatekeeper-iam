import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="border-b px-6 py-3 flex gap-6">
      <span className="font-semibold">GateKeeper</span>

      <Link to="/">Dashboard</Link>
      <Link to="/request">Request Access</Link>
      <Link to="/approvals">Approvals</Link>
      <Link to="/access">User Access</Link>
    </nav>
  )
}
