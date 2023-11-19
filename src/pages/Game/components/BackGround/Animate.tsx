import Image_Animate_0 from "@/assets/images/background/animate_0.png";
import Image_ViciousPerson from "@/assets/images/background/vicious_person.png";
import Image_Victim from "@/assets/images/background/victim.png";
import { useEffect, useRef, useState } from "react";
const Animate = ({ type, now }: { type?: number; now: number }) => {
  // 保安位置
  const [securityPosition, setSecurityPosition] = useState(0);
  // 记录当前移动方向
  const [direction, setDirection] = useState<-1 | 1>(1);

  // 监听type变化，如果为2，就开始移动保安
  useEffect(() => {
    console.log("type", type, now);
    if (type !== 2) {
      return;
    }
    // 如果大于130，就往左走
    if (securityPosition >= 130) {
      setDirection(-1);
    } else if (securityPosition <= -10) {
      setDirection(1);
    }

    setSecurityPosition((prev) => prev + 1.3 * direction);
  }, [type, now]);
  if (type === undefined) {
    return null;
  }
  const ani2TsxMap: Record<number, JSX.Element> = {
    0: (
      <div className=" absolute left-[22rem] top-[5rem]">
        <img className="animate__heartBeat" src={Image_Animate_0} alt="" />
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
      <div
        className=" absolute bottom-36 left-[120rem] transition-all "
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
    ),
  };
  return <>{ani2TsxMap[type]}</>;
};

export default Animate;
