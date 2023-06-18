import { InstagramEmbed } from "react-social-media-embed";
import {
  TwitterEmbed,
  YouTubeEmbed,
  FacebookEmbed,
} from "react-social-media-embed";

type Props = {};
function OtherSocials({}: Props) {
  return (
    <div className=" mt-10  p-4 md:p-10">
      <h2 className=" mb-4 text-center font-bold text-2xl md:text-3xl lg:text-4xl">
        {" "}
        Other Socials
      </h2>

      <div className=" flex flex-col items-center md:flex-row md:flex-wrap md:items-start">
        <div className=" m-4">
          <InstagramEmbed
            url="https://www.instagram.com/p/CqVBLH9OWUk/?hl=en"
            width={325}
            height={600}
          />
        </div>

        <div className=" m-4">
          <TwitterEmbed
            url="https://twitter.com/CHARLIESHUN/status/1381209974970314759?s=20"
            width={325}
            height={600}
          />
        </div>

        <div className=" m-4">
          <YouTubeEmbed
            url="https://www.youtube.com/watch?v=AI8TDq7AMmw"
            width={325}
            height={600}
          />
        </div>

        <div className=" m-4">
          <FacebookEmbed
            url="https://www.facebook.com/bigbrotherau/photos/a.124512235622552/492719402135165/"
            width={325}
            height={600}
        
          />
        </div>
       
      </div>
    </div>
  );
}
export default OtherSocials;
