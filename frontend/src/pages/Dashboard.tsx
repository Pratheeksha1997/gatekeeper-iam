export default function Dashboard() {
  return (
    <div style={{ padding: "16px" }}>
      <h2>Dashboard</h2>

      <div style={{ display: "flex", gap: "16px", marginTop: "16px" }}>
        <div style={{ border: "1px solid #ccc", padding: "12px" }}>
          <strong>Cursor Users</strong>
          <div>12</div>
        </div>

        <div style={{ border: "1px solid #ccc", padding: "12px" }}>
          <strong>Pending Requests</strong>
          <div>3</div>
        </div>

        <div style={{ border: "1px solid #ccc", padding: "12px" }}>
          <strong>Active Projects</strong>
          <div>4</div>
        </div>
      </div>
    </div>
  )
}
