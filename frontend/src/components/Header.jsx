import { Link } from 'react-router-dom';

const Header=()=>{
  return (
    <nav className="headnav navbar navbar-expand-lg navbar-light bg-light px-4">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold text-primary" to="/">Job Dash</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item socialLink">
              <Link className="nav-link " to="/">Home</Link>
            </li>
            <li className="nav-item socialLink">
              <Link className="nav-link" to="/post-job">Post a Job</Link>
            </li>
            <li className="nav-item socialLink">
              <Link className="nav-link" to="/applied">Applied Jobs</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
