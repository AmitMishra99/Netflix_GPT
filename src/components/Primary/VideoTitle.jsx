const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video p-20  absolute bg-gradient-to-r from-black bg">
      <h1 className="font-bold text-4xl mt-38 text-white">{title}</h1>
      <p className="w-90 mt-4 text-white">{overview}</p>
      <div className="mt-8">
        <button className="mr-2 bg-white  px-4 py-2.5 rounded-lg  hover:opacity-50 ">
          Play ▼{" "}
        </button>
        <button className="mr-2 rounded-lg px-4 py-2.5 bg-gray-600 text-white ">
          ⓘ More Info{" "}
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
