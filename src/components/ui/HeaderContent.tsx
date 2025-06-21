const HeaderContent = () => {
  return (
    <div className="text-center pb-10">
      <h1 className="text-5xl font-semibold text-[#21252B]">
        ABOUT ME
      </h1>
      <div className="mt-5 w-[30%] mx-auto flex">
        <div className="w-full h-1 bg-linear-to-l from-[#6b6b6b] to-[#ffffff]"></div>
        <div className="w-full h-1 bg-[#6b6b6b]"></div>
        <div className="w-full h-1 bg-linear-to-r from-[#6b6b6b] to-[#ffffff]"></div>
      </div>
    </div>
  );
};

export default HeaderContent;
