import useContent from "@/hooks/useConten";
import { useMemo } from "react";

import Image_Bg from "@/assets/images/play_area/bg.png";
import Image_Entity from "@/assets/images/play_area/entity.png";
import Image_Virtual from "@/assets/images/play_area/virtual.png";

export const PlayArea = (props: { now: number }) => {
  const { now } = props;
  const item = useContent(now)?.playArea;
  // 计算zIndex
  const zIndex = useMemo(() => {
    if (!item) return -9999;
    return 9999;
  }, [item]);
  // 渲染Mask
  return (
    <>
      <div
        className=" fixed w-full h-full bg-no-repeat bg-cover bg-center transition"
        style={{ zIndex }}
      >
        <div
          className=" absolute bottom-0 w-full h-60 bg-no-repeat bg-cover bg-center"
          style={{
            backgroundImage: `url(${Image_Bg})`,
          }}
        >
          <div className=" flex h-full items-center">
            <div className=" mt-20 w-full flex">
              <div className="w-16 relative ml-10">
                <img src={Image_Virtual} alt="" />
                <div className=" h-1/2 w-full overflow-hidden absolute bottom-0">
                  <img
                    src={Image_Entity}
                    className=" absolute bottom-0 "
                    alt=""
                  />
                </div>
              </div>
              <div className=" flex-1 flex"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlayArea;
