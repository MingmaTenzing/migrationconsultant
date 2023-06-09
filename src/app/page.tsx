"use client";
import Image from "next/image";
import Nav from "../../components/Nav";
import { Typewriter } from "react-simple-typewriter";
import FacebookIcon from "../../assests/Facebook.png";
import InstagramIcon from "../../assests/Instagram.png";
import LinkedInIcon from "../../assests/LinkedIn.png"
import profilePicture from "../../assests/profile.png"
export default function Home() {
  return (
    <main className=" lg:w-[1200px] m-auto lg:flex  lg:items-center py-[130px] md:p-10 md:py-[160px] lg:py-[60px] p-4 bg-[#f6f6f6]">
      <div className=" space-y-3 md:space-y-6">
        <h1 className=" font-semibold md:text-xl "> Carlos Castro</h1>
        <h2 className=" font-bold text-4xl md:text-5xl">
          I'm a
          <span className="  text-blue-500 ml-3">
            <Typewriter
              words={["Migration Consultant", "Executive Manager", "S. Marketing Trainer"]}
              loop={true}
              typeSpeed={70}
              cursor
              cursorColor="#1e88e9"
            />
          </span>
        </h2>
        <p className=" md:text-xl font-light text-gray-500">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam.
        </p>

        <div className=" flex space-x-3 md:space-x-4 ">
          <Image src={LinkedInIcon} alt="LinkedIn Logo " width={100} height={100} className="w-10     hover:scale-110 transition-all ease-linear duration-150" />
          <Image src={InstagramIcon} alt="Instagram Logo " width={100} height={100} className="w-10     hover:scale-110 transition-all ease-linear duration-150" />
          <Image src={FacebookIcon} alt="Facebook Logo " width={100} height={100} className="w-10     hover:scale-110 transition-all ease-linear duration-150" />

        </div>
      </div>

      <div>

        <Image src={profilePicture} alt="Carlos Castro Image" width={697} height={700} />
      </div>


    </main>
  );
}
