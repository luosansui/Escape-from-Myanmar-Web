import { useMemo } from "react";
import { TIMELINE_CONTENT } from "@/config/setting";
import useContent from "@/hooks/useConten";
const DialogBox = ({ now }: { now: number }) => {
  // 获取设置项目
  const item = useContent(now)?.dialogBox;
  if (!item) return null;
  return (
    <>
      {item ? (
        <div
          className="absolute bottom-0 w-full p-3"
          style={{ zIndex: item.zIndex }}
        >
          <div className=" h-full bg-[rgba(0,0,0,0.8)] text-white p-4 rounded-md text-center">
            <div className=" text-lg font-semibold">【 {item?.speaker} 】</div>
            <div className=" ">{item?.text}</div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default DialogBox;
