const API_BASE = "http://127.0.0.1:8000/api"

export async function requestAccess(payload: {
  email: string
  application: string
  project: string
  reason: string
}) {
  const response = await fetch(`${API_BASE}/approvals/request`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    throw new Error("Failed to submit access request")
  }

  return response.json()
}
