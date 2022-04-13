import { MAIN_SECTION_TEXT, MAIN_SECTION_TEXT2 } from "../utils/constants";
import { useParams, useNavigate } from "react-router-dom";

export default function Portfolio() {
  const { id } = useParams();
  const navigate = useNavigate();

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
