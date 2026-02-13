import { useNavigate } from "react-router-dom";

export default function NavButton({ text, to }) {
  const navigate = useNavigate();

  return (
    <button className="nav-btn" onClick={() => navigate(to)}>
      {text}
    </button>
  );
}

