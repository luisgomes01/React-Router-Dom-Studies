import { MAIN_SECTION_TEXT, MAIN_SECTION_TEXT2 } from "../utils/constants";
import { Link, Outlet } from "react-router-dom";

export default function About() {
  return (
    <div id="what-the-hell-is-this">
      <div className="page-title">
        <h2>About Page</h2>
      </div>
      <div className="about-actions d-flex justify-content-center my-3">
        <Link className="btn btn-primary" to="/about/luis">
          About Luís
        </Link>
        <Link className="btn btn-primary" to="/about/clarice">
          About Clarice
        </Link>
        <Link className="btn btn-primary" to="/about/be">
          About Bê
        </Link>
        <Link className="btn btn-primary" to="/about/jair">
          About Jair
        </Link>
        <Link className="btn btn-primary" to="/about/jao">
          About Jão
        </Link>
        <Link className="btn btn-primary" to="/about/caio">
          About Caio
        </Link>
      </div>
      <p className="lead">
        {MAIN_SECTION_TEXT}
        <br />
        {MAIN_SECTION_TEXT2}
      </p>
      <Outlet />
    </div>
  );
}
