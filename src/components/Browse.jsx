import Header from "./Header";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";

const Browse = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message)
      });
  };
  return (
    <div className="flex justify-between">
      <Header />
      <div className="flex z-10">
       <img
          className="my-3 h-12 w-12 ml-1 rounded-[50%]"
          src={user?.photoURL }
          alt={user?.displayName || "User"}
        />
        <button
          onClick={handleSignOut}
          className="mx-4 my-3 px-2 ml-2 rounded-2xl bg-blue-400 text-amber-100 z-10"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Browse;

