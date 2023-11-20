import Image_Animate_0 from "@/assets/images/background/animate_0.png";
import Image_ViciousPerson from "@/assets/images/background/vicious_person.png";
import Image_Victim from "@/assets/images/background/victim.png";

import Image_UpEye from "@/assets/images/background/up_eye.png";
import Image_DownEye from "@/assets/images/background/down_eye.png";

import Imaage_Wardrobe from "@/assets/images/background/wardrobe.png";
import Audio from "@/components/Audio";
import Audio_KnockDoor from "@/assets/audio/knock_door.mp3";
import Audio_OpenDoor from "@/assets/audio/open_door.wav";
import { useEffect, useRef, useState } from "react";
const Animate = ({ type, now }: { type?: number; now: number }) => {
  // 保安位置
  const [securityPosition, setSecurityPosition] = useState(0);
  // 记录当前移动方向
  const [direction, setDirection] = useState<-1 | 1>(1);
  // 记录当前时间
  const timeRef = useRef<number>(0);
  // 是否闭眼
  const [isCloseEye, setIsCloseEye] = useState(false);
  // 锁定操作
  const lockRef = useRef(false);
  // 监听type变化，如果为2，就开始移动保安
  useEffect(() => {
    // 5秒操作一次
    if (type !== 2 || now - timeRef.current < 4 || lockRef.current) {
      return;
    }
    // 操作加锁
    lockRef.current = true;
    // 如果大于120，就往左走
    if (securityPosition >= 110) {
      setDirection(-1);
    } else if (securityPosition <= -10) {
      setDirection(1);
    }
    // 闭眼
    setIsCloseEye(true);
    // 等待闭眼完成后，开始移动
    setTimeout(() => {
      timeRef.current = now;
      setSecurityPosition((prev) => prev + 20 * direction);
      setIsCloseEye(false);
      // 解锁
      lockRef.current = false;
    }, 1000);
  }, [type, now]);
  if (type === undefined) {
    return null;
  }
  const ani2TsxMap: Record<number, JSX.Element> = {
    0: (
      <div className=" absolute left-[22rem] top-[5rem]">
        <img className="animate__heartBeat" src={Image_Animate_0} alt="" />
        <Audio autoPlay src={Audio_KnockDoor} time={900} />
        <Audio src={Audio_OpenDoor} delay={1000} time={1000} />
      </div>
    ),
    1: (
      <div className=" absolute bottom-36 left-72 ">
        <div className="flex items-end">
          <div className=" ">
            <img src={Image_ViciousPerson} className=" w-[16rem]" alt="" />
          </div>
          <div>
            <img src={Image_Victim} className=" w-[9rem]" alt="" />
          </div>
        </div>
      </div>
    ),
    2: (
      <>
        <div
          className=" absolute bottom-36 left-[120rem]"
          style={{ left: `${securityPosition}rem` }}
        >
          <div className="flex items-end">
            <div className=" ">
              <img
                src={Image_ViciousPerson}
                className=" w-[16rem] origin-bottom sca"
                alt=""
                style={{ transform: `scaleX(${direction})` }}
              />
            </div>
          </div>
        </div>
        <div className="fixed inset-0">
          <img
            src={Imaage_Wardrobe}
            className=" absolute w-full h-full z-[-1]"
            alt=""
          />
          <div className=" h-full  w-full absolute ">
            <div
              className="bg-black transition-all duration-1000"
              style={{ height: isCloseEye ? "50%" : 0 }}
            ></div>
            <img src={Image_UpEye} alt="" className="w-full h-1/2" />
          </div>
          <div className=" h-full  w-full absolute  transition flex flex-col justify-end">
            <img src={Image_DownEye} alt="" className="w-full h-1/2" />
            <div
              className="bg-black transition-all duration-1000"
              style={{ height: isCloseEye ? "50%" : 0 }}
            ></div>
          </div>
        </div>
      </>
    ),
  };
  return <>{ani2TsxMap[type]}</>;
};

export default Animate;
