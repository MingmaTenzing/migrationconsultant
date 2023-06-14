import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import FacebookIcon from "../assests/Facebook.png";
import InstagramIcon from "../assests/Instagram.png";
import LinkedInIcon from "../assests/LinkedIn.png";
import profilePicture from "../assests/Carlos Charlie Castro.jpg";

type Props = {};
function Hero({}: Props) {
  return (
    <main className="   lg:w-[1200px] m-auto lg:flex  lg:items-center pt-[130px] md:px-10 md:pt-[160px] lg:py-0 lg:pt-20 px-4 bg-[#f6f6f6]">
      <div className=" space-y-3 md:space-y-6">
        <h1 className=" font-semibold md:text-xl "> Carlos Castro</h1>
        <h2 className=" font-bold text-4xl md:text-5xl">
          I'm a
          <span className="  text-bluestyle ml-3">
            <Typewriter
              words={[
                "Migration Consultant",
                "Executive Manager",
                "S. Marketing Trainer",
              ]}
              loop={true}
              typeSpeed={70}
              cursor
              cursorColor="#1e88e9"
            />
          </span>
        </h2>
        <p className=" lg:w-[600px] md:text-xl font-light text-gray-500">
          Your migration journey made easy. As a trusted consultant, I
          specialize in guiding individuals and families through the
          complexities of immigration. Let's make your dreams a reality.
        </p>

        <div className=" flex space-x-3 md:space-x-4 ">
          <Image
            src={LinkedInIcon}
            alt="LinkedIn Logo "
            width={100}
            height={100}
            className="w-10     hover:scale-110 transition-all ease-linear duration-150"
          />
          <Image
            src={InstagramIcon}
            alt="Instagram Logo "
            width={100}
            height={100}
            className="w-10     hover:scale-110 transition-all ease-linear duration-150"
          />
          <Image
            src={FacebookIcon}
            alt="Facebook Logo "
            width={100}
            height={100}
            className="w-10     hover:scale-110 transition-all ease-linear duration-150"
          />
        </div>
      </div>

      <div>
        <Image
          src={profilePicture}
          alt="Carlos Castro Image"
          width={697}
          height={700}
          className=" lg:w-[800px] mt-6 md:mt-0 md:w-[500px] m-auto  object-cover"
        />
      </div>
    </main>
  );
}
export default Hero;
