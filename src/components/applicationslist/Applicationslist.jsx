import "./applicationslist.scss";

export default function Applicationslist({ id, title, active, setSelected }) {
  return (
    <li
      className={active ? "applicationslist active" : "applicationslist"}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
}
