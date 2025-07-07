import { Link, NavLink } from 'react-router';

const Header=()=>{
  return (
    <nav className="headnav navbar navbar-expand-lg navbar-light bg-light px-4 fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold text-primary" to="/">Job Dash</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item socialLink">
              <NavLink className={({isActive})=>isActive ? "nav-link active text-primary fw-bold" :"nav-link"} to="/">Home</NavLink>
            </li>
            <li className="nav-item socialLink">
              <NavLink className= {({isActive})=>isActive ? "nav-link active text-primary fw-bold" : "nav-link"}  to="/post-job">Post a Job</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
