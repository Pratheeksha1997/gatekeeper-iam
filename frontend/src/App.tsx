import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import RequestAccess from "./pages/RequestAccess"
import Approvals from "./pages/Approvals"
import UserAccess from "./pages/UserAccess"
import Navbar from "./components/Navbar"

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/request" element={<RequestAccess />} />
        <Route path="/approvals" element={<Approvals />} />
        <Route path="/access" element={<UserAccess />} />
      </Routes>
    </BrowserRouter>
  )
}

