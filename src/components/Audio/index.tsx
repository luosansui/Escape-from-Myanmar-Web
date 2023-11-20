import React, { forwardRef, ForwardedRef, useImperativeHandle } from "react";

const Audio = (
  {
    src,
    autoPlay,
    loop,
    time,
    delay,
  }: {
    src: string;
    autoPlay?: boolean;
    loop?: boolean;
    time?: number;
    delay?: number;
  },
  ref: ForwardedRef<{
    play: () => Promise<void> | undefined;
  }>,
) => {
  const audioRef = React.useRef<HTMLAudioElement | null>(null);
  /**
   * 处理播放事件
   */
  const handlePlay = () => {
    console.log("播放音频");
    if (loop) {
      return;
    }
    if (time) {
      setTimeout(() => {
        audioRef.current?.pause();
      }, time);
    }
  };
  /**
   * 处理音频加载完成事件
   */
  const handleCanPlay = async () => {
    if (loop) {
      return;
    }
    if (delay) {
      await new Promise((resolve) => setTimeout(resolve, delay));
      audioRef.current?.play();
    }
  };

  useImperativeHandle(ref, () => ({
    play() {
      return audioRef.current?.play();
    },
  }));
  return (
    <audio
      onPlay={handlePlay}
      onCanPlay={handleCanPlay}
      autoPlay={autoPlay}
      loop={loop}
      ref={audioRef}
      src={src}
    />
  );
};

export default forwardRef(Audio);
