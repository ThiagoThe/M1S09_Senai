import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="header bg-body-secondary">
      <nav className="navbar navbar-expand-lg  container d-flex ">
        <span className="flex-grow-1">Tarefas.dev</span>
        <ul className="navbar-nav ">
          <li className="nav-item me-auto">
            <Link
              class Name="nav-link active"
              aria-current="page"
              to="/src/pages/Home.jsx"
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/src/pages/QuemSou.jsx">
              Quem sou
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
