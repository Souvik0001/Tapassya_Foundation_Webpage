import { NavLink, Outlet } from "react-router-dom"

export default function Root() {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 rounded-md text-sm ${isActive ? "bg-amber-700 text-white" : "text-gray-700 hover:text-amber-700"}`

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/logo.svg" alt="Kishalay Vidyaniketan" className="h-8 w-8" />
            <span className="font-semibold">Kishalay Vidyaniketan</span>
          </div>
          <nav className="flex gap-2">
            <NavLink to="/" className={linkClass} end>Home</NavLink>
            <NavLink to="/admissions" className={linkClass}>Admissions</NavLink>
            <NavLink to="/login" className={linkClass}>Login</NavLink>
          </nav>
        </div>
      </header>

      <main className="flex-1"><Outlet /></main>

      <footer className="bg-white border-t">
        <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-gray-600">
          © {new Date().getFullYear()} Kishalay Vidyaniketan
        </div>
      </footer>
    </div>
  )
}
