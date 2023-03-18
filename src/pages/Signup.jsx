import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="text-center">
      <h1 className="mt-5 mb-5">Sign up {`(Empty page)`}</h1>
      <Link className="btn btn-dark" to="/">
        Back to homepage
      </Link>
    </div>
  );
}
