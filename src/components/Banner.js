import BannerImage from "../assets/BannerImage.jpg";

const Banner = () => {
  return (
    <div  id="home" className="h-[80vh]">
      <img
        src={BannerImage}
        alt="Banner Image"
        className="absolute w-full h-[80vh] object-cover origin-bottom "
      />

      <div className="relative bg-black text-white px-14 bg-opacity-50 h-[80vh] flex flex-col justify-center">
        <h1 className="uppercase text-7xl font-bold leading-tight  ">
          Laser-sharp Website <br/> <span className="text-[#FFA808]">that hit the bull's eye of</span><br/> your business objective
        </h1>
        
       <div className="pl-4 ">
       <p className=" pt-2 w-[60%] ">
        Understanding your needs quickly and thoroughly, D&Wtech fuses crisp content into cool designs to craft groowing business !
        </p>
        
      <button className=" py-3 mt-4  px-5 rounded-xl bg-[#FFA808] hover:bg-slate-300 transition-all duration-300 ease-linear hover:text-[#FFA808] w-fit" >
        Learn More
      </button>
       </div>
      </div>
    </div>
  );
};

export default Banner;
