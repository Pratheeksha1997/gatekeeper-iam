import { useState } from "react"

type UserAccess = {
  email: string
  project: string
}

export default function UserAccess() {
  const [users, setUsers] = useState<UserAccess[]>([
    { email: "dev1@company.com", project: "Project A" },
    { email: "dev2@company.com", project: "Project B" },
  ])

  function removeAccess(email: string) {
    console.log("Remove access for", email)
    setUsers(users.filter(u => u.email !== email))
  }

  return (
    <div style={{ padding: "16px" }}>
      <h2>User Access</h2>

      {users.length === 0 && <p>No active users</p>}

      {users.map(user => (
        <div
          key={user.email}
          style={{ border: "1px solid #ccc", padding: "12px", marginTop: "12px" }}
        >
          <span>
            {user.email} — {user.project}
          </span>
          <button
            onClick={() => removeAccess(user.email)}
            style={{ marginLeft: "12px" }}
          >
            Remove Access
          </button>
        </div>
      ))}
    </div>
  )
}
