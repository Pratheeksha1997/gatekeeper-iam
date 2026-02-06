import { useState } from "react"

type Request = {
  id: string
  email: string
  project: string
  reason: string
}

export default function Approvals() {
  const [requests, setRequests] = useState<Request[]>([
    {
      id: "1",
      email: "dev1@company.com",
      project: "Project A",
      reason: "Feature development",
    },
    {
      id: "2",
      email: "dev2@company.com",
      project: "Project B",
      reason: "Bug fixes",
    },
  ])

  function approve(id: string) {
    console.log("Approved request", id)
    setRequests(requests.filter(r => r.id !== id))
  }

  function reject(id: string) {
    console.log("Rejected request", id)
    setRequests(requests.filter(r => r.id !== id))
  }

  return (
    <div style={{ padding: "16px" }}>
      <h2>Approvals</h2>

      {requests.length === 0 && <p>No pending requests</p>}

      {requests.map(req => (
        <div
          key={req.id}
          style={{ border: "1px solid #ccc", padding: "12px", marginTop: "12px" }}
        >
          <div><strong>{req.email}</strong></div>
          <div>Project: {req.project}</div>
          <div>Reason: {req.reason}</div>

          <div style={{ marginTop: "8px" }}>
            <button onClick={() => approve(req.id)}>Approve</button>
            <button onClick={() => reject(req.id)} style={{ marginLeft: "8px" }}>
              Reject
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
