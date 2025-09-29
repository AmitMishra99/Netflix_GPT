import {  netflix_icon } from "../utils/constants";

const Header = () => {
  return (
    <div >
      <div className="bg-gradient-to-b from-black  h-20 inset-0 absolute z-10 overflow-x-hidden" ></div>
      <img
        className=" z-10 h-[10%] p-1 mx-4 absolute"
        src={netflix_icon}
        alt="netflix_logo"
      />
    </div>
  );
};

export default Header;
