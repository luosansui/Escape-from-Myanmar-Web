import { useEffect, useRef, useState } from "react";

/**
 * @description 钩子会根据传入的延迟时间返回一个时间线,同时可以控制时间线的暂停和开始以及调节速度
 * @param {number} delay 延迟时间
 * @param {number} defaultSpeed 默认速度
 */
const useTimeLine = (delay = 0, defaultSpeed = 1) => {
  // 当前时间
  const [now, setNow] = useState(0);
  // 速度
  const speedRef = useRef(defaultSpeed);
  // 是否暂停
  const isPauseRef = useRef(false);
  // 定时器ref
  const outTimer = useRef<NodeJS.Timeout | null>(null);
  const intervalTimer = useRef<NodeJS.Timeout | null>(null);

  // 使用钩子后开始时间轴
  useEffect(() => {
    // 延迟后开始执行
    outTimer.current = setTimeout(() => {
      updateNow();
      intervalTimer.current = setInterval(updateNow, 100);
    }, 100 * delay);
    // 清除定时器
    return () => {
      if (outTimer.current) {
        clearTimeout(outTimer.current);
      }
      if (intervalTimer.current) {
        clearInterval(intervalTimer.current);
      }
    };
  }, []);
  /**
   * 更新时间
   */
  const updateNow = () => {
    if (isPauseRef.current) {
      return;
    }
    setNow((now) => {
      const newNow = now + 0.1 * speedRef.current;
      return Math.round(newNow * 10) / 10;
    });
  };
  /**
   * 更新速度
   */
  const setSpeed = (newSpeed: number) => {
    speedRef.current = newSpeed;
  };
  /**
   * 控制时间轴暂停
   */
  const pause = () => {
    isPauseRef.current = true;
  };
  /**
   * 控制时间轴开始
   */
  const start = () => {
    isPauseRef.current = false;
  };
  return {
    now,
    setSpeed,
    pause,
    start,
  };
};
export default useTimeLine;
