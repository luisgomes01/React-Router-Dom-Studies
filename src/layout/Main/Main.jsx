import "./Main.scss";

export default function Main({ children }) {
  return (
    <main className="container-fluid position-relative main-section">
      {children}
    </main>
  );
}
