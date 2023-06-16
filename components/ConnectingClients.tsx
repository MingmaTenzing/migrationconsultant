import Image from "next/image";
import clients from "../assests/Students.jpg";
type Props = {};
function ConnectingClients({}: Props) {
  return (
    <main className=" bg-[#202020] p-4 py-20">
      <div className=" lg:w-[1200px] lg:m-auto flex md:flex-row flex-col items-center lg:space-y-0 lg:space-x-6 space-y-6">
        <div className="  space-y-3 text-center lg:text-start">
          <h2 className=" font-bold text-white text-2xl md:text-3xl lg:text-5xl">
            Connecting with Clients and Students
          </h2>
          <p className=" font-light text-gray-200">
            {" "}
            I specialize in connecting with clients and students worldwide,
            solving their visa, course, career, and immigration concerns. No
            matter where you are, I offer tailored solutions and guidance,
            leveraging my expertise in international migration laws.Your success
            is of utmost importance. Let's embark on a smooth journey towards
            your desired future together.
          </p>
        </div>
        <div>
          <Image
            src={clients}
            alt="Meeting with Clients"
            width={500}
            height={400}
            className=" md:w-[600px] lg:min-w-[600px]"
          />
        </div>
      </div>
    </main>
  );
}
export default ConnectingClients;
