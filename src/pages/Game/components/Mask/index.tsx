import useContent from "@/hooks/useConten";
import { useMemo } from "react";
export const Mask = (props: { now: number }) => {
  const { now } = props;
  const item = useContent(now)?.mask;
  // 计算zIndex
  const zIndex = useMemo(() => {
    if (!item) return -999;
    return 999;
  }, [item]);
  // 渲染Mask
  return (
    <>
      <div
        className=" fixed w-full h-full bg-no-repeat bg-cover bg-center transition"
        style={{
          zIndex,
          backgroundColor: item?.bgColor,
          transitionDuration: `${item?.duration ?? 0}s`,
          backgroundImage: item?.bgImage,
        }}
      ></div>
    </>
  );
};

export default Mask;
