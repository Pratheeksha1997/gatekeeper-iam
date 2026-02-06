import { useState } from "react"

export default function RequestAccess() {
  const [email, setEmail] = useState("")
  const [project, setProject] = useState("")
  const [reason, setReason] = useState("")
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    console.log("Access Request:", {
      email,
      application: "CURSOR",
      project,
      reason,
    })

    setSubmitted(true)
    setEmail("")
    setProject("")
    setReason("")
  }

  return (
    <div style={{ padding: "16px", maxWidth: "500px" }}>
      <h2>Request Access</h2>

      {submitted && (
        <p style={{ color: "green" }}>Request submitted successfully</p>
      )}

      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label><br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: "100%" }}
          />
        </div>

        <div>
          <label>Application</label><br />
          <input value="Cursor" disabled style={{ width: "100%" }} />
        </div>

        <div>
          <label>Project</label><br />
          <select
            value={project}
            onChange={(e) => setProject(e.target.value)}
            required
            style={{ width: "100%" }}
          >
            <option value="">Select project</option>
            <option value="project_a">Project A</option>
            <option value="project_b">Project B</option>
          </select>
        </div>

        <div>
          <label>Reason</label><br />
          <textarea
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            required
            rows={3}
            style={{ width: "100%" }}
          />
        </div>

        <button type="submit" style={{ marginTop: "12px" }}>
          Submit Request
        </button>
      </form>
    </div>
  )
}
