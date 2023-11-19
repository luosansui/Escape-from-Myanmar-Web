import Animate from "./Animate";
import useContent from "@/hooks/useConten";
export const BackGround = ({ now }: { now: number }) => {
  const item = useContent(now)?.background;
  if (!item) return null;
  // 渲染背景图
  return (
    <>
      {item ? (
        <div className="absolute w-full h-full overflow-hidden">
          <div
            className="z-[-1] absolute w-[2844px] h-full bg-no-repeat bg-[auto_100%] bg-left transition-all"
            style={{
              backgroundImage: item.bgImage,
              left: `${-(item.xPos ?? 0)}rem`,
              transitionDuration: `${item.duration ?? 0}s`,
            }}
          >
            <Animate type={item.animateType} now={now} />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default BackGround;
