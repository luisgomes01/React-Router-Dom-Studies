import { MAIN_SECTION_TEXT, MAIN_SECTION_TEXT2 } from "../utils/constants";
import { useParams } from "react-router-dom";
export default function Portfolio() {
  const { id } = useParams();
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
    </div>
  );
}
