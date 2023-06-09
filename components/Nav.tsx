import Image from "next/image"
import logo from "../assests/Carlos Logo.png"

type Props = {}
function Nav({}: Props) {
  return (
    <div className=" ">
        <Image src={logo} width={250} height={150} alt=" Carlos Castro Logo Image" />        
    </div>
  )
}
export default Nav