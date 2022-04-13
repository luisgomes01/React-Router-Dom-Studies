export default function Button({ action, value }) {
  return (
    <button className="btn btn-primary" onClick={action}>
      {value}
    </button>
  );
}
