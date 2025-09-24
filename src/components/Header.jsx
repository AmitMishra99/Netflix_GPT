import { netflix_background } from "../utils/constants";

const Header = () => {
  return (
    <div>
      <div className="bg-gradient-to-b from-black h-20 inset-0 absolute z-10"></div>
      <img
        className=" z-10 h-[10%] p-1 mx-4 absolute"
        src={netflix_background}
        alt="netflix_logo"
      />
    </div>
  );
};

export default Header;
