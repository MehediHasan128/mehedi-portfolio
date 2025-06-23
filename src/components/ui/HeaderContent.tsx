const HeaderContent = ({title, dark}: {title: string; dark?: boolean;}) => {
  return (
    <div className="text-center mb-10 md:mb-20">
      <h1 className={`text-3xl md:text-4xl 2xl:text-5xl xl:font-semibold ${dark? "text-[#ccd0cf]" : "text-[#11212d]"}`}>
        {title}
      </h1>
      <div className="mt-3 2xl:mt-5 w-[80%] md:w-[60%] xl:w-[30%] mx-auto flex">
        <div className="w-full h-1 bg-linear-to-l from-[#6b6b6b] to-transparent"></div>
        <div className="w-full h-1 bg-[#6b6b6b]"></div>
        <div className="w-full h-1 bg-linear-to-r from-[#6b6b6b] to-transparent"></div>
      </div>
    </div>
  );
};

export default HeaderContent;
