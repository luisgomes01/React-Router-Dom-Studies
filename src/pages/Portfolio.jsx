import {
  MAIN_SECTION_TEXT,
  MAIN_SECTION_TEXT2,
  NOT_FOUND_TEXT,
} from "../utils/constants";
import { useParams, useNavigate, useLocation } from "react-router-dom";

export default function Portfolio() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location);

  function generateIdAndNavigate() {
    const generatedId = Math.floor(Math.random() * 11);
    navigate(`${generatedId}`);
  }

  if (location.pathname === "/portfolio") {
    return (
      <div id="what-the-hell-is-this">
        <div className="page-title">
          <h2>
            <h1>Make sure the url has an ID</h1>
          </h2>
          <p className="lead">{NOT_FOUND_TEXT}</p>
        </div>
        <button onClick={() => generateIdAndNavigate()}>Add ID</button>
      </div>
    );
  }

  return (
    <div id="what-the-hell-is-this">
      <div className="page-title">
        <h2>My Portfolio {id}</h2>
        <p className="lead">
          {MAIN_SECTION_TEXT}
          <br />
          {MAIN_SECTION_TEXT2}
        </p>
      </div>
      <button onClick={() => navigate("/")}>Head home</button>
    </div>
  );
}
