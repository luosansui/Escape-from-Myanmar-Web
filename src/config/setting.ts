import Image_BG_1 from "@/assets/images/background/bg_1.png";
import Image_BG_2 from "@/assets/images/background/bg_2.png";
import Image_BG_3 from "@/assets/images/background/bg_3.png";
import Imaage_Wardrobe from "@/assets/images/background/wardrobe.png";
export const TIMELINE_CONTENT = [
  {
    time: 0, //开始，耗时间2秒
    content: {
      dialogBox: {
        speaker: "背景音",
        text: "沉重、有节奏的脚步声...",
      },
      background: {
        bgImage: `url(${Image_BG_1})`,
        xPos: 0,
      },
    },
  },
  {
    time: 2, //视角向右移动，耗时1秒
    content: {
      dialogBox: {
        speaker: "我",
        text: "迅速藏到旁边的衣柜里",
      },
      background: {
        bgImage: `url(${Image_BG_1})`,
        xPos: 12,
        duration: 1,
      },
    },
  },
  {
    time: 3, //视角保持，切换背景，耗时0.5秒
    content: {
      dialogBox: {
        speaker: "我",
        text: "迅速藏到旁边的衣柜里",
      },
      background: {
        bgImage: `url(${Image_BG_2})`,
        xPos: 12,
        duration: 0.5,
      },
    },
  },
  {
    time: 3.5, //视角重置，耗时1秒
    content: {
      dialogBox: {
        speaker: "我",
        text: "迅速藏到旁边的衣柜里",
      },
      background: {
        bgImage: `url(${Image_BG_2})`,
        xPos: 0,
        duration: 1,
      },
    },
  },
  {
    time: 4.5, //视角保持，耗时1秒
    content: {
      dialogBox: {
        speaker: "背景音",
        text: "脚步声越来越近...",
      },
      background: {
        bgImage: `url(${Image_BG_2})`,
        xPos: 0,
      },
    },
  },
  {
    time: 5.5, // 门被打开，耗时0.5秒
    content: {
      dialogBox: {
        speaker: "背景音",
        text: "砰！门被打开了...",
      },
      background: {
        bgImage: `url(${Image_BG_2})`,
        xPos: 0,
        animateType: 0,
      },
    },
  },
  {
    time: 6, // 显示遮罩，耗时1秒
    content: {
      dialogBox: {
        speaker: "背景音",
        text: "砰！门被打开了...",
      },
      background: {
        bgImage: `url(${Image_BG_2})`,
        xPos: 0,
        animateType: 0,
      },
      mask: {
        bgColor: "rgba(0,0,0)",
        duration: 1,
      },
    },
  },
  {
    time: 7, // 保安出现，对话框消失，遮罩开始消失，耗时1秒
    content: {
      background: {
        bgImage: `url(${Image_BG_2})`,
        xPos: 0,
        animateType: 1,
      },
      mask: {
        bgColor: "",
        duration: 1,
      },
    },
  },
  {
    time: 8, // 保安出现在门口，耗时0.3秒
    content: {
      background: {
        bgImage: `url(${Image_BG_2})`,
        xPos: 0,
        animateType: 1,
      },
    },
  },
  {
    time: 8.3, // 保安在门口说话，耗时0.7秒
    content: {
      background: {
        bgImage: `url(${Image_BG_2})`,
        xPos: 0,
        animateType: 1,
      },
      dialogBox: {
        speaker: "保安",
        text: "出来吧，我知道你在这里，难道你不管你的同伴了吗",
      },
    },
  },
  {
    time: 9, // 视角右移动，耗时1秒
    content: {
      background: {
        bgImage: `url(${Image_BG_2})`,
        xPos: 12,
        animateType: 1,
        duration: 1,
      },
      dialogBox: {
        speaker: "保安",
        text: "出来吧，我知道你在这里，难道你不管你的同伴了吗",
      },
    },
  },
  {
    time: 10, // 视角暂停，耗时0.5秒
    content: {
      background: {
        bgImage: `url(${Image_BG_2})`,
        xPos: 12,
        animateType: 1,
      },
      dialogBox: {
        speaker: "保安",
        text: "出来吧，我知道你在这里，难道你不管你的同伴了吗",
      },
    },
  },
  {
    time: 10.5, // 显示遮罩，准备切换我的视角，耗时0.3秒
    content: {
      background: {
        bgImage: `url(${Image_BG_2})`,
        xPos: 12,
        animateType: 1,
      },
      mask: {
        bgColor: "rgba(0,0,0)",
        duration: 0.3,
      },
    },
  },
  {
    time: 10.8, // 变更背景图，耗时0.2秒
    content: {
      background: {
        bgImage: `url(${Image_BG_3})`,
        xPos: 12,
        duration: 0.2,
        animateType: 1,
      },
      mask: {
        bgColor: "rgba(0,0,0)",
        duration: 0.2,
      },
    },
  },
  {
    time: 11, // 切换我的视角，耗时2秒
    content: {
      background: {
        bgImage: `url(${Image_BG_3})`,
        xPos: 12,
      },
      mask: {
        bgImage: `url(${Imaage_Wardrobe})`,
      },
      dialogBox: {
        speaker: "我",
        text: "......",
        zIndex: 999999,
      },
    },
  },
  {
    time: 13, // 显示黑色遮罩，耗时0.2秒
    content: {
      background: {
        bgImage: `url(${Image_BG_3})`,
        xPos: 12,
      },
      mask: {
        bgColor: "rgb(0,0,0)",
        duration: 0.2,
      },
      dialogBox: {
        speaker: "我",
        text: "......",
        zIndex: 999999,
      },
    },
  },
  {
    time: 13.2, // 切换背景图，准备切换原视角，耗时0.3秒
    content: {
      background: {
        bgImage: `url(${Image_BG_2})`,
        xPos: 12,
      },
      mask: {
        duration: 0.3,
        bgColor: "rgb(0,0,0)",
      },
      dialogBox: {
        speaker: "我",
        text: "......",
        zIndex: 999999,
      },
    },
  },
  {
    time: 13.5, // 切换回原视角，耗时0.5秒
    content: {
      background: {
        bgImage: `url(${Image_BG_2})`,
        xPos: 12,
        animateType: 1,
      },

      dialogBox: {
        speaker: "保安",
        text: "不出来是吧？！",
      },
    },
  },
  {
    time: 14, // 向左移动视角，耗时1秒
    content: {
      background: {
        bgImage: `url(${Image_BG_2})`,
        xPos: 0,
        animateType: 1,
        duration: 1,
      },
      dialogBox: {
        speaker: "保安",
        text: "不出来是吧？！",
      },
    },
  },
  {
    time: 15, // 暂停，耗时0.5秒
    content: {
      background: {
        bgImage: `url(${Image_BG_2})`,
        xPos: 0,
        animateType: 1,
      },
      dialogBox: {
        speaker: "保安",
        text: "不出来是吧？！",
      },
    },
  },
  {
    time: 15.5, // 显示遮罩，准备切换我的视角，耗时0.2秒
    content: {
      background: {
        bgImage: `url(${Image_BG_2})`,
        xPos: 0,
        animateType: 1,
      },
      mask: {
        bgColor: "rgba(0,0,0)",
        duration: 0.2,
      },
    },
  },
  {
    time: 15.7, // 切换我的视角，耗时0.3秒
    content: {
      background: {
        bgImage: `url(${Image_BG_3})`,
        xPos: 12,
      },
      mask: {
        bgImage: `url(${Imaage_Wardrobe})`,
      },
    },
  },
  {
    time: 16, // 开始心跳图，无限耗时
    content: {
      background: {
        bgImage: `url(${Image_BG_3})`,
        xPos: 12,
        animateType: 2,
      },
      mask: {
        bgImage: `url(${Imaage_Wardrobe})`,
      },
      playArea: true,
    },
  },
  {
    time: 10000000,
    content: {
      dialogBox: {
        speaker: "END",
        text: "",
      },
      background: {
        bgImage: `url(${Image_BG_2})`,
        xPos: 0,
      },
    },
  },
];
