import Image from "next/image";
import { TikTokEmbed, TwitterEmbed } from "react-social-media-embed";
import tiktok from "../assests/TikTok.png"
type Props = {};
function Socials({}: Props) {
  return (
    <div className=" p-4 md:p-10 mt-10">
      <div className=" lg:w-[1200px] m-auto lg:space-x-10 md:flex-row  md:items-center flex flex-col items-center space-y-4 lg:space-y-0 ">
        <div className=" space-y-4">
          <h2 className=" flex items-center font-bold text-2xl md:text-3xl lg:text-4xl">
            Follow me on TikTok !!
            <span><Image src={tiktok} alt="TikTok logo" className=" ml-4 w-10" /></span>
          </h2>
          <p className="md:hidden">
            🌍 Stay up to date on migration news and student visa updates!
            Follow me on TikTok [@charlieshun] for the latest information, tips,
            and insights. Let's stay informed together! 📲✨
          </p>
          <p className=" md:w-[400px] lg:w-[600px] lg:text-lg hidden md:flex">
            📢 Calling all migration news enthusiasts and students seeking visa
            updates! 🌍✈️  <br></br>Ready to stay in the loop with the hottest migration
            news and the latest student visa updates? Look no further! 🔥 <br></br> 🚀
            Join me on TikTok for a thrilling journey through the ever-changing
            world of migration and student visas. <br></br> 🎉🎒 Discover insightful tips,
            expert advice, and breaking news, all neatly packaged in bite-sized
            videos!  📲💡 <br></br>Don't miss out on this golden opportunity to be in the
            know! Follow me on TikTok at [@YourTikTokHandle] and be the first to
            tap into the latest updates. 🌟  <br></br>Remember, knowledge is power when it
            comes to navigating the migration landscape. Let's embark on this
            adventure together and stay ahead of the game! 🌏💪✨
          </p>
        </div>
        <div>
          <TikTokEmbed
            url="https://www.tiktok.com/@charlieshun/video/7146621157737860354?is_from_webapp=1&sender_device=pc&web_id=7238469947075806726"
            width={325}
          />
        </div>
      </div>
    </div>
  );
}
export default Socials;
