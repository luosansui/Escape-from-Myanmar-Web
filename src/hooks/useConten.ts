import { TIMELINE_CONTENT } from "@/config/setting";
import { useMemo } from "react";

/**
 * 获取当前内容
 */
const useContent = (now: number) => {
  const item = useMemo(() => {
    //如果当前时间大于对话框项目的时间，就显示该项目
    const currItem = TIMELINE_CONTENT.find((item, index) => {
      const nextItem = TIMELINE_CONTENT[index + 1];
      // 如果有下一个项目，就判断当前时间是否在当前项目和下一个项目之间
      // 如果没有下一个项目，就判断当前时间是否大于当前项目的时间
      if (nextItem) {
        return now >= item.time && now <= nextItem.time;
      } else {
        return now >= item.time;
      }
    });
    return currItem?.content;
  }, [now]);
  return item;
};

export default useContent;
