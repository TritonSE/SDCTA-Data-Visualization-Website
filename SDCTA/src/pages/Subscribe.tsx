import "./Subscribe.css";
import { useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer/Footer";

export const Subscribe: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="h1-404">Coming Soon!</h1>
      {/* <h2 className="h2-404pagenotfound">Page not Found</h2> */}

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
