import useContent from "@/hooks/useConten";
import { Fragment, useEffect, useMemo, useRef, useState } from "react";
import Dead from "./Dead";
import Image_Bg from "@/assets/images/play_area/bg.png";
import Image_Black from "@/assets/images/play_area/black_body.png";
import Image_White from "@/assets/images/play_area/white_body.png";
import Image_operation_bar from "@/assets/images/play_area/operation_bar.png";
import Image_Red_body from "@/assets/images/play_area/red_body.png";
import Image_Virtual from "@/assets/images/play_area/virtual_body.png";

import Mask_1 from "@/assets/images/play_area/mask_1.png";
import Mask_2 from "@/assets/images/play_area/mask_2.png";
import Audio_Heartbeat from "@/assets/audio/heartbeat.mp3";
import Audio from "@/components/Audio";
import Audio_Kill from "@/assets/audio/kill.mp3";

import Image_heartbeat_recording from "@/assets/images/play_area/heartbeat_recording.png";
import {
  HEARTBEAT_LINE,
  MAX_ERROR_COUNT,
  TOTAL_HOLD_BREATH_TIME,
} from "./constant";
import { useGlobalSpace } from "./useGlobalSpace";
export const PlayArea = (props: { now: number }) => {
  const { now } = props;

  // 剩余憋气时间
  const [remainTime, setRemainTime] = useState<number>(TOTAL_HOLD_BREATH_TIME);
  // 记录是否开始憋气
  const isStartHoldBreathRef = useRef(false);
  // 失误次数
  const [errorCount, setErrorCount] = useState(0);
  // 心跳线滚动距离
  const [lineDistance, setLineDistance] = useState(0);
  // 获取指示器的ref
  const operationBarRef = useRef<HTMLDivElement>(null);
  // 获取心跳线的ref
  const lineRef = useRef<HTMLDivElement>(null);
  // 获取内容
  const item = useContent(now)?.playArea;
  // 追加错误次数的锁，限制每个line只能追加一次
  const prevErrorLineIndexRef = useRef(-1);
  // 获取杀人音效的ref
  const killAudioRef = useRef<HTMLAudioElement>(null);

  /**
   * 将憋气时间转换为指示器高度
   */
  const operationBarHeight = useMemo(() => {
    //计算憋气时间相对总时间的比例，然后转为百分比
    const percentage = (remainTime / TOTAL_HOLD_BREATH_TIME) * 100;
    return Math.max(percentage, 10) + "%";
  }, [remainTime]);

  /**
   * 根据憋气时间计算是否死亡，死亡标准是剩余憋气时间为0
   */
  const isDead = useMemo(() => {
    if (remainTime <= 0 || errorCount >= MAX_ERROR_COUNT) {
      console.log("死亡");
      return true;
    }
  }, [remainTime, errorCount]);

  /**
   * 计算是否为指示器显示animate__headShake动画
   */
  const isHeadShake = useMemo(() => {
    return remainTime / TOTAL_HOLD_BREATH_TIME < 0.4 && !isDead;
  }, [remainTime, isDead]);

  /**
   * 根据错误次数计算血量百分比
   */
  const bloodPercentage = useMemo(() => {
    const percentage = (errorCount / (MAX_ERROR_COUNT - 1)) * 100;
    console.log("percentage", percentage);
    return `${percentage}%`;
  }, [errorCount]);
  /**
   * 根据心跳线距离和指示器位置，计算当前指示器处于哪个心跳线上
   */
  const currentLineIndex = useMemo(() => {
    if (!operationBarRef.current) {
      return null;
    }
    const { left, width } = operationBarRef.current.getBoundingClientRect();
    const operationCenter = left + width / 2;
    // 累加心跳线距离，计算当前指示器的位置
    // 获取心跳线下所有的img元素
    const lines = lineRef.current?.querySelectorAll(".line");
    if (!lines) {
      return null;
    }
    for (let i = 0; i < lines.length; i++) {
      const item = lines[i];
      // 获取当前心跳线的左边距和宽度
      const { left: itemLeft, width: itemWidth } = item.getBoundingClientRect();
      // 如果当前指示器的位置在当前心跳线上, 那么之前的心跳线偏移加上当前心跳线的宽度就会大于移动距离
      if (
        itemLeft <= operationCenter &&
        itemLeft + itemWidth >= operationCenter
      ) {
        return i;
      }
    }
    return null;
  }, [lineDistance]);

  /**
   * 空格按下时，标志位为true
   */
  const handleKeyDown = () => {
    isStartHoldBreathRef.current = true;
  };
  /**
   * 空格松开时，标志位为false
   */
  const handleKeyUp = () => {
    isStartHoldBreathRef.current = false;
  };
  // 监听当前心跳线变化,如果当前心跳线有警告，并且没有按下空格，就增加错误次数,中途松开空格也会增加错误次数
  useEffect(() => {
    if (currentLineIndex === null) {
      return;
    }
    const currentLine = HEARTBEAT_LINE[currentLineIndex];
    if (
      prevErrorLineIndexRef.current !== currentLineIndex &&
      currentLine.hasAlert &&
      !isStartHoldBreathRef.current
    ) {
      prevErrorLineIndexRef.current = currentLineIndex;
      setErrorCount((prev) => prev + 1);
    }
  }, [currentLineIndex, now]);
  // 监听空格按下
  useGlobalSpace(handleKeyDown, handleKeyUp);

  // 监听时间变化，更新憋气时间和心跳线距离
  useEffect(() => {
    // 如果开始憋气，就减少时间
    if (isStartHoldBreathRef.current) {
      setRemainTime((prev) => Math.max(prev - 0.2, 0));
    } else if (!isDead) {
      setRemainTime((prev) => Math.min(prev + 0.1, TOTAL_HOLD_BREATH_TIME));
    }
    //跟随时间变化，移动心跳线
    setLineDistance((prev) => prev + 15);
  }, [now]);
  /**
   * 每次错误次数变化，就播放一次杀人音效
   */
  useEffect(() => {
    if (errorCount > 0) {
      killAudioRef.current?.play();
    }
  }, [errorCount]);
  // 渲染Mask
  return (
    <>
      <div
        className=" fixed w-full h-full bg-no-repeat bg-cover bg-center transition"
        style={{ zIndex: item ? 9999 : -9999 }}
      >
        {/* 控制板 */}
        {isDead ? (
          <Dead />
        ) : (
          <>
            <div
              className=" absolute bottom-0 w-full h-60 bg-no-repeat bg-cover bg-center"
              style={{
                backgroundImage: `url(${Image_Bg})`,
              }}
            >
              <div className=" flex h-full w-full items-center">
                {/* 声音 */}
                <Audio autoPlay loop src={Audio_Heartbeat}></Audio>
                <Audio ref={killAudioRef} src={Audio_Kill}></Audio>
                {/* 心跳指示器 */}
                <div className=" w-24 relative z-10 ml-8 mt-3 animate__animated  animate__heartBeat animate__slow animate__infinite">
                  <img src={Image_Virtual} className="absolute" alt="" />

                  {errorCount + 1 === MAX_ERROR_COUNT ? (
                    <>
                      <img src={Image_Red_body} alt="" />
                    </>
                  ) : (
                    <>
                      <img src={Image_Black} alt="" />
                      <div
                        className=" w-full overflow-hidden absolute bottom-0"
                        style={{ height: bloodPercentage }}
                      >
                        <img
                          src={Image_White}
                          className=" absolute bottom-0 "
                          alt=""
                        />
                      </div>
                    </>
                  )}
                </div>
                <div className=" flex-1 relative -ml-3 w-0 ">
                  {/* 心跳线 */}
                  <div
                    id="line"
                    className=" flex items-center w-max transition-all"
                    ref={lineRef}
                    style={{ transform: `translateX(-${lineDistance}px)` }}
                  >
                    {HEARTBEAT_LINE.map((item, index) => {
                      return (
                        <Fragment key={index}>
                          {item.hasAlert && currentLineIndex === index && (
                            <div className="">
                              <div className="absolute">
                                <img
                                  src={Image_heartbeat_recording}
                                  style={{ width: item.width }}
                                  className=" transform -translate-y-1/2 h-52"
                                  alt=""
                                />
                              </div>
                            </div>
                          )}
                          <img
                            src={item.img}
                            className="line flex-shrink-0"
                            style={{ width: item.width }}
                            alt=""
                          />
                        </Fragment>
                      );
                    })}
                  </div>
                  {/* 指示器 */}
                  <div
                    className={`absolute h-full top-0 py-4 left-[calc(50%-5rem)] flex items-center animate__animated ${
                      isHeadShake ? "animate__headShake" : ""
                    } animate__infinite`}
                    ref={operationBarRef}
                  >
                    <img
                      src={Image_operation_bar}
                      className="w-10 transition-all"
                      style={{ height: operationBarHeight }}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <img
                src={Mask_1}
                className=" z-10 absolute top-0 left-0 w-full h-full"
                alt=""
              />
            </div>
            {errorCount === MAX_ERROR_COUNT - 1 && (
              <img
                src={Mask_2}
                className=" absolute top-0 left-0 w-screen h-screen"
                alt=""
              />
            )}
          </>
        )}
      </div>
    </>
  );
};

export default PlayArea;
