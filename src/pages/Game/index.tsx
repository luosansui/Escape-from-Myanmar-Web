import BackGround from "./components/BackGround";

import useTimeLine from "./hooks/useTimeLine";
import Aideo_Bg from "@/assets/audio/bg.mp3";
import Audio_Footsteps from "@/assets/audio/footsteps.mp3";
import DialogBox from "./components/DialogBox";
import Mask from "./components/Mask";
import PlayArea from "./components/PlayArea";
import useContent from "@/hooks/useConten";

import Audio from "@/components/Audio";
const Game = () => {
  // 时间轴
  const { now, setSpeed } = useTimeLine();
  const item = useContent(now);
  //setSpeed(0);
  // 渲染背景图
  return (
    <div className=" relative h-full">
      {/* 显示游戏时间轴 */}
      <div className=" z-[99999] absolute left-0 text-white">
        当前时间：
        <span className=" inline-block min-w-[40px]">{now}</span>秒
      </div>
      <BackGround now={now} />
      <DialogBox now={now} />
      <Mask now={now} />
      {item?.playArea && <PlayArea now={now} />}
      <Audio autoPlay src={Aideo_Bg} delay={1000} />
      <Audio autoPlay src={Audio_Footsteps} delay={1000} time={4000} />
    </div>
  );
};

export default Game;
