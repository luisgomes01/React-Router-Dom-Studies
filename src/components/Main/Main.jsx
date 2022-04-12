import "./Main.scss";

export default function Main({ children }) {
  return (
    <main className="container-fluid d-flex align-items-center justify-content-center main-section">
      {children}
    </main>
  );
}
