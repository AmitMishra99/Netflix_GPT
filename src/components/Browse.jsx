import Header from "./Header";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";

const Browse = () => {
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div className="flex justify-between">
      <Header />
      <button
        onClick={handleSignOut}
        className="mx-8 my-4 p-3 rounded-2xl bg-blue-600 text-amber-100 z-10"
      >
        Sign Out
      </button>
    </div>
  );
};

export default Browse;
