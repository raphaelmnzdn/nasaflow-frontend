import './app.css';
import logo from './assets/logo.png'; // adapte le chemin à ton projet

function App() {
  return (
    <header className="navbar">
      <a href="/" className="logo">
        <img src={logo} alt="Bewezy" className="logo-img" />
        Bewezy
      </a>

      <input type="checkbox" id="menu-toggle" className="menu-toggle" />
      <label htmlFor="menu-toggle" className="hamburger">&#9776;</label>

      <nav className="nav-links">
        <a href="/about">À propos</a>
        <a href="/contact">Contact</a>
        <div className="navbar-socials">
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noreferrer">
            <i className="fab fa-tiktok"></i>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default App;
