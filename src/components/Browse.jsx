import Header from "./Header";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
// import { useSelector } from "react-redux";

const Browse = () => {
  const navigate = useNavigate();
  // const user = useSelector((store) => store.user);

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
      <div className="flex z-10">
       {/* { <img
          className="my-5 h-12 w-12 rounded-[50%]"
          src={user?.photoURL || "https://via.placeholder.com/50"}
          alt={user?.displayName || "User"}
        />} */}
        <button
          onClick={handleSignOut}
          className="mx-2 my-4 p-3 rounded-2xl bg-blue-600 text-amber-100 z-10"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Browse;
