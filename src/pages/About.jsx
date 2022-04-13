import { MAIN_SECTION_TEXT, MAIN_SECTION_TEXT2 } from "../utils/constants";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "../components/Button";

export default function About() {
  const location = useLocation();

  const navigate = useNavigate();

  if (location.pathname === "/about/luis") {
    return (
      <>
        <h1 className="mt-5">About Luís</h1>
        <Button action={() => navigate("/about")} value="Head back" />
      </>
    );
  }

  if (location.pathname === "/about/clarice") {
    return (
      <>
        <h1 className="mt-5">About Clarice</h1>
        <Button action={() => navigate("/about")} value="Head back" />
      </>
    );
  }

  if (location.pathname === "/about/be") {
    return (
      <>
        <h1 className="mt-5">About Bê</h1>
        <Button action={() => navigate("/about")} value="Head back" />
      </>
    );
  }

  if (location.pathname === "/about/jair") {
    return (
      <>
        <h1 className="mt-5">About Jair</h1>
        <Button action={() => navigate("/about")} value="Head back" />
      </>
    );
  }

  if (location.pathname === "/about/jao") {
    return (
      <>
        <h1 className="mt-5">About Jão</h1>
        <Button action={() => navigate("/about")} value="Head back" />
      </>
    );
  }

  if (location.pathname === "/about/caio") {
    return (
      <>
        <h1 className="mt-5">About Caio</h1>
        <Button action={() => navigate("/about")} value="Head back" />
      </>
    );
  }

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
    </div>
  );
}
