import { useCallback, useEffect, useRef } from "react";

/**
 * 钩子用来监听全局的键盘空格按下和抬起事件，并执行相应的函数
 * @param {Function} mouseDownCallback 按下空格键时执行的函数
 * @param {Function} mouseUpCallback 抬起空格键时执行的函数
 */
export const useGlobalSpace = (
  mouseDownCallback: () => void,
  mouseUpCallback: () => void,
) => {
  // 使用ref来保存函数，避免重复渲染
  const mouseDownCallbackRef = useRef(mouseDownCallback);
  const mouseUpCallbackRef = useRef(mouseUpCallback);
  // 记录键盘是否按下
  const isSpaceDown = useRef(false);
  // 监听函数变化，更新ref
  useEffect(() => {
    mouseDownCallbackRef.current = mouseDownCallback;
    mouseUpCallbackRef.current = mouseUpCallback;
  }, [mouseDownCallback, mouseUpCallback]);
  // 键盘按下的回调函数
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.code === "Space") {
      mouseDownCallbackRef.current();
      isSpaceDown.current = true;
    }
  }, []);
  // 键盘抬起的回调函数，抬起只在
  const handleKeyUp = useCallback((e: KeyboardEvent) => {
    if (e.code === "Space" && isSpaceDown.current) {
      mouseUpCallbackRef.current();
      isSpaceDown.current = false;
    }
  }, []);
  // 组件渲染后添加监听事件
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);
    // 组件卸载后移除监听事件
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [handleKeyDown, handleKeyUp]);
};
