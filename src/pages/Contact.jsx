import { MAIN_SECTION_TEXT, MAIN_SECTION_TEXT2 } from "../utils/constants";

export default function Contact() {
  return (
    <div id="what-the-hell-is-this">
      <div className="page-title">
        <h2>My contact</h2>
        <p className="lead">
          {MAIN_SECTION_TEXT}
          <br />
          {MAIN_SECTION_TEXT2}
        </p>
      </div>
    </div>
  );
}
