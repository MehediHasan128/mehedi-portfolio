import banner from "../../assets/images/mehedi.png";

const Home = () => {
  return (
    <div className="relative bg-radial-[at_50%_55%] from-[#4f5764] via-[#21252B] to-[#21252B] to-100% min-h-screen">
        {/* Image */}
      <div className="w-[35%] absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10">
        <div>
          <img src={banner} alt="mehedi" />
        </div>
      </div>
      {/* Content */}
      <div className="absolute top-[20%] left-1/2 transform -translate-x-1/2">
        <h1 id="bannerContent" className="text-[280px] font-extrabold text-white">Portfolio</h1>
      </div>
    </div>
  );
};

export default Home;
