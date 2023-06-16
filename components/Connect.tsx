import Image from "next/image";
import carlos from "../assests/carlos.png";

type Props = {};
function Connect({}: Props) {
  return (
    <main className=" mt-10">
      <div className=" p-4 md:p-0 md:px-8 md:flex md:items-center md:justify-center md:space-x-4">
        <div className=" mb-4 md:mb-0">
          <Image
            src={carlos}
            width={600}
            height={712}
            alt=" Carlos Charlie Castro Profile Picture"
            className="  w-[400px] lg:w-[500px]"
          />
        </div>
        <div className=" space-y-4 md:w-[600px]">
          <h2 className=" md:text-3xl lg:text-5xl font-bold text-2xl">
            {" "}
            Your Turn To Change Your Dream into Reality !!
          </h2>
          <p className=" md:text-lg">
            Don't wait another moment. Contact me straight away and let's embark
            on this transformative journey together. Your future awaits!
          </p>
          <div className="">
          <button className="  bg-blue-500  px-5 py-3  text-white hover:scale-110 transition-all ease-linear duration-200 cursor-pointer hover:shadow-lg rounded-lg">
            Contact
          </button>

          </div>
        </div>
      </div>
    </main>
  );
}
export default Connect;
