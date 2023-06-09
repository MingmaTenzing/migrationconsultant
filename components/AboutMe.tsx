type Props = {};
function AboutMe({}: Props) {
  return (
    <div className="  py-20 p-8 bg-[#202020] text-white">
        <div className=" lg:w-[1200px] m-auto flex flex-col  items-center space-y-4">

      <h3 className="  text-bluestyle  ">About Me</h3>
      <h2 className=" text-3xl md:text-4xl">Welcome To My Site</h2>
      <p className=" lg:w-[700px] md:text-base text-sm text-center opacity-60 font-light">
        I am a website designer from London, with a strong focus in UI/UX
        design. I love to get new experiences and always learn from my
        surroundings. I've done more than 50 projects. You can check it through
        portfolio section on this website. I looking forward to any
        opportunities and challenges.
      </p>
        </div>
    </div>
  );
}
export default AboutMe;
