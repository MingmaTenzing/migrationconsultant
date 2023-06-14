type Props = {};
function AboutMe({}: Props) {
  return (
    <div className="  py-20 p-8 bg-[#202020] text-white">
      <div className=" lg:w-[1200px] m-auto flex flex-col  items-center space-y-4">
        <h3 className="  text-bluestyle  ">...</h3>
        <h2 className=" text-3xl md:text-4xl text-center">Why Choose Carlos Charlie Castro For Your Migration Solution? </h2>
        <p className=" lg:w-[700px] md:text-base text-sm text-center opacity-60 font-light">
        Carlos Charlie Castro is a highly regarded migration lawyer specializing in
          Latin American migration in Perth. As one of the top professionals in
          this field, I provide personalized and effective solutions for student
          visas, skilled migration, and family sponsorship. Let me guide you
          towards a successful migration journey in Australia.
        </p>
      </div>
    </div>
  );
}
export default AboutMe;
