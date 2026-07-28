import { Link, Route, Routes } from 'react-router-dom'
import appLogo from '../../../docs/octofitapp-small.png'
import './App.css'

function App() {
  return (
    <div className="container py-4">
      <header className="d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3 mb-4">
        <div className="d-flex align-items-center gap-3">
          <img src={appLogo} alt="OctoFit Tracker logo" width="64" height="64" />
          <div>
            <h1 className="h3 mb-1">OctoFit Tracker</h1>
            <p className="text-muted mb-0">A modern multi-tier fitness experience</p>
          </div>
        </div>
        <nav className="nav nav-pills">
          <Link className="nav-link" to="/">Overview</Link>
          <Link className="nav-link" to="/activity">Activity</Link>
          <Link className="nav-link" to="/teams">Teams</Link>
        </nav>
      </header>

      <main className="row g-4">
        <section className="col-lg-8">
          <div className="card shadow-sm">
            <div className="card-body">
              <h2 className="h4">Welcome to your fitness hub</h2>
              <p className="text-muted">
                Track workouts, manage teams, and celebrate progress from a single dashboard.
              </p>
              <Routes>
                <Route
                  path="/"
                  element={
                    <div className="alert alert-success mb-0">
                      The presentation layer is live on port 5173 and ready for your next feature.
                    </div>
                  }
                />
                <Route
                  path="/activity"
                  element={<div className="alert alert-primary mb-0">Log activities and review your streaks.</div>}
                />
                <Route
                  path="/teams"
                  element={<div className="alert alert-info mb-0">Create squads and compare leaderboard performance.</div>}
                />
              </Routes>
            </div>
          </div>
        </section>

        <aside className="col-lg-4">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h3 className="h6 text-uppercase text-muted">Stack</h3>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">React 19 + Vite</li>
                <li className="list-group-item">Express + TypeScript</li>
                <li className="list-group-item">MongoDB + Mongoose</li>
              </ul>
            </div>
          </div>
        </aside>
      </main>
    </div>
  )
}

export default App
