import {
  AcademicCapIcon,
  BriefcaseIcon,
  GlobeAsiaAustraliaIcon,
  LightBulbIcon,
  NewspaperIcon,
  PaperAirplaneIcon,
  TagIcon,
} from "@heroicons/react/24/outline";

type Props = {};
function Services({}: Props) {
  return (
    <div className=" mt-10 p-4">
      <div className=" flex flex-col  space-y-3 items-center">
        <h3 className=" text-bluestyle">Not Only That</h3>
        <h2 className=" text-center text-3xl md:text-4xl">
          I Provide Other Services As Well
        </h2>
      </div>

      <div className=" mt-4 flex flex-col items-center md:flex-row md:flex-wrap md:justify-center ">
        <div className=" cursor-pointer group m-4 hover:bg-bluestyle transition-all ease-linear duration-200 space-y-3 rounded-lg p-4 flex flex-col items-center justify-center text-center h-[300px]  border w-[300px]">
          <AcademicCapIcon className=" group-hover:text-white  transition-all ease-linear duration-200  text-bluestyle w-[60px]" />
          <h4 className=" group-hover:text-white transition-all ease-linear duration-200 font-semibold text-xl">
            International Student Counseling
          </h4>
          <p className=" group-hover:text-white transition-all ease-linear duration-200">
            I offer personalized international student counseling services,
            guiding students through the intricacies of studying abroad.
          </p>
        </div>
        <div className=" cursor-pointer group m-4 hover:bg-bluestyle transition-all ease-linear duration-200 space-y-3 rounded-lg p-4 flex flex-col items-center justify-center text-center h-[300px]  border w-[300px]">
          <GlobeAsiaAustraliaIcon className=" group-hover:text-white  transition-all ease-linear duration-200  text-bluestyle w-[60px]" />
          <h4 className=" group-hover:text-white transition-all ease-linear duration-200 font-semibold text-xl">
            Digital Marketing
          </h4>
          <p className=" group-hover:text-white transition-all ease-linear duration-200">
            Grow you business or personal brand with expert strategic planning,
            SEO and social media management.
          </p>
        </div>
        <div className=" cursor-pointer group m-4 hover:bg-bluestyle transition-all ease-linear duration-200 space-y-3 rounded-lg p-4 flex flex-col items-center justify-center text-center h-[300px]  border w-[300px]">
          <NewspaperIcon className=" group-hover:text-white  transition-all ease-linear duration-200  text-bluestyle w-[60px]" />
          <h4 className=" group-hover:text-white transition-all ease-linear duration-200 font-semibold text-xl">
            Student Visa
          </h4>
          <p className=" group-hover:text-white transition-all ease-linear duration-200">
            From eligibility assessment to documentation and application
            submission, I'll provide personalized support to make your
            educational dreams a reality.
          </p>
        </div>
        <div className=" cursor-pointer group m-4 hover:bg-bluestyle transition-all ease-linear duration-200 space-y-3 rounded-lg p-4 flex flex-col items-center justify-center text-center h-[300px]  border w-[300px]">
          <BriefcaseIcon className=" group-hover:text-white  transition-all ease-linear duration-200  text-bluestyle w-[60px]" />
          <h4 className=" group-hover:text-white transition-all ease-linear duration-200 font-semibold text-xl">
            Career Counseling
          </h4>
          <p className=" group-hover:text-white transition-all ease-linear duration-200">
            Unleash your career potential with personalized guidance. Let me
            help you explore your interests, set goals, and navigate the job
            market to achieve professional success.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Services;
