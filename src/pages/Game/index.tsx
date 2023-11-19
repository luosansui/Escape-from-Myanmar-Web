import BackGround from "./components/BackGround";

import useTimeLine from "./hooks/useTimeLine";

import DialogBox from "./components/DialogBox";
import Mask from "./components/Mask";
import PlayArea from "./components/PlayArea";
const Game = () => {
  // 时间轴
  const { now, setSpeed } = useTimeLine();
  //setSpeed(2);
  // 渲染背景图
  return (
    <div className=" relative h-full">
      {/* 显示游戏时间轴 */}
      <div className=" absolute left-0 text-white">
        当前时间：
        <span className=" inline-block w-[40px]">{now}</span>秒
      </div>
      <BackGround now={now} />
      <DialogBox now={now} />
      <Mask now={now} />
      <PlayArea now={now} />
    </div>
  );
};

export default Game;
