import Image_BG_2 from "@/assets/images/background/bg_2.png";
import Imaage_Wardrobe from "@/assets/images/background/wardrobe.png";
import Image_Blood from "@/assets/images/background/blood.png";
import Image_Face from "@/assets/images/background/face.png";
import Image_DeadText from "@/assets/images/background/dead_text.png";
import { useEffect, useState } from "react";
import Audio_JumpScare from "@/assets/audio/jumpscare.mp3";
import Audio from "@/components/Audio";
const Dead = () => {
  const [isShowBlood, setIsShowBlood] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsShowBlood(true);
    }, 1000);
  }, []);
  return (
    <div className="absolute w-full h-full overflow-hidden">
      <Audio autoPlay src={Audio_JumpScare}></Audio>
      <div
        className="z-0 absolute w-[2844px] h-full bg-no-repeat bg-[auto_100%] bg-left transition-all"
        style={{
          backgroundImage: `url(${Image_BG_2})`,
          left: `${-12}rem`,
        }}
      ></div>
      <div
        className="absolute z-10 w-full h-full bg-no-repeat bg-cover bg-center transition-all"
        style={{
          backgroundImage: `url(${Image_Face})`,
        }}
      ></div>
      <div
        className="absolute z-10 w-full h-full bg-no-repeat bg-cover bg-center transition-all"
        style={{
          backgroundImage: `url(${Imaage_Wardrobe})`,
        }}
      ></div>
      {isShowBlood && (
        <div
          className="absolute z-10 w-full h-full bg-no-repeat bg-cover bg-center transition flex items-center justify-center"
          style={{
            backgroundImage: `url(${Image_Blood})`,
          }}
        >
          <img src={Image_DeadText} className=" mb-44" alt="" />
        </div>
      )}
    </div>
  );
};

export default Dead;
