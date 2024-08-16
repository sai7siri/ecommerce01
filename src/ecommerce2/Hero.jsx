import logo from"../assests/wall.jpg";

export default function Hero() {
  return (
    <section className="h-[650px] bg-red-100 pt-20">
      <div className="container grid grid-cols-1 md:grid-cols-2  gap-4 place-items-center transition-all">

        <div className="flex flex-col justify-center items-center">

         <div>
            <div className="flex items-center mb-3">
              <div className="w-[35px] h-[2px] bg-black mr-3"> </div>{" "}
              <p className="font-semibold">NEW TREND</p>
            </div>
      <div className="mb-5">
         <p className="uppercase text-2xl font-normal">autumn sale & discount's</p>
      </div>
      <div>
        <p className=" uppercase font-semibold text-3xl">  accessories & furniture</p>
      </div>

      <div className="mt-6">
         <p className="font-semibold ">DISCOVER MORE</p>
         <div className="w-[120px] h-[2px] bg-black mr-3"> </div>
      </div>
          
      </div>
        </div>

        <div className="">
          <img src={logo} alt="" className="h-[350px] md:h-[500px] " />
        </div>
      </div>
    </section>
  );
}
