import { GlobeAsiaAustraliaIcon, LightBulbIcon, PaperAirplaneIcon, TagIcon } from "@heroicons/react/24/outline";

type Props = {};
function Services({}: Props) {
  return (
    <div className=" mt-6 p-4">
      <div className=" flex flex-col  space-y-3 items-center">
        <h3 className=" text-bluestyle">My Services</h3>
        <h2 className=" text-3xl md:text-4xl">I'm Available For Hire</h2>
      </div>

      <div className=" mt-4 flex flex-col items-center md:flex-row md:flex-wrap md:justify-center ">

        
      <div className=" cursor-pointer group m-4 hover:bg-bluestyle transition-all ease-linear duration-200 space-y-3 rounded-lg p-4 flex flex-col items-center justify-center text-center h-[300px]  border w-[300px]">
        <LightBulbIcon className=" group-hover:text-white  transition-all ease-linear duration-200  text-bluestyle w-[60px]" />
        <h4 className=" group-hover:text-white transition-all ease-linear duration-200 font-semibold text-xl">Design</h4>
        <p className=" group-hover:text-white transition-all ease-linear duration-200">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem.
        </p>
      </div>
      <div className=" cursor-pointer group m-4 hover:bg-bluestyle transition-all ease-linear duration-200 space-y-3 rounded-lg p-4 flex flex-col items-center justify-center text-center h-[300px]  border w-[300px]">
        <GlobeAsiaAustraliaIcon className=" group-hover:text-white  transition-all ease-linear duration-200  text-bluestyle w-[60px]" />
        <h4 className=" group-hover:text-white transition-all ease-linear duration-200 font-semibold text-xl">SEO</h4>
        <p className=" group-hover:text-white transition-all ease-linear duration-200">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem.
        </p>
      </div>
      <div className=" cursor-pointer group m-4 hover:bg-bluestyle transition-all ease-linear duration-200 space-y-3 rounded-lg p-4 flex flex-col items-center justify-center text-center h-[300px]  border w-[300px]">
        <TagIcon className=" group-hover:text-white  transition-all ease-linear duration-200  text-bluestyle w-[60px]" />
        <h4 className=" group-hover:text-white transition-all ease-linear duration-200 font-semibold text-xl">Digital Marketing</h4>
        <p className=" group-hover:text-white transition-all ease-linear duration-200">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem.
        </p>
      </div>
      <div className=" cursor-pointer group m-4 hover:bg-bluestyle transition-all ease-linear duration-200 space-y-3 rounded-lg p-4 flex flex-col items-center justify-center text-center h-[300px]  border w-[300px]">
        <PaperAirplaneIcon className=" group-hover:text-white  transition-all ease-linear duration-200  text-bluestyle w-[60px]" />
        <h4 className=" group-hover:text-white transition-all ease-linear duration-200 font-semibold text-xl">Migration</h4>
        <p className=" group-hover:text-white transition-all ease-linear duration-200">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem.
        </p>
      </div>
      </div>

    </div>
  );
}
export default Services;
