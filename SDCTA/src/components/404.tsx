import { useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer/Footer";
import "./404.css";

export const Error404: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="h1-404">404</h1>
      <h2 className="h2-404pagenotfound">Page not Found</h2>
      <p className="p-404text">
        Oops! The page you are looking for does not exist. It might have been
        moved or deleted.
      </p>

      <div className="container">
        <button
          className="back-to-home"
          onClick={() => {
            navigate("/");
          }}
        >
          Back to Home
        </button>
      </div>
      <Footer />
    </div>
  );
};
