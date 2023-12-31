import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Button>
      <Link
        // target="_blank"
        to={
          import.meta.env.VITE_GOOGLE_CALLBACK ||
          "http://localhost:3000/auth/google/callback"
        }
      >
        Login
      </Link>
    </Button>
  );
};

export default Login;
